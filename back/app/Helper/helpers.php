<?php

use Illuminate\Http\UploadedFile;

function uploadImage($request, $path = "images", $fileName = "image")
{

    $data = $request->validated();
    $data[$fileName] = $request->file($fileName)->store($path, ['disk' => 'public']);
    return $data;
}
