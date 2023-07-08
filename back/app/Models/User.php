<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'gender',
        'date_of_birth',
        'phone_number',
        'image',
        'shift_id',
        'role',
        'department_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'datetime',
    ];


    public static function boot()
    {
        parent::boot();
        self::creating(function ($user) {
            if (isset($user["password"])) {
                $user["password"] = Hash::make($user["password"]);
            }
        });

        self::updating(function ($user) {
            if (isset($user["password"])) {
                $user["password"] = Hash::make($user["password"]);
            } else {
                unset($user["password"]);
            }
        });
    }

    public function gender()
    {
        return $this->gender == 0 ? "male" : "female";
    }

    function age()
    {
        return now()->diffInYears($this->date_of_birth);
    }

    public function imageUrl()
    {
        return asset("storage/" . $this->image);
    }

    public function scopeDoctors($q)
    {
        return $q->where("role", 1);
    }

    public function scopeReceptionists($q)
    {
        return $q->where("role", 2);
    }

    public function scopePatients($q)
    {
        return $q->where("role", 3);
    }




    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function shift()
    {
        return $this->belongsTo(Shift::class, 'shift_id');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
   
}
