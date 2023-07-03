<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShiftRequest;
use App\Models\Shift;
use Illuminate\Database\Eloquent\ModelNotFoundException;

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
        $data=$request->validated();
         $shift=Shift::create($data);
        return response()->json(['message'=>'created successfully','shift'=>$shift]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shift=Shift::where('id',$id)->get()->first();
        if (is_null($shift)) {
            return response()->json(['success'=>'false','message'=>'Invalid_shift']);
          }else{
            return response()->json(['success'=>'success','shift'=>$shift]);
          }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ShiftRequest $request,$id)
    {
        $shift=Shift::where('id',$id)->get()->first();
        if (is_null($shift)) {
            return response()->json(['success'=>'false','message'=>'Invalid_shift']);
          }else{
           $data = $request->validated();
           $shift::where('id',$id)->update($data);
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
        $shift=Shift::where('id',$id)->get()->first();
        if (is_null($shift)) {
            return response()->json(['success'=>'false','message'=>'Invalid_shift']);
          }else{
        Shift::find($id)->delete();
        return response()->json(['message' => 'deleted successfully']);
    }
}
}
