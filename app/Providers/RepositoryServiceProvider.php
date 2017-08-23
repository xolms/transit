<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Repositories\UslugaRepository::class, \App\Repositories\UslugaRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\UslugaRepository::class, \App\Repositories\UslugaRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PsotsRepository::class, \App\Repositories\PsotsRepositoryEloquent::class);
        //:end-bindings:
    }
}
