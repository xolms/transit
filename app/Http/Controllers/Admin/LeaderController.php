<?php

namespace App\Http\Controllers\Admin;

use App\Leader;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class LeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct(Leader $leader)
    {
        $this->leader = $leader;
    }

    public function index()
    {
        $leader = $this->getCache('leader', $this->leader->all());
        return view('admin.leader.index', ['leader' => $leader]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.leader.add');
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
            'position' => 'required',
            'img' => 'required|image',
        ]);
        $input = $this->leaderEdit($request);

        $status = $this->leader->create($input);
        if ($status) {
            $db = $this->leader->all();
            $this->updateCache('leader', $db);
            $redirect = $this->message('Успешно добавлено', 'leader.index');
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
        $leader = $this->leader->findOrFail($id);
        return view('admin.leader.edit', ['leader' => $leader]);
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
        $leader = $this->leader->findOrFail($id);
        if (isset($leader)) {
            $this->validate($request, [
                'name' => 'required',
                'position' => 'required',
                'img' => 'image',
            ]);
            $input = $this->leaderEdit($request, 'put', $leader);

            $status = $leader->fill($input)->save();
            if ($status) {
                $db = $this->leader->all();
                $this->updateCache('leader', $db);
                $redirect = $this->message('Успешно обновлено', 'leader.index');
                return $redirect;
            }
        }
        else {
            $redirect = $this->message('Нету записи', 'leader.index', 'error');
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
        $leader = $this->leader->findOrFail($id);
        File::delete(public_path().$leader->img);
        $status = $leader->delete();
        if($status) {
            $db = $this->leader->all();
            $this->updateCache('leader', $db);
            $redirect = $this->message('Успешно удалено', 'leader.index');
            return $redirect;
        }
    }

    public function leaderEdit($request, $mehtod = 'post', $item = 'null') {
        $input = $request->all();
        if ($mehtod == 'post') {
            if ($file = $request->file('img')) {
                $input['img'] = $this->uploadImage($file, 'img/leader');
            }
        }
        else {
            if($file = $request->file('img')) {
                $input['img'] = $this->uploadImage($file, 'img/leader', $item->img);
            }
        }

        return $input;

    }
}
