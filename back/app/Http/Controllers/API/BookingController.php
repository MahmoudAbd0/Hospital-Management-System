<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use App\Models\User;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
     // Get the authenticated user
     $user = $request->user();

     if($user->role == '3') {
        // Retrieve the bookings for the user
        $bookings = Booking::where('user_id', $user->id)->get();

        return response()->json(['bookings' => $bookings]);
        
    
        // // Check if a room filter is present
        // if ($request->has('room_id')) {
        //     $bookings->where('room_id', $request->room_id);
        // }

     }

 
     // Get the bookings
     $bookings = $bookings->get();



        // $results = Booking::with('Room')
        // ->get();

        // return response()->json($results);

       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Get the authenticated user
    // $user = $request->user();
    
    // Check if the user has the "patient" role
    if (!$user->hasRole('patient')) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    
    // Get the input data from the request
    $roomId = $request->input('room_id');
    
    
    // Get the selected room
    $room = Room::find($roomId);
    
    if (!$room) {
        return response()->json(['error' => 'Room not found'], 404);
    }
    
    // Create a new booking
    $booking = new Booking();
    $booking->user_id = $user->id;
    $booking->room_id = $room->id;
    $booking->date = Carbon::now();
    $booking->save();
    
    // Return a success response
    // return response()->json(['success' => true]);
    return response()->json($booking);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show($user_id, $room_id)
{
    $booking = Booking::where('user_id', $user_id)
                      ->where('room_id', $room_id)
                      ->first();
    
    if ($booking) {
        return response()->json(['booking' => $booking]);
    } else {
        return response()->json(['message' => 'Booking not found.'], 404);
    }
}

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $user_id, $room_id)
    {
        $booking = Booking::where('user_id', $user_id)
        ->where('room_id', $room_id)
        ->first();

            if ($booking) {
            $booking->update($request->all());

            return response()->json(['message' => 'Booking updated successfully.']);
            } else {
            return response()->json(['message' => 'Booking not found.'], 404);
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy($user_id, $room_id)
    {
        $booking = Booking::where('user_id', $user_id)
                      ->where('room_id', $room_id)
                      ->first();
    
    if ($booking) {
        $booking->delete();
        return response()->json(['message' => 'Booking deleted successfully.']);
    } else {
        return response()->json(['message' => 'Booking not found.'], 404);
    }
    }
}
