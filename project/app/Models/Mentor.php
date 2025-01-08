<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{

    protected $fillable = [
        'name',
        'points',
        'role',
        'tags',
        'description',
        'languages',
        'location',
        'bio',
        'motivation_letter',
        'user_id'
    ];

    protected $casts = [
        'tags' => 'array',
        'languages' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
