<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $table = 'works';
    protected $fillable = [
        'year', 'text', 'title', 'img', 'img_hover'
    ];
}
