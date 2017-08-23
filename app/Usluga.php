<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usluga extends Model
{
    protected $table = 'uslugas';
    protected $fillable = [
        'name', 'img_index', 'img', 'text', 'title', 'description', 'alias', 'keywords', 'text_index', 'text_index'
    ];

    public function getShortTextAttribute()
    {
        $text = $this->text;
        $text = preg_replace("/<h([1-6]{1})>.*?<\/h\\1>/si", '', $this->text);
        $text = preg_replace("/<img[^>]+\>/i", "", $text);
        return str_limit($text, 600);
    }
}
