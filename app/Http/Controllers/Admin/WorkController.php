<?php

namespace App\Http\Controllers\Admin;

use App\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Work $work)
    {
        $this->work = $work;
    }

    public function index()
    {
        $work = $this->getCache('work', $this->work->all());
        return view('admin.work.index', ['work' => $work]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.work.add');
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
            'title' => 'required',
            'text' => 'required',
            'img' => 'required|image',
            'year' => 'required',
            'img_hover' => 'image',
        ]);
        $input = $request->all();
        if ($file = $request->file('img')) {
            $input['img'] = $this->uploadImage($file, 'img/work');
        }
        if ($file = $request->file('img_hover')) {
            $input['img_hover'] = $this->uploadImage($file, 'img/work');
        }
        else {
            $input['img_hover'] = $input['img'];
        }
        $status = $this->work->create($input);
        if ($status) {
            $db = $this->work->all();
            $this->updateCache('work', $db);
            $redirect = $this->message('Успешно добавлено', 'work.index');
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
        $team = $this->work->findOrFail($id);
        return view('admin.work.edit', ['work' => $team]);
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
        $work = $this->work->findOrFail($id);
        if (isset($work)) {
            $this->validate($request, [
                'title' => 'required',
                'text' => 'required',
                'img' => 'image',
                'img_hover' => 'image',
            ]);
            $input = $request->all();
            if ($file = $request->file('img')) {
                File::delete(public_path().$work->img);
                $input['img'] = $this->uploadImage($file, 'img/work');
            }
            if ($file = $request->file('img_hover')) {
                File::delete(public_path().$work->img_hover);
                $input['img_hover'] = $this->uploadImage($file, 'img/work');
            }
            $status = $work->fill($input)->save();
            if ($status) {
                $db = $this->work->all();
                $this->updateCache('work', $db);
                $redirect = $this->message('Успешно обновлено', 'work.index');
                return $redirect;
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
        $leader = $this->work->findOrFail($id);
        File::delete(public_path().$leader->img);
        File::delete(public_path().$leader->img_hover);
        $status = $leader->delete();
        if($status) {
            $db = $this->work->all();
            $this->updateCache('work', $db);
            $redirect = $this->message('Успешно удалено', 'work.index');
            return $redirect;
        }
    }
}
