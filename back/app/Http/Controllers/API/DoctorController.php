<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;

use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Http\Resources\DoctorResource;
use App\Models\Appointment;
use Illuminate\Http\Request;

class DoctorController extends Controller
{

    public function index()
    {
        $doctors = User::doctors()->get();

        return DoctorResource::collection($doctors);
    }


    public function store(StoreDoctorRequest $request)
    {

        $doctor = user::create(array_merge(uploadImage($request, "images/users"), ["role" => 1]));
        return new DoctorResource($doctor);
    }


    public function show(User $doctor)
    {
        return new DoctorResource($doctor);
    }


    public function update(UpdateDoctorRequest $request, User $doctor)
    {
        $doctor->update(uploadImage($request, "images/users"));
        return new DoctorResource($doctor);
    }


    public function destroy(User $doctor)
    {
        $doctor->delete();
        return response()->json(
            [
                "data" => [
                    "message" => "doctor's account deleted successfully"
                ]
            ]
        );
    }

    public function appointments($id)
    {

        $appointments = Appointment::where('doctor_id', $id)->get()->first();
        if (is_null($appointments)) {
            return response()->json(['success' => 'false', 'message' => 'Invalid_DoctorID']);
        } else {
            // $appointments = Appointment::where('doctor_id',$id)->get();
            $appointments = Appointment::where('doctor_id', $id)

                ->with('patient:id,name,email,gender,date_of_birth,phone_number','doctor:id,name')

                ->get(['id', 'time', 'patient_id', 'doctor_id']);
            return response()->json(['success' => 'Success', 'appointments' => $appointments]);
        }
    }
}
