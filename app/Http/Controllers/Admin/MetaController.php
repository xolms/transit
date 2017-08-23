<?php

namespace App\Http\Controllers\Admin;

use App\Page;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MetaController extends Controller
{
    function __construct(Page $page)
    {
        $this->page = $page;
    }
    public function get($alias) {
        $meta = $this->page->where('alias',$alias)->first();
        return view('admin.meta.edit', ['meta' => $meta]);

    }
    public function post($alias, Request $request) {
        $meta = $this->page->where('alias',$alias)->first();
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'keywords' => 'required',
        ]);
        $input = $request->all();
        $status = $meta->fill($input)->save();
        if ($status) {
            $redirect = $this->message('Успешно обновлено');
            return $redirect;
        }
    }
}
