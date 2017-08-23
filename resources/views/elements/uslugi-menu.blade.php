<div id="services-menu">
    <ul class="services">
        <li class="section act" tid="section1">
            <div><a href="{{route('page.uslugi')}}">Услуги</a></div>
            <ul class="section" style="display:block;">
                @foreach($uslugas as $item)
                    @if($item->alias == $active)
                        <li tid="{{$item->alias}}">{{$item->name}}</li>
                    @else
                        <li tid="{{$item->alias}}"><a href="{{route('page.uslugi.item', $item->alias)}}">{{$item->name}}</a></li>
                    @endif
                @endforeach
            </ul>
        </li>
    </ul>
</div>