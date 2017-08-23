<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advantage extends Model
{
    protected $table = 'advantages';
    protected $fillable = [
        'title', 'text', 'img'
    ];
}
