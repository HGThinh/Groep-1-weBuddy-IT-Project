<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $table = 'keywords';
    protected $primaryKey = 'keyword_id';

    // which attributes should be mass assignable
    protected $fillable = [
        'keyword'];


    //relations

    public function mentor(){
        return $this->belongsToMany(Mentor::class);
    }

    public function post(){
        return $this->belongsToMany(Post::class);
    }

}


