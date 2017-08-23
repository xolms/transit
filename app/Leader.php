<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leader extends Model
{
    protected $table = 'leaders';
    protected $fillable = [
      'name', 'img', 'vk_alias', 'inst_alias', 'fb_alias', 'position'
    ];
}
