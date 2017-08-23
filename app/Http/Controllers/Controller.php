<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Session;
use Illuminate\View\View;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function translite($string) {
        $converter = array(
            'а' => 'a',   'б' => 'b',   'в' => 'v',
            'г' => 'g',   'д' => 'd',   'е' => 'e',
            'ё' => 'e',   'ж' => 'zh',  'з' => 'z',
            'и' => 'i',   'й' => 'y',   'к' => 'k',
            'л' => 'l',   'м' => 'm',   'н' => 'n',
            'о' => 'o',   'п' => 'p',   'р' => 'r',
            'с' => 's',   'т' => 't',   'у' => 'u',
            'ф' => 'f',   'х' => 'h',   'ц' => 'c',
            'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',
            'ь' => '\'',  'ы' => 'y',   'ъ' => '\'',
            'э' => 'e',   'ю' => 'yu',  'я' => 'ya',

            'А' => 'A',   'Б' => 'B',   'В' => 'V',
            'Г' => 'G',   'Д' => 'D',   'Е' => 'E',
            'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',
            'И' => 'I',   'Й' => 'Y',   'К' => 'K',
            'Л' => 'L',   'М' => 'M',   'Н' => 'N',
            'О' => 'O',   'П' => 'P',   'Р' => 'R',
            'С' => 'S',   'Т' => 'T',   'У' => 'U',
            'Ф' => 'F',   'Х' => 'H',   'Ц' => 'C',
            'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',
            'Ь' => '\'',  'Ы' => 'Y',   'Ъ' => '\'',
            'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ya',
        );
        return strtr($string, $converter);
    }
    public function tourl($str) {
        // переводим в транслит
        $str = $this->translite($str);
        // в нижний регистр
        $str = strtolower($str);
        // заменям все ненужное нам на "-"
        $str = preg_replace('~[^-a-z0-9_]+~u', '-', $str);
        // удаляем начальные и конечные '-'
        $str = trim($str, "-");
        return $str;
    }
    public function getCache($name, $db) {

        if (env('CACHE')) {

            if (!Cache::has($name)) {

                $remember = $db;

                if (isset($remember)) {
                    Cache::put($name, $remember, 60);
                    $cache = $remember;
                }
                else {
                    return false;
                }

            }
            else {
                $cache = Cache::get($name);
            }

            return $cache;
        }
        else {
            return $db;
        }

    }
    public function updateCache($name, $db) {
        if (env('CACHE')) {
            if (Cache::has($name)) {
                $this->deleteCache($name);
                $cache = $this->getCache($name, $db);
                return $cache;
            } else {
                $this->getCache($name, $db);
            }
        }
        else {
            return $db;
        }
    }
    public function deleteCache($name) {
        if (env('CACHE')) {
            if (Cache::has($name)) {
                return Cache::forget($name);
            } else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    public function uploadImage($file, $path, $item = 'null') {
        $namefile = time() . $file->getClientOriginalName();
        if ($item != 'null') {
            File::delete(public_path().$item);
        }
        $file->move($path, $namefile);
        return '/'.$path.'/'.$namefile;
    }

    public function message($message, $route = 'null', $type = 'message') {
        Session::flash($type , $message);
        if ($route == 'null') {
            return redirect()->back();
        }
        else {
            return redirect(route($route));
        }

    }
}
