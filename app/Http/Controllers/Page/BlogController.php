<?php

namespace App\Http\Controllers\Page;

use App\Blog;
use App\Page;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BlogController extends Controller
{
    function __construct(Blog $blog, Page $page)
    {
        $this->blog = $blog;
        $this->page = $page;
    }
    public function index() {
        $meta = $this->getCache('meta:blog', $this->page->where('alias', 'blog')->first());
        $blog = $this->getCache('blog' ,$this->blog->paginate(20));
    }
    public function item($alias) {
        $blog = $this->getCache('blog:'.$alias, $this->blog->where('alias', $alias)->first());
        if ($blog == false) {
            return redirect(route('page.blog'));
        }
    }
}
