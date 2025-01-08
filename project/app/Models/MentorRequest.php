<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MentorRequest extends Model
{

    protected $fillable = [
        'user_id',
        'role',
        'courses',
        'rate',
        'languages',
        'location',
        'motivation_letter',
        'grades_or_resume',
        'bio',
        'keyword1',
        'keyword2',
        'keyword3',
    ];

    protected $casts = [
        'courses' => 'array',
        'languages' => 'array',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
