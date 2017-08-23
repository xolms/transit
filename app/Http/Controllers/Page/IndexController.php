<?php

namespace App\Http\Controllers\Page;

use App\Doc;
use App\Leader;
use App\Page;
use App\Title;
use App\Usluga;
use App\Advantage;
use App\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    function __construct(Work $work, Usluga $usluga, Advantage $advantage, Page $page, Leader $leader, Doc $doc)
    {
        $this->work = $work;
        $this->usluga = $usluga;
        $this->page = $page;
        $this->advantage = $advantage;
        $this->leader = $leader;
        $this->doc = $doc;

    }

    public function index() {
        if (!\Cache::has('title:index')) {
            $title = Title::where('alias', 'index')->get();
            $arrtitle = array();
            foreach ($title as $item) {
                $arrtitle[$item->name] = $item->value;
            }
            \Cache::put('title:index', $arrtitle, 60);
        }
        else {
            $arrtitle = \Cache::get('title:index');
        }

        $leader = $this->getCache('leader', $this->leader->all());
        $doc = $this->doc->where('type', 'licence')->limit(2)->get();
        $advantage = $this->getCache('advantage', $this->advantage->all());
        $meta = $this->getCache('meta:index', $this->page->where('alias', 'index')->first());
        $usluga = $this->getCache('usluga', $this->usluga->all());
        $works = $this->getCache('work_index', $this->work->limit(12)->get());
        return view('pages.index',[
            'usluga' => $usluga,
            'works' => $works,
            'meta' => $meta,
            'advantage' => $advantage,
            'leader' => $leader,
            'doc' => $doc,
            'title' => $arrtitle
        ]);
    }
}
