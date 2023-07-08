<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $fillable = [
        'time','doctor_id','patient_id'
    ];

    public function patient()
{
    return $this->belongsTo(User::class, 'patient_id');

}
<<<<<<< HEAD

public function report()
{
    return $this->belongsTo(Report::class);

}




=======
public function doctor()
{
    return $this->belongsTo(User::class, 'doctor_id');
}
>>>>>>> 233e7fc42da76420f312b1a3f9a1dfd7d24dfdde
}
