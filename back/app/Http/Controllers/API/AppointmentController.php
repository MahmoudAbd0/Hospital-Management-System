<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $Appointments = Appointment::all();
        $appointments = DB::table('appointments')
            ->join('users as doctors', 'appointments.doctor_id', 'doctors.id')
            ->join('users as patients', 'appointments.patient_id', 'patients.id')
            ->select('appointments.id', 'appointments.time', 'doctors.name as doctor', 'patients.name as patient')
            ->get();
       return response()->json(['success'=>'true','Appointmens' => $appointments]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AppointmentRequest $request)
    {
        // $appointment = new Appointment();
        // $appointment->time=$request->time;
        // $appointment->doctor_id=$request->doctor_id;
        // $appointment->patient_id=$request->patient_id;
        // $appointment->save();
        $existingAppointment = DB::table('appointments')
        ->where('doctor_id', $request->doctor_id)
        ->where('time', $request->time)
        ->first();

    if ($existingAppointment) {
        return response()->json(['error' => 'Appointment already exists for this doctor at this time'], 422);
    }
        $data=$request->validated();
        Appointment::create($data);
        return response()->json(['success'=>'true','message'=>'Appointment created successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appointment=Appointment::where('id',$id)->get()->first();
        if (is_null($appointment)) {
            return response()->json(['success'=>'false','message'=>'Invalid_appointment']);
          }else{
            return response()->json(['success'=>'success','appointment'=>$appointment]);
          }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AppointmentRequest $request, $id)
    {
        $appointment=Appointment::where('id',$id)->get()->first();
        if (is_null($appointment)) {
            return response()->json(['success'=>'false','message'=>'Invalid_appointment']);
          }else{
            $existingAppointment = DB::table('appointments')
            ->where('doctor_id', $request->doctor_id)
            ->where('time', $request->time)
            ->first();

        if ($existingAppointment) {
            return response()->json(['error' => 'Appointment already exists for this doctor at this time'], 422);
        }
           $data = $request->validated();
           $appointment::where('id',$id)->update($data);
         return response()->json(['success'=>'true','message'=>'Updated successfully']);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $appointment=Appointment::where('id',$id)->get()->first();
        if (is_null($appointment)) {
            return response()->json(['success'=>'false','message'=>'Invalid_appointment']);
          }else{
        Appointment::find($id)->delete();
        return response()->json(['Success'=>'true','message' => 'deleted successfully']);
    }
}
}
