<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;


class Student extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use Notifiable;

     
    protected $table = 'students';
    protected $primaryKey = 'student_id';


    // which attributes should be mass assignable
    protected $fillable = [
        'points', 'profile_picture_url'];

    //relations
    public function post(){
        return $this->hasMany(Post::class);
    }

    public function comment(){
        return $this->hasMany(Comment::class);
    }

    public function mentor(){
        return $this->belongsToMany((Mentor::class));
    }

    public function role(){
        return $this->hasOne(Mentor::class);
    }

    public function mentorApplication(){
        return $this->hasOne(MentorApplication::class);
    }

    public function course(){
        return $this->belongsToMany(Course::class);
    }

    public function degree(){
        return $this->belongsTo(Degree::class);
    }

    public function mentorRequest(){
        return $this->hasMany(MentorRequest::class);
    }

    public function endmentorRequest(){
        return $this->hasMany(EndMentorRequest::class);
    }

    public function notification(){
        return $this->hasMany(Notification::class);
    }

    public function report(){
        return $this->hasMany(Report::class);
    }

    // //hash password
    // public function setPasswordAttribute($value)
    // {
    //     // Hash the password before storing it
    //     $this->attributes['password'] = Hash::make($value);
    // }
}
