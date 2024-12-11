<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MentorRequest extends Model
{
    protected $table="mentor_requests";
    protected $primaryKey="mentor_request_id";

    protected $fillable = [
     'request', 'student_id', 'mentor_id'
    ];

    //relations

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function course(){
        return $this->belongsToMany(Course::class);
    }

    public function mentor(){
        return $this->belongsTo(Mentor::class);
    }

}
