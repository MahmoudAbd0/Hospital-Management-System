<?php

use App\Http\Controllers\API\AppointmentController;
use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ShiftController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RoomController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\PatientController;
use App\Http\Controllers\API\ReceptionistController;
use App\Http\Controllers\API\DoctorController;
use App\Http\Middleware\UploadUserImage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('patients', PatientController::class);
Route::apiResource('doctors', DoctorController::class);
Route::apiResource('receptionists', ReceptionistController::class);



Route::apiResource('shifts', ShiftController::class);
Route::apiResource('appointments', AppointmentController::class);

Route::apiResource('rooms', 'App\Http\Controllers\API\RoomController');
Route::apiResource('departments', App\Http\Controllers\API\DepartmentController::class);
Route::post('login', [AuthController::class, 'login']);
// Route::post('register',[AuthController::class,'register']);
