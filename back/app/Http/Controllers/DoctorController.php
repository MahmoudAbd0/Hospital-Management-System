<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDoctorRequest;
use App\Http\Requests\UpdateDoctorRequest;
use App\Http\Resources\DoctorResource;
use App\Models\User;
use Illuminate\Http\Request;
use League\CommonMark\Extension\Attributes\Node\Attributes;

class DoctorController extends Controller
{

    public function index()
    {
        $doctors = User::doctors()->get();

        return DoctorResource::collection($doctors);
    }


    public function store(StoreDoctorRequest $request)
    {
        $doctor = user::create(array_merge($request->validated(), ["role" => 1]));
        return new DoctorResource($doctor);
    }


    public function show(User $doctor)
    {
        return new DoctorResource($doctor);
    }


    public function update(UpdateDoctorRequest $request, User $doctor)
    {
        $doctor->update($request->validated());
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
