<?php

namespace App\Http\Controllers\Admin;

use App\Team;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;


class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Team $team)
    {
        $this->team = $team;
    }

    public function index()
    {
        $team = $this->getCache('team', $this->team->all());
        return view('admin.team.index', ['team' => $team]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.team.add');
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
            'alt' => 'required',
            'img' => 'required|image',
        ]);
        $input = $request->all();
        if ($file = $request->file('img')) {
            $input['img'] = $this->uploadImage($file, 'img/team');
        }
        $status = $this->team->create($input);
        if ($status) {
            $db = $this->team->all();
            $this->updateCache('team', $db);
            $redirect = $this->message('Успешно добавлено', 'team.index');
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
        $team = $this->team->findOrFail($id);
        return view('admin.team.edit', ['team' => $team]);
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
        $team = $this->team->findOrFail($id);
        if (isset($team)) {
            $this->validate($request, [
                'alt' => 'required',
                'img' => 'image',
            ]);
            $input = $request->all();
            if ($file = $request->file('img')) {
                File::delete(public_path().$team->img);
                $input['img'] = $this->uploadImage($file, 'img/team');
            }
            $status = $team->fill($input)->save();
            if ($status) {
                $db = $this->team->all();
                $this->updateCache('team', $db);
                $redirect = $this->message('Успешно обновлено', 'team.index');
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
        $leader = $this->team->findOrFail($id);
        File::delete(public_path().$leader->img);
        $status = $leader->delete();
        if($status) {
            $db = $this->team->all();
            $this->updateCache('team', $db);
            $redirect = $this->message('Успешно удалено', 'team.index');
            return $redirect;
        }
    }
}
