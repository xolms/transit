@extends('layouts.page')
@section('meta')
    <title>{{$meta->title}}</title>
    <meta name="description" content="{{$meta->description}}">
    <meta name="keywords" content="{{$meta->keywords}}">
@endsection
@section('content')
    <div class="page-part" part-type="index">
        <div class="index">
            <div class="bg" style="background-image:url(../video/team/team.jpg);"></div>
            <div class="shader"><img class="ximg" src="..\img\shader-index.png" alt="Затемнение"></div>
            <div class="cnt">
                <div class="logo"><a href="/"><img class="ximg" src="..\img\x.png"></a></div>
                <h1 class="big-font-rendering">Команда</h1>
                <p>Молодой и творческий коллектив, по уши влюбленный в свое дело, &mdash;<br> это основной секрет качественного предоставления услуг.</p>
                <!-- <div id="start" class="ignite">Познакомиться</div> -->
                <div class="mouse">
                    <div class="dot"></div>
                </div>
            </div>
            @include('modules.main-mnu')
        </div>
    </div>
    <div class="page-part" part-type="Team">
        <div class="centered-info">
            <p> Менеджмент в компании построен по принципу семьи, где каждый<br> член команды является неотъемлемой частью большого проекта. Где условия оплаты<br> уходят на второй план, и внимание акцентируется прежде всего на комфортных условиях,<br> дружеских отношениях и дисциплине. Мы делаем всё, чтобы каждый<br> сотрудник смог себя максимально реализовать. <br><br> Чуть не забыли! Почти все сотрудники Transitplus получили диплом<br> о высшем образовании с отличием. </p>
        </div>
        <div class="team-table">
            @foreach($team as $item)
                <div class="item"><img src="{{$item->img}}" alt="{{$item->alt}}"></div>
            @endforeach
        </div>
    </div>
    <div class="page-part" part-type="members">
        <div class="part-head no-double smPad">
            <div class="h1">Руководство</div>
            <p>Мы никогда не покупали дорогие кадры. Все эти люди начинали как обычные<br> менеджеры по продажам и прошли все ступени этого нелегкого пути.<br> Это поистине гордость нашей компании!</p>
        </div>
        <div class="members team-page">
            <div class="plate"></div>
            @foreach($leader as $item)
                <div class="item">
                <div class="video"><img src="{{$item->img}}" alt="{{$item->name}}" class="ximg"></div>
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
        </div>
    </div>
@endsection