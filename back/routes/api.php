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
<<<<<<< HEAD
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\API\BookingController;
<<<<<<< HEAD
=======
use App\Http\Controllers\API\ReceptionistController;
use App\Http\Controllers\API\DoctorController;
use App\Http\Middleware\UploadUserImage;
>>>>>>> 233e7fc42da76420f312b1a3f9a1dfd7d24dfdde
=======
use App\Http\Controllers\API\ReportController;
>>>>>>> 34842cc3111efa50ad32f7128f70f88ddd622463

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

Route::get('doctors/{id}/appointments',[DoctorController::class,'appointments']);

Route::apiResource('shifts', ShiftController::class);
Route::apiResource('appointments', AppointmentController::class);

Route::apiResource('rooms', 'App\Http\Controllers\API\RoomController');
Route::apiResource('departments', App\Http\Controllers\API\DepartmentController::class);
<<<<<<< HEAD



Route::apiResource('bookings', App\Http\Controllers\API\BookingController::class);

Route::apiResource('reports', App\Http\Controllers\API\ReportController::class);
Route::post('reports/{id}',[ReportController::class,'store']);

Route::post('login',[AuthController::class,'login']);
=======
Route::post('login', [AuthController::class, 'login']);

>>>>>>> 233e7fc42da76420f312b1a3f9a1dfd7d24dfdde
// Route::post('register',[AuthController::class,'register']);
