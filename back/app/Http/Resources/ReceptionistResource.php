<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReceptionistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'name' => $this->name,
            "email" => $this->email,
            "phone_number" =>  $this->phone_number,
            'shift' => new ShiftResource($this->shift),
            "image" => $this->imageUrl()
        ];
    }
}
