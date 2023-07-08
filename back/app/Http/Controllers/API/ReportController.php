<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\Appointment;
use App\Http\Requests\ReportRequest;

class ReportController extends Controller
{


    public function index(Request $request)
    {
        // $reports = Report::query();

        // Check if a user filter is present
        // if ($request->has('user_id')) {
        //     $bookings->where('user_id', $request->user_id);
        // }

        // // Check if a room filter is present
        // if ($request->has('room_id')) {
        //     $bookings->where('room_id', $request->room_id);
        // }

        $reports = $reports->get();

        return response()->json(['reports' => $reports]);
    }


    // public function store(ReportRequest $request)
    // {

    //     $appointment = Appointment::findorFail($request->appointment_id);

    //     if($appointment) {
    //         $report = Report::create($request->validated());
    //     return response()->json(['report' => $report]);
           
    //     }

    //     return response()->json(['error' => 'cant create report']);
    // }




    // public function store( Request $request)
    // {
    //     $appointment = Appointment::findorFail($request->appointment_id);
    //     // dd($appointment->id);
       

    //     if($appointment->id) {
          
    
    //     $report = Report::insert([
    //         'diagnosis' => $request->input('diagnosis'),
            
    //         'description' => $request->input('description'),
    //         // 'files' => $request->input('files'),
            
    //         'appointment_id' => $appointment->id
    //     ]);

      
    
    //     return response()->json(['message' => 'Medical report created successfully']);
    // }

    // }


    public function store( Request $request, $id)
    {
        $appointment = Appointment::findorFail($id);

        if($appointment) {
    
        $report = Report::create([
            'diagnosis' => $request->input('diagnosis'),
            'description' => $request->input('description'),
            'appointment_id' => $id
        ]);
    
        return response()->json(['message' => 'Medical report created successfully']);
    }

    }



    public function show(Report $report)
    {
        if ($report) {
            return response()->json(['Report' => $report]);
        } else {
            return response()->json(['message' => 'Report not found.'], 404);
        }
    }
    

    public function update(ReportRequest $request, Report $report)
    {
        $appointment = Appointment::findorFail($request->appointment_id);

        if($appointment) {
            $report->update($request->validated());

        return response()->json(['report' => $report]);

           
        }

        return response()->json(['error' => 'Not found report']);
    }

    
    public function destroy(Report $report)
    {
        if ($report) {
            $report->delete();
            return response()->json(['message' => 'Booking deleted']);
        } else {
            return response()->json(['message' => 'Booking not found.'], 404);
        }
    }
}
