<?php

namespace App\Http\Controllers\Form;

use App\Usluga;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FormController extends Controller
{
    public function usluga($alias , Request $request) {
        if (empty($request->phone) && empty($request->email) ) {
            return response()->json(['message' => 'empty data'], '422');
        }
        $validator = $this->validate($request, [
            'name' => 'required',
            'mail' => 'email'
        ]);
        $carbon = Carbon::now();
        $usluga = Usluga::where('alias', $alias)->first();
        \Mail::send('mail.usluga', ['data' => $request, 'usluga' => $usluga, 'time' => $carbon], function($message) use ($usluga){
            $message->from('onekartel@mail.ru', 'Новая заявка с формы обратной связи');
            $message->to('123@binka.me');
            $message->subject('Новая заявка на услугу '.$usluga->name);

        });
        return response()->json(['status' => 'good'] , '200');
    }
    public function ask() {

    }
    public function contacts(Request $request) {
        dd($request);
    }
    public function consul() {

    }
    public function meet() {

    }
}
