<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    protected $fillable = ['title', 'content', 'category', 'tags'];

    protected $casts = [
        'tags' => 'array',
    ];
}
