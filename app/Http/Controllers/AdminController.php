<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Roumen\Sitemap\Sitemap;

class AdminController extends Controller
{
    public function index() {
        return view('admin.index');
    }
    public function clearCache() {
        Cache::flush();
        Session::flash('message', 'Кеш успешно удален');
        return redirect('admincp');
    }
    public function sitemap(Sitemap $sitemap) {

        $sitemap->add('/', '2017-07-31 16:19' , '1.0', 'daily');
        $sitemap->store('xml', 'sitemap');
        Session::flash('message', 'Карта сайта успешно удалена');
        return redirect('admincp');

    }
}
