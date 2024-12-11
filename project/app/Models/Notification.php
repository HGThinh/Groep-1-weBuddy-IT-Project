<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table='notifications';
    protected $primaryKey='notification_id';

    protected $fillable=['content, student_id, post_id, comment_id'];

    //relations

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function comment(){
        return $this->belongsTo(Comment::class);
    }

    public function post(){
        return $this->belongsTo(Post::class);
    }



}
