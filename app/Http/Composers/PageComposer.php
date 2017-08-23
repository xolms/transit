<?php
/**
 * Created by PhpStorm.
 * User: Степан
 * Date: 23.08.2017
 * Time: 1:10
 */

namespace App\Http\Composers;


use App\Page;
use Illuminate\Contracts\View\View;


class PageComposer
{
    protected $page;
    public function __construct(Page $pages) {
        $this->page = $pages;
    }
    public function compose(View $view) {
        $arrset = array();
        $pages = $this->page->all();
        $view->with(['page' => $pages]);

    }
}