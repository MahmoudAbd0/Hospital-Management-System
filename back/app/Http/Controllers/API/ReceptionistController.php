<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReceptionistRequest;
use App\Http\Requests\UpdateReceptionistRequest;
use App\Http\Resources\ReceptionistResource;
use App\Models\User;
use Illuminate\Http\Request;

class ReceptionistController extends Controller
{

    public function index()
    {
        $receptionists = User::receptionists()->get();
        return ReceptionistResource::collection($receptionists);
    }

    public function store(StoreReceptionistRequest $request)
    {
        $receptionist = User::create(array_merge(uploadImage($request, "images/users"), ["role" => 2]));
        return new ReceptionistResource($receptionist);
    }


    public function show(User $receptionist)
    {
        return new ReceptionistResource($receptionist);
    }


    public function update(UpdateReceptionistRequest $request, User $receptionist)
    {
        $receptionist->update(uploadImage($request, "images/users"));
        return new ReceptionistResource($receptionist);
    }


    public function destroy(User $receptionist)
    {
        $receptionist->delete();
        return response()->json(
            [
                "data" => [
                    "message" => "receptionist's account deleted successfully"
                ]
            ]
        );
    }
}
