<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'Page\IndexController@index')->name('index');
Route::get('uslugi', 'Page\UslugaController@index')->name('page.uslugi');
Route::get('uslugi/{alias}', 'Page\UslugaController@item')->name('page.uslugi.item');
Route::get('works', 'Page\WorkController@index')->name('page.works');
Route::get('team', 'Page\TeamController@index')->name('page.team');
Route::get('blog', 'Page\BlogController@index')->name('page.blog');
Route::get('about', 'Page\AboutController@index')->name('page.about');
Route::get('cell/{alias?}', 'Page\CellController@item')->name('page.cell');
Route::get('contacts', 'Page\ContactController@index')->name('page.contact');
Route::get('blog/{alias}', 'Page\BlogController@item')->name('page.blog.item');
Route::get('pdf-personal', 'PdfController@pers')->name('pdf.pers');
Route::get('pdf-confidentiality', 'PdfController@conf')->name('pdf.conf');

Route::post('post/buy', 'FormController@buy')->name('form.buy');
Route::post('post/usluga/{usluga}', 'Form\FormController@usluga')->name('form.usluga');
Route::post('post/contact', 'Form\FormController@contacts')->name('form.contact');


Route::group(['prefix' => 'admincp', 'middleware' => ['role:admin', 'auth']], function () {
   Route::get('/', 'AdminController@index')->name('admin.index');
   Route::get('sitemap', 'Admin\SitemapController@get')->name('sitemap');
   Route::resource('usluga', 'Admin\UslugaController');
   Route::resource('advantage', 'Admin\AdvantageController');
   Route::resource('leader', 'Admin\LeaderController');
   Route::resource('setting', 'Admin\SettingController');
   Route::resource('work', 'Admin\WorkController');
   Route::resource('doc', 'Admin\DocController');
   Route::get('docs/{alias}', 'Admin\DocController@type')->name('doc.type');
   Route::get('title/{alias}', 'Admin\TitleController@page')->name('title.alias');
   Route::get('titles/{id}', 'Admin\TitleController@get')->name('title.get');
   Route::patch('titles/{id}', 'Admin\TitleController@post')->name('title.update');
   Route::resource('team', 'Admin\TeamController');
   Route::get('meta/{alias}', 'Admin\MetaController@get')->name('meta.get');
   Route::patch('meta/{alias}', 'Admin\MetaController@post')->name('meta.post');
   Route::get('clearcache', 'AdminController@clearCache')->name('clearcache');
});

Route::group(['middleware' => 'guest'], function (){
    Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Auth\LoginController@login');
    Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
Route::group(['middleware' => 'auth'], function (){
    Route::post('logout',['as'=>'logout', 'uses' => 'Auth\LoginController@logout']);
});
