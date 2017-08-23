@extends('layouts.page')
@section('meta')
    <title>{{$meta->title}}</title>
    <meta name="description" content="{{$meta->description}}">
    <meta name="keywords" content="{{$meta->keywords}}">
@endsection
@section('content')
    <div class="page-part" part-type="index">
        <div class="index">
            <div class="bg" style="background-image:url(/video/footer/footer.jpg);"></div>
            <video autoplay="autoplay" muted="muted" loop="loop" poster="/video/footer/footer.jpg" preload="metadata" style="position:absolute;top:0px;left:0px;width:100%;height:100%;"></video>
            <div class="shader"><img class="ximg" src="/img/shader-index.png" alt="Затемнение" /></div>
            <div class="cnt">
                <div class="logo"><a href="http://www.transitplus.ru/"><img class="ximg" src="/img/x.png"></a></div>
                <h1 class="big-font-rendering">Клиенты</h1>
                <p>За годы работы мы оказали помощь многим частным<br /> лицам и компаниям. Мы ценим ваше доверие!</p>
                <!-- <div id="start" class="ignite">Смотреть</div> -->
                <class class="btn bigger yellow js-scrollto-papers">Смотреть отзывы</class>
                <div class="mouse">
                    <div class="dot"></div>
                </div>
            </div>
            @include('modules.main-mnu')
        </div>
    </div>
    <div id="clients-menu">
        <div class="fix">
            <ul>
                <li class="item act" section="0">Все</li>
                @foreach($year as $item)
                    <li class="bull"></li>
                    <li class="item" section="{{$item->year}}">{{$item->year}}</li>
                @endforeach

            </ul>
        </div>
    </div>
    <div class="page-part" part-type="clients">
        <div class="clients clickable">
            @foreach($work as $k => $item)

                <div class="item {{$k == 0 || $k % 2 == 0 ? 'c1' : 'c2'}}" client-id="{{$item->id}}" section="{{$item->year}}">
                    <div class="box">
                        <div class="h1">{{$item->title}}</div>
                        <p>{{$item->text}}</p>
                    </div>
                    <img class="ximg std" src="{{$item->img}}" alt="{{$item->title}}" /><img class="ximg ovr" src="{{$item->img_hover}}" alt="{{$item->title}}" />
                </div>

            @endforeach
            <div class="presenter">
                <div class="line">
                    <div class="arrlCnt noselect">
                        <div class="arr arrl"></div>
                    </div>
                    <div class="logoCnt noselect">
                        <div class="box"><img src="/img/x.png" class="ximg" alt="Image" /></div>
                    </div>
                    <div class="textCnt">
                        <div class="box">
                            <div class="h1">Skoda auto</div>
                            <a href="http://skoda-avto.ru" target="_blank" rel="nofollow">skoda-avto.ru</a>
                            <p>Организация доставки сувенирной продукции к чемпионату мира по хоккею в поддержку российской сборной для «Skoda Auto Россия» в 2010 году.</p>
                        </div>
                    </div>
                    <div class="arrrCnt noselect">
                        <div class="arr arrr"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-part cliBtm" part-type="default">
        <div class="part-head">
            <div class="h1">Хотите сотрудничать?</div>
            <p> Мы с удовольствием работаем не только с опытными компаниями,<br /> но и с теми организациями, которые только начинают свой путь<br /> или бюджет которых строго ограничен. Вы, как минимум, получите<br /> грамотную консультацию абсолютно бесплатно. </p>
        </div>
        <div class="proceed" style="border-bottom:0px;"><a href="javascript:void(0);" class="proceed request-form-caller">Отправить заявку</a></div>
    </div>
    <div class="page-part" part-type="Papers">
        <div class="papers">
            <div class="section" section="1" style="display:block;">
                @foreach($doc as $k => $item)
                    <div class="item {{$k == 0 ? 'c2' : 'c1'}}" src="{{$item->img}}">
                        <img src="{{$item->img}}" class="ximg" alt="{{$item->name}}">
                        <div>{{$item->name}}</div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>
@endsection