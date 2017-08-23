<?php
/**
 * Created by PhpStorm.
 * User: Степан
 * Date: 23.08.2017
 * Time: 2:12
 */

namespace App\Http\Composers;


use App\Usluga;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class UslugaComposer
{
    protected $page;
    public function __construct(Usluga $usluga, Request $request) {
        $this->usluga = $usluga;
        $this->request = $request->path();
    }
    public function compose(View $view) {
        $usluga = $this->usluga->all();
        $active = str_replace('uslugi/', '', $this->request);
        $view->with(['uslugas' => $usluga, 'active' => $active]);

    }
}