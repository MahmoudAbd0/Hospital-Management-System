<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description'
    ];

    // public function patients()
    // {
    //     return $this->hasMany(Patient::class);
    // }

    // public function users()
    // {
    //     return $this->belongsToMany(User::class,'bookings' ,'room_id','user_id');
    // }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
