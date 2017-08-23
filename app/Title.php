<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    protected $table = 'titles';
    protected $fillable = ['name', 'alias', 'type', 'name_ru', 'value'];
}
