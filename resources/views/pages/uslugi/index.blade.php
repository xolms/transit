@extends('layouts.page')
@section('meta')
    <title>{{$meta->title}}</title>
    <meta name="description" content="{{$meta->description}}">
    <meta name="keywords" content="{{$meta->keywords}}">
@endsection
@section('content')
    <div class="page-part page-header" part-type="Header"></div>
    <div class="PagePart page-part services-list-page-part" part-type="ServicePage">
        <div class="part-head smPad animate" style="padding-bottom: 40px;">
            <h1 class="h1">Услуги</h1>
            <p>Все услуги сервиса делятся на 4 основных подразделения,<br>кликните на интересующий вас раздел. Добро пожаловать в Китай!</p>
        </div>
        <div class="services-list-content">
            @foreach($usluga as $item)
            <hr>
            <div class="head">
                <img src="{{$item->img}}" alt="{{$item->name}}">
                <h2>{{$item->name}}</h2>
                {!! $item->short_text !!}
                <a href="{{route('page.uslugi.item' , $item->alias)}}">
                    <div class="request">Подробнее</div>
                </a>
            </div>
            @endforeach
        </div>
    </div>
@endsection