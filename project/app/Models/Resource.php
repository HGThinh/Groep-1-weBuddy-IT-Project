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
        'file_path',
        'original_file_name', // Add this field
        'user_id',
    ];
    
}
