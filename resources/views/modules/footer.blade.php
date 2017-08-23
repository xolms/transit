<div class="page-part page-footer" part-type="Minifooter">
    <div class="page-social">
        <a class="fa fa-vk" href="{{$setting['ssylka-vk']}}" target="_blank"></a>
        <a class="fa fa-instagram" href="{{$setting['ssylka-instagram']}}" target="_blank"></a>
        <a class="fa fa-facebook" href="{{$setting['ssylka-facebook']}}" target="_blank"></a>
    </div>
    <div class="right">&copy; Novograd-Invest 2015&ndash;{{\Carbon\Carbon::now()->year}} &nbsp; <a href="mailto:{{$setting['e-mail']}}">{{$setting['e-mail']}}</a></div>
</div>
</div>
</div>
</div>
<div id="overlap-menu">
    <div class="bg"><img class="ximg" src="img\overlap-menu-bg.jpg"></div>
    <div class="cnt">
        @if(Route::is('index'))
            <div class="logo"></div>
        @else
            <div class="logo"><a href="/"><img class="ximg" src="..\img\x.png" alt="Transitplus"></a></div>
        @endif
        <div class="menu">
            <ul>
                @if(Route::is('page.uslugi') || Route::is('page.uslugi.item'))
                    <li class="item" part='services'>Услуги</li>
                @else

                    <li class="item" part='services'><a href="{{route('page.uslugi')}}">Услуги</a></li>
                @endif
                <li class="bull"></li>
                @if(Route::is('page.about'))
                    <li class="item" part='about'>Компания</li>
                @else
                    <li class="item" part='about'><a href="{{route('page.about')}}">Компания</a></li>
                @endif
                <li class="bull"></li>
                @if(Route::is('page.team'))
                    <li class="item" part='team'>Команда</li>

                @else
                    <li class="item" part='team'><a href="{{route('page.team')}}">Команда</a></li>
                @endif
                <li class="bull"></li>
                @if(Route::is('page.works'))
                    <li class="item" part='team'>Клиенты</li>

                @else
                    <li class="item" part='team'><a href="{{route('page.works')}}">Клиенты</a></li>
                @endif
                <br>
                <li class="bull"></li>
                @if(Route::is('page.blog') || Route::is('page.blog.item'))
                    <li class="item" part='team'>Блог</li>

                @else
                    <li class="item" part='team'><a href="{{route('page.blog')}}">Блог</a></li>
                @endif
                <li class="bull"></li>
                @if(Route::is('page.contact'))
                    <li class="item" part='team'>Контакты</li>

                @else
                    <li class="item" part='team'><a href="{{route('page.contact')}}">Контакты</a></li>
                @endif
            </ul>
        </div>
        <div class="social">
            <div class="page-social">
                <a class="fa fa-vk" href="{{$setting['ssylka-vk']}}" target="_blank"></a>
                <a class="fa fa-instagram" href="{{$setting['ssylka-instagram']}}" target="_blank"></a>
                <a class="fa fa-facebook" href="{{$setting['ssylka-facebook']}}" target="_blank"></a>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="phone ya-phone">{{$setting['telefon']}}</div>
        <div class="btn">Отправить заявку</div>
    </div>
    <div class="toggle"></div>
</div>
<div id="request-form">
    <div class="bg"></div>
    <div class="cnt FORM">
        <div class="h1">Задать вопрос</div>
        <p>Напишите ваш вопрос или&nbsp;кратко опишите ситуацию, в&nbsp;которой<br> нужна наша помощь, и&nbsp;мы свяжемся с&nbsp;вами в&nbsp;ближайшее время.</p>
        <div class="form">
            <div class="fld"><input type="text" class="name" name="name" value="" placeholder="Имя"></div>
            <div class="fld"><input type="text" class="phone" name="phone" value="" placeholder="Телефон"></div>
            <div class="fld"><input type="text" class="email" name="email" value="" placeholder="Email"></div>
            <div class="fld"><textarea class="comment" name="comment" placeholder="Сообщение"></textarea></div>
            <div class="form-agreement center">
                * Отправляя форму, вы даете свое согласие на
                <noindex><a href="/agreement" target="_blank" rel="nofollow">обработку персональных данных</a></noindex>
            </div>
            <div class="fld">
                <div class="submit">Отправить</div>
            </div>
        </div>
    </div>
    <div class="cnt OK" style="display:none;">
        <div class="h1">Ваша заявка принята</div>
        <p>Ваша заявка принята, менеджер свяжется с вами<br>очень оперативно и вежливо</p>
        <div class="fld">
            <div class="submit">Закрыть</div>
        </div>
    </div>
    <div class="toggle"></div>
</div>
<div id="consult-form">
    <div class="bg"></div>
    <div class="cnt FORM">
        <div class="h1">Закажите бесплатную консультацию</div>
        <p>Напишите ваш вопрос или&nbsp;кратко опишите ситуацию, в&nbsp;которой<br> нужна наша помощь, и&nbsp;мы свяжемся с&nbsp;вами в&nbsp;ближайшее время.</p>
        <div class="form">
            <div class="fld"><input type="text" class="name" name="name" value="" placeholder="Имя"></div>
            <div class="fld"><input type="text" class="phone" name="phone" value="" placeholder="Телефон"></div>
            <div class="fld"><input type="text" class="email" name="email" value="" placeholder="Email"></div>
            <div class="fld"><textarea class="comment" name="comment" placeholder="Вопрос"></textarea></div>
            <div class="form-agreement">
                * Отправляя форму, вы даете свое согласие на
                <noindex><a href="agreement\index.htm" target="_blank" rel="nofollow">обработку персональных данных</a></noindex>
            </div>
            <div class="fld">
                <div class="submit">Отправить</div>
            </div>
        </div>
    </div>
    <div class="cnt OK" style="display:none;">
        <div class="h1">Ваша заявка принята</div>
        <p>Ваша заявка принята, менеджер свяжется с вами<br>очень оперативно и вежливо</p>
        <div class="fld">
            <div class="submit">Закрыть</div>
        </div>
    </div>
    <div class="toggle"></div>
</div>
<div id="meeting-form">
    <div class="bg"></div>
    <div class="cnt FORM">
        <div class="h1">Запишитесь на встречу</div>
        <p>Оставьте заявку и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время.</p>
        <div class="form">
            <div class="fld"><input type="text" class="name" name="name" value="" placeholder="Имя"></div>
            <div class="fld"><input type="text" class="phone" name="phone" value="" placeholder="Телефон"></div>
            <div class="fld"><input type="text" class="email" name="email" value="" placeholder="Email"></div>
            <div class="fld"><textarea class="comment" name="comment" placeholder="Вопрос"></textarea></div>
            <div class="form-agreement">
                * Отправляя форму, вы даете свое согласие на
                <noindex><a href="agreement\index.htm" target="_blank" rel="nofollow">обработку персональных данных</a></noindex>
            </div>
            <div class="fld">
                <div class="submit">Отправить</div>
            </div>
        </div>
    </div>
    <div class="cnt OK" style="display:none;">
        <div class="h1">Ваша заявка принята</div>
        <p>Ваша заявка принята, наш специалист свяжется с вами<br>очень оперативно и вежливо</p>
        <div class="fld">
            <div class="submit">Закрыть</div>
        </div>
    </div>
    <div class="toggle"></div>
</div>
<div id="fixed-menu">
    @if(Route::is('index'))
        <div class="logo"></div>
    @else
        <div class="logo"><a href="/"><img class="ximg" src="..\img\x.png" alt="Transitplus"></a></div>
    @endif
    <div class="toggle">
        <div class="a"></div>
        <div class="b"></div>
        <div class="c"></div>
        <span>Меню</span>
    </div>
    <div class="right">
        <div class="phone ya-phone">{{$setting['telefon']}}</div>
        <div class="btn yellow">Задать вопрос</div>
    </div>
</div>
<script type="text/javascript">__app__.ignite();</script>
<script> (function(w, d, s, h, id) { w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init"; var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2); })(window, document, 'script', 'cloud.roistat.com', '27487c4599dff6546b344b4b5952a032'); </script><script type="text/javascript">(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=sq7yPCZHX4gW6vX23TBQomQCVkXPCoKHMmhNRAGnVhfWKbIp2DQgLSnjxyT10fa/FogzX9WMOGemDcQyObs9N*MsLDHU3iNmG2j0ykLDygYWNJEac9BmllG*IHgcc4fgN57hE7MCdmYlQ1ANi5eenq/17LddPILgsnhPxwqg7fk-&pixel_id=1000097424';
</script>
<script type="text/javascript"> (function(d, w, k) { w.introvert_callback = function() { try { w.II = new IntrovertIntegration(k); } catch (e) {console.log(e)} }; var n = d.getElementsByTagName("script")[0], e = d.createElement("script"); e.type = "text/javascript"; e.async = true; e.src = "https://api.yadrocrm.ru/js/cache/"+ k +".js"; n.parentNode.insertBefore(e, n); })(document, window, 'a06ccdb4'); </script>

<script type="text/javascript">
    jQuery('.submit').click(function (e) {
        var button = jQuery(this);
        e.preventDefault();
        var form = button.closest('form');
        var data = form.serialize();
        jQuery.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: data,
            success: function (response) {

                console.log(response.status);
                if(response.status == 'good') {
                    var scrf = jQuery('input[name=_token]').val();
                    form.find('input, textarea').val('');
                    form.find('input[name=_token]').val(scrf);
                    button.notify(
                        "Ваш запрос успешно отправлен", "success",
                        { position: "bottom center" }
                    );
                    setTimeout(function () {
                        jQuery('.modal').fadeOut();
                    }, 5000);

                }

            },
            error: function (response) {
                if(response.status === 422) {

                    var errors = response.responseJSON;

                    console.log(errors);
                    for (error in errors) {
                        if (error === 'message') {
                            button.notify(
                                'Вы должны указать либо E-mail либо телефон, для доступа связи с вами' , 'error',
                                { position: "bottom center" }
                            );
                        }
                        else {
                            var item = form.find('input[name='+error+']');
                            var names;
                            if(error == 'name') {
                                names = 'Имя';
                            }
                            else if (error == 'phone') {
                                names = 'Телефон';
                            }
                            else if (error == 'message') {
                                names = 'Тексовое поле';
                            }
                            else if (error == 'mail') {
                                names = 'E-mail';
                            }
                            button.notify(
                                'Поле '+names+' заполненно не правильно' , 'error',
                                { position: "bottom center" }
                            );
                        }

                    }
                }
            }
        });
        return false;
    });
</script>



