<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rules\Password as RulesPassword;

class UpdateReceptionistRequest extends FormRequest
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
            'name' => ['required'],
            "email" => ["required", "email", "unique:users,email," . $this->receptionist->id],
            "password" => ["nullable", RulesPassword::min(8)],
            "phone_number" => ["required"],
            "shift_id" => ['required', "exists:shifts,id"],
            "image" => ["nullable", "mimes:jpg,jpeg,png"]
        ];
    }
}
