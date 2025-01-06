<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = [
        'title',
        'description',
        'type',
        'tags',
        'file_path', // Add this field to fillable
    ];
}
