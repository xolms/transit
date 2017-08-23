@extends('layouts.page')
@section('meta')
    <title>{{$meta->title}}</title>
    <meta name="description" content="{{$meta->description}}">
    <meta name="keywords" content="{{$meta->keywords}}">
@endsection
@section('content')
    <div class="page-part" part-type="index">
        <div class="index">
            <div class="bg" style="background-image:url({{$title['fon-v-shapke']}});"></div>
            <div class="shader"><img class="ximg" src="{{asset('img\shader-index.png')}}" alt="Затемнение"></div>
            <div class="cnt">
                <div class="logo"></div>
                <h1 class="big-font-rendering">{!! $title['zalogovok-v-shapke-verhniy'] !!}</h1>
                <p>{!! $title['zalogovok-v-shapke-nizhniy'] !!}</p>
                <div class="btn bigger yellow consult-form-caller">Заказать бесплатную консультацию</div>
                <div class="mouse">
                    <div class="dot"></div>
                </div>
            </div>
            @include('modules.main-mnu')
        </div>
    </div>
    <div class="services-page-part page-part" part-type="services">
        <div class="part-head smPad">
            <div class="h1"><a href="{{route('page.uslugi')}}">{!! $title['zagolovok-uslug'] !!}</a></div>
            <p>{!! $title['tekst-uslug'] !!}</p>
        </div>
        <div class="services">
            <?php
            $count = 1;
            $c = 'dark';
            ?>
            @foreach($usluga as $k => $item)
                @if($k == 0)
                    <div class="item c2">
                        <div class="cnt" style="top: 76px;">
                            <div class="ico ico6" style="background-image: url({{$item->img_index}});"></div>
                            <div class="h1">{{$item->name}}</div>
                            <div class="h2">{{$item->text_index}}</div>
                        </div>
                        <div class="link"><a href="{{route('page.uslugi.item', $item->alias)}}"><img class="ximg" src="img\x.png" alt="{{$item->name}}"></a></div>
                    </div>
                @elseif($c == 'dark')
                    <div class="item c1">
                        <div class="cnt" style="top: 76px;">
                            <div class="ico ico6" style="background-image: url({{$item->img_index}});"></div>
                            <div class="h1">{{$item->name}}</div>
                            <div class="h2">{{$item->text_index}}</div>
                        </div>
                        <div class="link"><a href="{{route('page.uslugi.item', $item->alias)}}"><img class="ximg" src="img\x.png" alt="{{$item->name}}"></a></div>
                    </div>
                    <?php $count++ ?>
                    @if($count == 3)
                        <?php
                            $c = 'white';
                            $count = 1;
                            ?>
                    @endif
                @elseif($c = 'white')
                    <div class="item c2 " >
                        <div class="cnt" style="top: 76px;">
                            <div class="ico ico6" style="background-image: url({{$item->img_index}});"></div>
                            <div class="h1">{{$item->name}}</div>
                            <div class="h2">{{$item->text_index}}</div>
                        </div>
                        <div class="link"><a href="{{route('page.uslugi.item', $item->alias)}}"><img class="ximg" src="img\x.png" alt="{{$item->name}}"></a></div>
                    </div>
                    <?php $count++ ?>
                    @if($count == 3)
                        <?php
                        $c = 'dark';
                        $count = 1;
                        ?>
                    @endif
                @endif

            @endforeach
        </div>
    </div>
    <div class="proceed"><a href="{{route('page.uslugi')}}" class="proceed yellow">Все услуги</a></div>
    <div class="page-part" part-type="company">
        <div class="part-head smPad">
            <div class="h1">{!! $title['zagolovok-preimuschestv'] !!}</div>
            <p>{!! $title['tekst-preimuschestv'] !!}</p>
        </div>
        <div class="Advantages">
            @foreach($advantage as $k => $item)
                @if($k == 0 || $k % 2 == 0)
                    <div class="advantage">
                        <div class="box scroll-action">
                            <div class="icon sa-cl1"><img src="{{$item->img}}" alt="{{$item->title}}"></div>
                            <div class="data">
                                <div class="ttl sa-cl2">{{$k+1}}. {{$item->title}}</div>
                                <div class="dsc sa-cl3">{!! $item->text !!}</div>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="advantage ">
                        <div class="box scroll-action">
                            <div class="data">
                                <div class="ttl sa-cl1-r">{{$k+1}}. {{$item->title}}</div>
                                <div class="dsc sa-cl2-r">{!! $item->text !!}</div>
                            </div>
                            <div class="icon sa-cl3-r"><img src="{{$item->img}}" alt="{{$item->title}}"></div>
                        </div>
                    </div>
                @endif
            @endforeach


        </div>
    </div>
    <div class="page-part company-numbers" part-type="CompanyNumbers">
        <div class="bg" style="background-image:url({{$title['kompaniya-fon']}});"></div>
        <div class="shader"><img class="ximg" src="img\shader-index.png"></div>
        <div class="CompanyNumbers">
            <div class="part-head white smPad" style="padding-bottom:0px;">
                <div class="h1">{!! $title['kompaniya-zagolovok'] !!}</div>
                <p>{!! $title['kompaniya-tekst'] !!}</p>
            </div>
            <div class="row scroll-action">
                <div class="number w5">
                    <div class="dsc">
                        <div class="l1 sa-o1"></div>
                        <div class="l2 sa-o2 dollar-xoff"></div>
                    </div>
                </div>
                <div class="number w3">
                    <div class="dsc">
                        <div class="l1 sa-o1">10<span> лет</span></div>
                        <div class="l2 sa-o2 years-xoff">успешной<br>работы</div>
                    </div>
                </div>
            </div>
            <div class="row scroll-action">
                <div class="number w2">
                    <div class="l1 sa-o1">1 907</div>
                    <div class="l2 sa-o2">постоянных<br>клиентов</div>
                </div>
                <div class="number w2">
                    <div class="l1 sa-o1">18 483</div>
                    <div class="l2 sa-o2">выполненных<br>заказов</div>
                </div>
                <div class="number w2">
                    <div class="l1 sa-o1">100+</div>
                    <div class="l2 sa-o2">городов России<br>и стран СНГ</div>
                </div>
                <div class="number w2">
                    <div class="l1 sa-o1">50+</div>
                    <div class="l2 sa-o2 last">сотрудников<br>компании</div>
                </div>
            </div>
        </div>
    </div>
    <div class="proceed"><a href="{{route('page.about')}}" class="proceed yellow">Подробнее о компании</a></div>
    <div class="page-part" part-type="members2">
        <div class="part-head no-double smPad">
            <div class="h1"><a href="{{route('page.team')}}">{!! $title['komanda-zagolovok'] !!}</a></div>
            <p>{!! $title['komanda-tekst'] !!}</p>
        </div>
        <div class="members2">
            <div class="plate"></div>
            @foreach($leader as $item)
                <div class="item">
                    <div class="video">
                        <img src="{{$item->img}}" alt="{{$item->name}}">
                    </div>
                    <div class="info">
                        <div class="name">{{$item->name}}</div>
                        <div class="pos">{{$item->position}}</div>
                        <ul class="team-social">
                            @if(isset($item->vk_alias))
                                <li>
                                    <noindex><a rel="nofollow" href="{{$item->vk_alias}}" class="fa fa-vk" target="_blank"></a></noindex>
                                </li>
                            @endif
                            @if(isset($item->fb_alias))
                                <li>
                                    <noindex><a rel="nofollow" href="{{$item->fb_alias}}" class="fa fa-facebook" target="_blank"></a></noindex>
                                </li>
                            @endif
                            @if(isset($item->inst_alias))
                                <li>
                                    <noindex><a rel="nofollow" href="{{$item->inst_alias}}" class="fa fa-instagram" target="_blank"></a></noindex>
                                </li>
                            @endif
                        </ul>
                    </div>
                </div>
            @endforeach
            <div class="arr arrl"></div>
            <div class="arr arrr"></div>
        </div>
        <div class="proceed"><a href="{{route('page.team')}}" class="proceed yellow">Подробнее о команде</a></div>
    </div>
    <div class="page-part" part-type="Papers">
        <div class="part-head">
            <div class="h1">{!! $title['cennye-bumagi-zagolovok'] !!}</div>
            <p>{!! $title['cennye-bumagi-tekst'] !!}</p>
        </div>
        <div class="papers">
            <div class="section dbl" section="1" style="display:block;">
                @foreach($doc as $k => $item)
                    <div class="item {{$k == 0 ? 'c2' : 'c1'}}" src="{{$item->img}}">
                        <img src="{{$item->img}}" class="ximg" alt="{{$item->name}}">
                        <div>{{$item->name}}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div class="page-part" part-type="clients">
        <div class="part-head smPad">
            <div class="h1"><a href="{{route('page.works')}}">{!! $title['klienty-zagolovok'] !!}</a></div>
            <p>{!! $title['klienty-tekst'] !!}</p>
        </div>
        <div class="clients clickable">
            @foreach($works as $k => $item)
                @if($k == 0 || $k % 2 == 0)
                    <div class="item c1" client-id="{{$item->id}}" section="{{$item->year}}">
                        <div class="box">
                            <div class="h1">{{$item->title}}</div>
                            <p>{{$item->text}}</p>
                        </div>
                        <img class="ximg std" src="{{$item->img}}" alt="{{$item->title}}"><img class="ximg ovr" src="{{$item->img_hover}}" alt="{{$item->title}}">
                    </div>
                @else
                    <div class="item c2" client-id="{{$item->id}}" section="{{$item->year}}">
                        <div class="box">
                            <div class="h1">{{$item->title}}</div>
                            <p>{{$item->text}}</p>
                        </div>
                        <img class="ximg std" src="{{$item->img}}" alt="{{$item->title}}"><img class="ximg ovr" src="{{$item->img_hover}}" alt="{{$item->title}}">
                    </div>
                @endif
            @endforeach
            <div class="presenter">
                <div class="line">
                    <div class="arrlCnt noselect">
                        <div class="arr arrl"></div>
                    </div>
                    <div class="logoCnt noselect">
                        <div class="box"><img src="img\x.png" alt="Image" class="ximg"></div>
                    </div>
                    <div class="textCnt">
                        <div class="box">
                            <div class="h1">Skoda auto</div>
                            <a href="http://skoda-avto.ru/">skoda-avto.ru</a>
                            <p>Организация доставки сувенирной продукции к чемпионату мира по хоккею в поддержку российской сборной для «Skoda Auto Россия» в 2010 году.</p>
                        </div>
                    </div>
                    <div class="arrrCnt noselect">
                        <div class="arr arrr"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="proceed"><a href="{{route('page.works')}}" class="proceed yellow">Все клиенты</a></div>

    </div>
    <div class="page-part pp-index-contacts" part-type="contacts" data-mode="index">
        <div class="part-head smPad">
            <div class="h1"><a href="{{route('page.contact')}}">{!! $title['kontakty-zagolovok'] !!}</a></div>
            <p>{!! $title['kontakty-tekst'] !!}</p>
        </div>
        <div class="contacts" style="background-image: url({{$title['kontakty-fon']}});-webkit-background-size: cover;background-size: cover;background-repeat: no-repeat;">
            <div id="maps-video" class="index-mode">

            </div>
            <div class="shader"><img class="ximg" src="img\shader-index.png"></div>
            <div class="cnt">
                <div class="phones">
                    <div class="item l">
                        <div class="item-cnt">
                            <span>Поддержка для клиентов сервиса:</span>
                            <div class="h1 ya-phone">8 (800) 775 77 28</div>
                        </div>
                    </div>
                    <div class="item r">
                        <div class="item-cnt">
                            <span>Отдел продаж:</span>
                            <div class="h1 ya-phone">+7 (495) 181 21 26</div>
                        </div>
                    </div>
                </div>
                <div id="index-request-form" class="index-request-form">
                    <div class="FORM">
                        <div class="index-request-form-title">Задайте ваш вопрос или кратко опишите ситуацию.<br> Мы очень быстро свяжемся с вами :)</div>
                        <form action="{{route('form.contact')}}" method="post">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td>
                                        <input type="text" class="name" name="name" value="" placeholder="Ваше имя и фамилия">
                                        <input type="text" class="phone" name="phone" value="" placeholder="Ваш телефон">
                                        <input type="text" class="email" name="email" value="" placeholder="Email">
                                    </td>
                                    <td><textarea class="comment" name="comment" placeholder="Дополнительная информация"></textarea></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <div class="form-agreement center white">
                                            * Отправляя форму, вы даете свое согласие на
                                            <noindex><a href="agreement\index.htm" target="_blank" rel="nofollow">обработку персональных данных</a></noindex>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    {{csrf_field()}}
                                    <td colspan="2"><span class="proceed yellow submit click">Отправить сообщение</span></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div class="LOCK"></div>
                    <div class="OK"> Ваш вопрос поступил в обработку.<br> В течение 12 часов менеджер свяжется с вами. <br><br><span class="proceed yellow hide-message">Написать еще</span></div>
                </div>
            </div>
        </div>
    </div>
@endsection



