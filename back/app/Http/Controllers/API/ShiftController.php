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

        $shiftAttributes = [
            'name' => $request->validated()['name'],
            'days' => $request->validated()['days'],
            'start_time' => $request->validated()['start_time'],
            'end_time' => $request->validated()['start_time'],
        ];

      if(Shift::create($shiftAttributes)){
        return response()->json(['success'=>'true','message'=>'created successfully']);
      }else{
        return response()->json(['success'=>'false','message'=>'something went wrong']);

      }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Shift $shift)
    {
       $shift= Shift::find($shift);
       if(!$shift){
        return response()->json(['success'=>'false','message'=>'Invaild Id']);
       }else{
        return response()->json(['success'=>'true','message'=>'success','shift'=>$shift]);

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
            if (!Shift::where('id', $id)->exists()) {
              return response()->json(['success'=>'false','message'=>'Invalid_shift']);
            }
            $shift = Shift::findOrFail($id);
           $data = $request->validated();

        $shift->update([
            'name' => $data['name'],
            'days' => $data['days'],
            'start_time' => $data['start_time'],
            'end_time' => $data['end_time'],
        ]);
         return response()->json(['success'=>'true','message'=>'Updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $shift=Shift::find($id);
        if(is_null($shift)){
            return response()->json(['success'=>'false','message'=>'Invaild Id']);
        }
        $shift->delete();
        return response()->json(['message'=>'deleted successfully']);

    }
}
