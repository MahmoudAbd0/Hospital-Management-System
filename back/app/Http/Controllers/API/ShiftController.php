<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShiftRequest;
use App\Models\Shift;
use Illuminate\Http\Request;

class ShiftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shifts = Shift::all();
        return response()->json($shifts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ShiftRequest $request)
    {
        $shift = new Shift;
        $shift->name = $request->name;
        $shift->days = $request->days;
        $shift->start_time = $request->start_time;
        $shift->end_time = $request->end_time;
        $shift->save();

        return response()->json(['message' => 'created successfully', 'shift' => $shift]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Shift $shift)
    {
        if (!$shift) {
            return response()->json(['message' => 'Invaild Id']);
        } else {
            return response()->json(['message' => 'success', 'shift' => $shift]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ShiftRequest $request, Shift $shift)
    {
        $shift->name = $request->name;
        $shift->days = $request->days;
        $shift->start_time = $request->start_time;
        $shift->end_time = $request->end_time;
        $shift->save();

        return response()->json(['message' => 'Updated successfully', 'shift' => $shift]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shift $shift)
    {
        $shift->delete();
        return response()->json(['message' => 'deleted successfully']);
    }
}
