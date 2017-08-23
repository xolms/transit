<?php

namespace App\Http\Controllers\Admin;

use App\Advantage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class AdvantageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct(Advantage $advantage)
    {
        $this->advangate = $advantage;
    }

    public function index()
    {
        $advantage = $this->getCache('advantage', $this->advangate->all());
        return view('admin.advantage.index', ['advantage' => $advantage]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.advantage.add');
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

            'title' => 'required|max:72',
            'text' => 'required',
            'img' => 'required|image'
        ]);
        $input = $this->editAdvantage($request);
        $status = $this->advangate->create($input);
        if ($status) {
            $db = $this->advangate->all();
            $this->updateCache('advantage', $db);
            $this->updateCache('advantage:'.$status->id, $status);
            $redirect = $this->message('Успешно добавлено', 'advantage.index');
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
        $advantage = $this->advangate->findOrFail($id);
        return view('admin.advantage.edit', ['advantage' => $advantage]);
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
        $advangate = $this->advangate->findOrFail($id);
        $this->validate($request, [
            'title' => 'required|max:72',
            'text' => 'required',
            'img' => 'image'
        ]);
        $input = $this->editAdvantage($request, 'put', $advangate);
        $status = $advangate->fill($input)->save();
        if ($status) {
            $db = $this->advangate->all();
            $this->updateCache('advantage', $db);
            $this->updateCache('advantage:'.$advangate->id, $status);
            $redirect = $this->message('Успешно обновленно', 'advantage.index');
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
        $advangate = $this->advangate->findOrFail($id);
        File::delete(public_path().$advangate->img);
        $this->deleteCache('advangate:'.$advangate->id);
        $status = $advangate->delete();
        if($status) {
            $db = $this->advangate->all();
            $this->updateCache('advantage', $db);
            $redirect = $this->message('Успешно удалено', 'advantage.index');
            return $redirect;
        }
    }

    public function editAdvantage($request, $mehtod = 'post', $item = 'null') {
        $input = $request->all();
        if ($mehtod == 'post') {
            if($file = $request->file('img')) {
                $input['img'] = $this->uploadImage($file, 'img/advantage');
            }


        }

        else {
            if($file = $request->file('img')) {
                $input['img'] = $this->uploadImage($file, 'img/advantage', $item->img);
            }

        }

        return $input;
    }
}
