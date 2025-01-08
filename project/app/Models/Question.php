<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

    protected $fillable = ['title', 'content', 'category', 'tags'];

    protected $casts = [
        'tags' => 'array',
    ];

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function isLikedByUser($user = null)
    {
        if (!$user) {
            $user = \Illuminate\Support\Facades\Auth::user();
        }
        if (!$user) {
            return false;
        }
        return $this->likes()->where('user_id', $user->id)->exists();
    }
}
