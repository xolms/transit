<?php

use Illuminate\Database\Seeder;

class PageSedeer extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            ['name' => 'Главная','title'=>'123', 'alias'=>'index','keywords'=>'123','description'=>'123'],
            ['name' => 'О нас','title'=>'123', 'alias'=>'about','keywords'=>'123','description'=>'123'],
            ['name' => 'Услуги','title'=>'123', 'alias'=>'uslugi','keywords'=>'123','description'=>'123'],
            ['name' => 'Блог','title'=>'123', 'alias'=>'blog','keywords'=>'123','description'=>'123'],
            ['name' => 'Команда','title'=>'123', 'alias'=>'team','keywords'=>'123','description'=>'123'],
            ['name' => 'Контакты','title'=>'123', 'alias'=>'contacts','keywords'=>'123','description'=>'123'],
        ];
        foreach ($pages as $page) {
            DB::table('pages')->insert(
                [
                    'name' => $page['name'],
                    'title' => $page['title'],
                    'alias' => $page['alias'],
                    'keywords' => $page['keywords'],
                    'description' => $page['description']
                ]
            );
        }
    }
}
