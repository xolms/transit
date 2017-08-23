@extends('layouts.page')
@section('meta')
    <title>{{$item->title}}</title>
    <meta name="description" content="{{$item->content}}">
    <meta name="keywords" content="{{$item->keywords}}">
@endsection
@section('content')
    <div class="page-part page-header" part-type="Header"></div>
    <div class="page-part services-page-part" part-type="ServicePage">
        <div class="right-panel"></div>
        <div class="services-content">
            <div class="center-content">

                <div class="head">
                    <img src="{{$item->img}}" alt="{{$item->name}}" style="position: relative;float: right;">
                    <h1>{{$item->name}}</h1>
                </div>
                <div class="content__wrapper">
                    {!! $item->text !!}
                </div>




                <div class="request-form service-request-form">
                    <div class="cnt FORM" tid="express" mode="dostavka">
                        <div class="h1">Узнать стоимость {{$item->name}}</div>
                        <form action="{{route('form.usluga', $item->alias)}}" method="post">
                            <div class="fld"><input class="name" type="text" name="name" placeholder="Имя"></div>
                            <div class="fld"><input class="phone" type="tel" name="phone" placeholder="Телефон"></div>
                            <div class="fld"><input class="email" type="mail" name="mail" placeholder="Email"></div>
                            <div class="fld"><textarea class="cargo" placeholder="Укажите дополнительные данные." name="message"></textarea></div>
                            <div class="form-agreement center">
                                * Отправляя форму, вы даете свое согласие на
                                <noindex><a href="/agreement" target="_blank" rel="nofollow">обработку персональных данных</a></noindex>
                            </div>
                            <div class="fld">
                                {{ csrf_field() }}
                                <button class="submit click">Отправить заявку</button>
                            </div>
                        </form>
                    </div>
                    <div class="cnt OK">
                        <div class="h1">Ваша заявка принята</div>
                        <p>Ваша заявка принята, менеджер свяжется с&nbsp;вами<br>очень оперативно и&nbsp;вежливо</p>
                        <div class="fld">
                            <div class="submit">Закрыть</div>
                        </div>
                    </div>
                </div>
                <div class="sep2"></div>
            </div>
        </div>
    </div>
    <style>
        .center-content * {
            padding-bottom: 20px;
        }
        .center-content p , .center-content b, .center-content strong {
            font-size: 16px;
        }
        .center-content li {
            font-size: 22px;
        }
    </style>
    @include('elements.uslugi-menu')
@endsection