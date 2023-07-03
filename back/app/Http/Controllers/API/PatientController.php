<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use App\Http\Resources\PatientResource;
use App\Models\User;
use Illuminate\Http\Request;

class PatientController extends Controller
{

    public function index()
    {
        $patients = User::patients()->get();
        return PatientResource::collection($patients);
    }


    public function store(StorePatientRequest $request)
    {
        $patient = User::create(array_merge($request->validated(), ["role" => 3]));
        return new PatientResource($patient);
    }


    public function show(User $patient)
    {
        return new PatientResource($patient);
    }


    public function update(UpdatePatientRequest $request, User $patient)
    {
        $patient->update($request->validated());
        return new PatientResource($patient);
    }


    public function destroy(User $patient)
    {
        $patient->delete();
        return response()->json(
            [
                "data" => [
                    "message" => "patient's account deleted successfully"
                ]
            ]
        );
    }
}
