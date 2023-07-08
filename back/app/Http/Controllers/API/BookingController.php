<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\BookingRequest;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $bookings = Booking::query();

        // Check if a user filter is present
        if ($request->has('user_id')) {
            $bookings->where('user_id', $request->user_id);
        }

        // Check if a room filter is present
        if ($request->has('room_id')) {
            $bookings->where('room_id', $request->room_id);
        }

        $bookings = $bookings->get();

        return response()->json(['bookings' => $bookings]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BookingRequest $request)
    {
        $user = User::findorFail($request->user_id);

        if($user->role !== 3) {
            return response()->json(['error' => 'User is not a patient']);
        }

        $booking = Booking::create($request->validated());

        return response()->json(['booking' => $booking]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
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
    public function update(BookingRequest $request, Booking $booking)
    {
        $user = User::findorFail($request->user_id);

        if($user->role !== 3) {
            return response()->json(['error' => 'User is not a patient']);
        }

        $booking->update($request->validated());

        return response()->json(['booking' => $booking]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        if ($booking) {
            $booking->delete();
            return response()->json(['message' => 'Booking deleted']);
        } else {
            return response()->json(['message' => 'Booking not found.'], 404);
        }
    }
}
