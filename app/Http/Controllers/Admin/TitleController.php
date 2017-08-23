<?php

namespace App\Http\Controllers\Admin;

use App\Title;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TitleController extends Controller
{
    public function page($alias) {
        $title = Title::where('alias', $alias)->get();
        return view('admin.title.index', ['title' => $title]);
    }
    public function get($id) {
        $usluga = Title::findOrFail($id);
        return view('admin.title.edit', ['title' => $usluga]);
    }
    public function post($id, Request $request) {
        $title = Title::findOrFail($id);
        if ($title->type == 'title' || $title->type == 'text') {
            $this->validate($request, [
                'value' => 'required'
            ]);
            $input = $request->all();
        }
        else {
            if($file = $request->file('value')) {
                \File::delete(public_path().$title->value);
                $input['value'] = $this->uploadImage($file, 'img/bg');
            }
        }
        $status = $title->fill($input)->save();
        if ($status) {
            \Session::flash('message', 'Успешно обновлено');
            return redirect()->route('title.alias',$title->alias);
        }

    }
}
