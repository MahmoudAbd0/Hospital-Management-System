<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;

use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Http\Resources\DoctorResource;
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
}
