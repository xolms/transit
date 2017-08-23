@extends('layouts.admin')
@section('content')
    @if(isset($title))
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <h3 class="box-title">Список</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <table id="table-personal" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Имя</th>
                                    <th>Тип</th>
                                    <th>Значение</th>
                                    <th>Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($title as $item)
                                    <tr>

                                        <td style="vertical-align: middle;">{{$item->name_ru}}</td>
                                        <td style="vertical-align: middle;">
                                            @if($item->type == 'title')
                                                Заголовок
                                            @elseif($item->type == 'text')
                                                Текст
                                            @else
                                                Фон
                                            @endif
                                        </td>
                                        @if($item->type == 'bg')
                                        <td style="vertical-align: middle;">
                                            <img src="{{$item->value}}" alt="{{$item->name_ru}}" style="width: 200px; height: auto;">
                                        </td>
                                        @else
                                            <td style="vertical-align: middle;">{{$item->value}}</td>
                                        @endif
                                        <td style="vertical-align: middle; text-align: center;">
                                            <a href="{{route('title.get',$item->id)}}" class="btn btn-warning btn-sm">Редактировать</a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @else
        <h2>У вас на данный момент нет услуг</h2>
    @endif



@endsection