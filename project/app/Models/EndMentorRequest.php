<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EndMentorRequest extends Model
{
    protected $table = 'end_mentor_requests';
    protected $primaryKey = 'end_mentor_request_id';

    // which attributes should be mass assignable
    protected $fillable = [
        'review', 'reason', 'student_id', 'mentor_id'];

    //relations
    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function mentor(){
        return $this->belongsTo(Mentor::class);
    }
}
