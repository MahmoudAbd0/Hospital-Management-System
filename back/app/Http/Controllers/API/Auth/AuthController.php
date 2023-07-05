<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
  public function register(LoginRequest $request){

    $user=new User();
    $user->name=$request->name;
    $user->email=$request->email;
    $user->role=$request->role;
    $user->date_of_birth=$request->date_of_birth;
    $user->phone_number=$request->phone_number;
    $user->password=Hash::make( $request->password);
    $user->save();

    return ['user' =>$user,
            'token'=> $user->createToken('web')->plainTextToken
];
  }

  public function login(Request $request){
    if(Auth::attempt($request->only('email','password')));
    // dd(Auth::user());

    return [
        'user' =>Auth::user(),
        'token'=> Auth::user()->createToken('web')->plainTextToken
];

}

}
