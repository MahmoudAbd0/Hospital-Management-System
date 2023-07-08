<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $fillable = [
        'time', 'doctor_id', 'patient_id'
    ];

    public function patient()
    {
        return $this->belongsTo(User::class, 'patient_id');
    }

    public function report()
    {
        return $this->belongsTo(Report::class);
    }




    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
