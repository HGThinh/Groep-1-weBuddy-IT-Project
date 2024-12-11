<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $table = 'languages';
    protected $primaryKey = 'language_id';

    // which attributes should be mass assignable
    protected $fillable = [
        'language'];


    //relations
    public function mentor(){
        return $this->belongsToMany(Mentor::class);
    }

    public function mentor_application(){
        return $this->belongsToMany(MentorApplication::class);
    }
}
