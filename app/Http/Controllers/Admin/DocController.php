<?php

namespace App\Http\Controllers\Admin;

use App\Doc;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;

class DocController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct(Doc $doc)
    {
        $this->doc = $doc;
    }

    public function type($alias)
    {
        $doc = $this->doc->where('type', $alias)->get();
        return view('admin.doc.index', ['doc' => $doc]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.doc.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'img' => 'required|image',
        ]);
        $input = $request->all();
        if ($file = $request->file('img')) {
            $input['img'] = $this->uploadImage($file, 'img/docs');
        }
        $status = $this->doc->create($input);
        if ($status) {
            $db = $this->doc->all();
            $this->updateCache('doc', $db);
            Session::flash('message' , 'Успешно добавлено');
            return redirect()->route('doc.type', $status->type);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $doc = $this->doc->findOrFail($id);
        return view('admin.doc.edit', ['doc' => $doc]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $doc = $this->doc->findOrFail($id);
        if (isset($doc)) {
            $this->validate($request, [
                'name' => 'required',
                'img' => 'image',
            ]);
            $input = $request->all();
            if ($file = $request->file('img')) {
                File::delete(public_path().$doc->img);
                $input['img'] = $this->uploadImage($file, 'img/docs');
            }
            $status = $doc->fill($input)->save();
            if ($status) {
                $db = $this->doc->all();
                $this->updateCache('doc', $db);
                Session::flash('message' , 'Успешно обновлено');
                return redirect()->route('doc.type', $doc->type);
            }
        }
        else {
            $redirect = $this->message('Нету записи', 'team.index', 'error');
            return $redirect;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $leader = $this->doc->findOrFail($id);
        File::delete(public_path().$leader->img);
        $status = $leader->delete();
        if($status) {
            $db = $this->doc->all();
            $this->updateCache('doc', $db);
            $redirect = $this->message('Успешно удалено');
            return $redirect;
        }
    }
}
