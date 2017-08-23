<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        \View::composer(
            ['modules.footer', 'modules.main-mnu'],
            'App\Http\Composers\SettingComposer'
        );
        \View::composer(
            'layouts.admin',
            'App\Http\Composers\PageComposer'
        );
        \View::composer(
            'elements.uslugi-menu',
            'App\Http\Composers\UslugaComposer'
        );
    }


    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
