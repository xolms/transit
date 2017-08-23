<?php

use Illuminate\Database\Seeder;
use App\Http\Controllers\Controller;

class TitleSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    function __construct(Controller $controller)
    {
        $this->con = $controller;
    }

    public function run()
    {
        $titles = [
            ['name_ru' => 'Залоговок в шапке верхний', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Залоговок в шапке нижний', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Фон в шапке', 'value' => '123', 'type' => 'bg', 'alias' => 'index'],
            ['name_ru' => 'Заголовок услуг', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Текст услуг', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Заголовок преимуществ', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Текст преимуществ', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Компания заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Компания текст', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Компания фон', 'value' => '123', 'type' => 'bg', 'alias' => 'index'],
            ['name_ru' => 'Команда заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Команда текст', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Ценные бумаги заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Ценные бумаги текст', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Клиенты заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Клиенты текст', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Контакты заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'index'],
            ['name_ru' => 'Контакты текст', 'value' => '123', 'type' => 'text', 'alias' => 'index'],
            ['name_ru' => 'Контакты фон', 'value' => '123', 'type' => 'bg', 'alias' => 'index'],
            ['name_ru' => 'Заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'uslugi'],
            ['name_ru' => 'Текст', 'value' => '123', 'type' => 'text', 'alias' => 'uslugi'],
            ['name_ru' => 'Заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'about'],
            ['name_ru' => 'Текст', 'value' => '123', 'type' => 'text', 'alias' => 'about'],
            ['name_ru' => 'Фон', 'value' => '123', 'type' => 'bg', 'alias' => 'about'],
            ['name_ru' => 'Заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'team'],
            ['name_ru' => 'Текст', 'value' => '123', 'type' => 'text', 'alias' => 'team'],
            ['name_ru' => 'Фон', 'value' => '123', 'type' => 'bg', 'alias' => 'team'],
            ['name_ru' => 'Заголовок', 'value' => '123', 'type' => 'title', 'alias' => 'work'],
            ['name_ru' => 'Текст', 'value' => '123', 'type' => 'text', 'alias' => 'work'],
            ['name_ru' => 'Фон', 'value' => '123', 'type' => 'bg', 'alias' => 'work'],
            ['name_ru' => 'Фон', 'value' => '123', 'type' => 'bg', 'alias' => 'contact']
        ];
        foreach ($titles as $page) {
            DB::table('titles')->insert(
                [
                    'name_ru' => $page['name_ru'],
                    'value' => $page['value'],
                    'alias' => $page['alias'],
                    'type' => $page['type'],
                    'name' => $this->con->translite($this->con->tourl($page['name_ru']))
                ]
            );
        }
    }
}
