<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AppointmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'time' => [
                'required',
                'date',
                Rule::unique('appointments','time')
                    ->where('doctor_id', $this->doctor_id)
                    ->ignore($this->appointment_id),
            ],
            'doctor_id' => 'required|exists:users,id,role,1',
            'patient_id' => 'required|exists:users,id,role,3',
        ];
    }
}
