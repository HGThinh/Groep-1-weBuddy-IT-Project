<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = 'testquestions';

    protected $fillable = [
        'name',
        'profile_picture',
        'category',
        'title',
        'content',
        'is_answered',
        'tags',
        'upvotes',
        'comments'
    ];

    protected $casts = [
        'tags' => 'array',
        'is_answered' => 'boolean',
    ];
}
