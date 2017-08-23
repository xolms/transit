<?php

namespace App\Http\Controllers\Admin;

use App\Usluga;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class UslugaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct(Usluga $usluga)
    {
        $this->usluga = $usluga;

    }

    public function index()
    {
        $usluga = $this->getCache('usluga', $this->usluga->all());
        return view('admin.usluga.index', ['usluga' => $usluga]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.usluga.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $alias = $this->tourl($this->translite($request->alias));
        $request->alias = $alias;
        $this->validate($request, [
            'alias' => 'required|unique:uslugas,alias|min:2|max:60',
            'title' => 'required|max:72',
            'name' => 'required',
            'description' => 'required|max:300',
            'text' => 'required',
            'text_index' => 'required',
            'img' => 'required|image',
            'img_index' => 'image'
        ]);
        $input = $this->uslugaEdit($request);

        $status = $this->usluga->create($input);
        if ($status) {
            $db = $this->usluga->all();
            $this->updateCache('usluga', $db);
            $this->updateCache('usluga:'.$status->alias, $status);
            $redirect = $this->message('Услуга успешно добавлена', 'usluga.index');
            return $redirect;
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
        $item = $this->usluga->findOrFail($id);
        $usluga = $this->getCache('usluga:'.$item->alias, $item);
        if ($usluga == false) {
            $redirect = $this->message('Такой записи нет', 'usluga.index', 'error');
            return $redirect;
        }

        return view('admin.usluga.edit', ['usluga' => $usluga]);

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
        $usluga = $this->usluga->findOrFail($id);

        if (isset($usluga)) {
            $alias = $this->tourl($this->translite($request->alias));
            $request->alias = $alias;
            if ($usluga->alias == $request->alias) {
                $this->validate($request, [
                    'alias' => 'required|min:2|max:60',
                    'title' => 'required|max:72',
                    'name' => 'required',
                    'text_index' => 'required',
                    'description' => 'required|max:300',
                    'text' => 'required',
                    'img' => 'image',
                    'img_index' => 'image'
                ]);
            }
            else {
                $this->validate($request, [
                    'alias' => 'required|unique:uslugas,alias|min:2|max:60',
                    'title' => 'required|max:72',
                    'text_index' => 'required',
                    'name' => 'required',
                    'description' => 'required|max:300',
                    'text' => 'required',
                    'img' => 'image',
                    'img_index' => 'image'
                ]);
            }
            $input = $this->uslugaEdit($request, 'put', $usluga);
            $status = $usluga->fill($input)->save();
            if ($status) {
                $db = $this->usluga->all();
                $this->updateCache('usluga', $db);
                $this->updateCache('usluga:'.$usluga->alias, $status);
                $redirect = $this->message('Успешно обновленно', 'usluga.index');
                return $redirect;
            }
        }
        else {
            $redirect = $this->message('Такой записи нет', 'usluga.index', 'error');
            return $redirect;
        }


        $this->validate($request, [
            'alias' => 'required|unique:uslugas,alias|min:2|max:60',
            'title' => 'required|max:72',
            'name' => 'required',
            'description' => 'required|max:300',
            'text' => 'required',
            'img' => 'required|image',
            'img_index' => 'image'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usluga = $this->usluga->findOrFail($id);
        File::delete(public_path().$usluga->img);
        File::delete(public_path().$usluga->img_index);
        $this->deleteCache('usluga:'.$usluga->alias);
        $status = $usluga->delete();
        if($status) {
            $db = $this->usluga->all();
            $this->updateCache('usluga', $db);
           $redirect = $this->message('Успешно удалено', 'usluga.index');
           return $redirect;
        }
    }

    public function uslugaEdit($request, $mehtod = 'post', $item = 'null') {
        $input = $request->all();
        $input['alias'] = $this->tourl($this->translite($request->alias));
        if ($mehtod == 'post') {
            if($file = $request->file('img')) {
                $input['img'] = $this->uploadImage($file, 'img/usluga');
            }
            if($file = $request->file('img_index')) {
                $input['img_index'] = $this->uploadImage($file, 'img/usluga');
            }
            else {
                $input['img_index'] = $input['img'];
            }
        }

        else {
            if($file = $request->file('img')) {
                $input['img'] = $this->uploadImage($file, 'img/usluga', $item->img);
            }
            if($file = $request->file('img_index')) {
                $input['img_index'] = $this->uploadImage($file, 'img/usluga', $item->img);
            }
        }

        return $input;

    }
}
