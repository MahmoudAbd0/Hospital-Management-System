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
        $reports = Report::get();
        return response()->json(['reports' => $reports]);
    }

    public function store(ReportRequest $request)
    {
        $report = Report::create($request->validated());
        return response()->json(['report' => $report]);
    }

    public function show(Report $report)
    {
        if ($report) {
            return response()->json(['report' => $report]);
        } else {
            return response()->json(['message' => 'Report not found.'], 404);
        }
    }

    public function update(ReportRequest $request, Report $report)
    {
        $report->update($request->validated());
        return response()->json(['report' => $report]);
    }
    
    public function destroy(Report $report)
    {
        if ($report) {
            $report->delete();
            return response()->json(['message' => 'report deleted']);
        } else {
            return response()->json(['message' => 'report not found.'], 404);
        }
    }
}
