<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    protected $table= 'medical_reports';
    protected $fillable = [
        'diagnosis',
            'description',
            'files' ,
            'appointment_id'
    ];

    public function appointment()
    {
        return $this->hasMany(Appointment::class);
    }
}
