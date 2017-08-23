<?php

namespace App\Http\Controllers\Page;

use App\Doc;
use App\Page;
use App\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WorkController extends Controller
{
    function __construct(Work $work, Page $page)
    {
        $this->work = $work;
        $this->page = $page;
    }
    public function index() {
        $year = Work::select('year')
            ->distinct()
            ->orderBy('year', 'desc')
            ->get();
        $works = $this->getCache('work_year', $this->work->all());
        $doc = $this->getCache('doc:rev', Doc::where('type', 'rev')->get());
        $meta = $this->getCache('meta:work', $this->page->where('alias', 'work')->first());
        return view('pages.works', ['work' => $works, 'year' => $year, 'meta' => $meta, 'doc' => $doc]);
    }

}
