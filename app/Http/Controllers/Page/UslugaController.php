<?php

namespace App\Http\Controllers\Page;

use App\Page;
use App\Usluga;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UslugaController extends Controller
{
    function __construct(Usluga $usluga, Page $page)
    {
        $this->usluga = $usluga;
        $this->page = $page;
    }

    public function index() {
        $meta = $this->getCache('meta:uslugi', $this->page->where('alias', 'uslugi')->first());
        $usluga =  $this->getCache('usluga', $this->usluga->all());
        return view('pages.uslugi.index', ['meta' => $meta, 'usluga' => $usluga]);

    }
    public function item($alias) {


        $usluga = $this->getCache('usluga:'.$alias, $this->usluga->where('alias', $alias)->first());
        if ($usluga == false) {
            return redirect(route('page.uslugi'));
        }

        return view('pages.uslugi.item', ['item' => $usluga]);
    }
}
