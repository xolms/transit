@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Обновить {{$leader->name}}</h3>
        </div>
        {{Form::open(array('route' => array('leader.update', $leader->id), 'files' => true, 'method' => 'patch'))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('name', 'ФИО')}}
                {{Form::text('name', $leader->name , array('placeholder' => 'ФИО', 'id' => 'title', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('position', 'Должность')}}
                {{Form::text('position', $leader->position , array('placeholder' => 'Должность', 'id' => 'position', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('vk_alias', 'Ссылка ВК')}}
                {{Form::text('vk_alias', $leader->vk_alias , array('placeholder' => 'Ссылка ВК', 'id' => 'vk_alias', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('inst_alias', 'Ссылка Инстаграм')}}
                {{Form::text('inst_alias', $leader->inst_alias , array('placeholder' => 'Ссылка Инстаграм', 'id' => 'inst_alias', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('fb_alias', 'Ссылка Facebook')}}
                {{Form::text('fb_alias', $leader->fb_alias , array('placeholder' => 'Ссылка Facebook', 'id' => 'fb_alias', 'class' => 'form-control'))}}
            </div>

            <div class="form-group">
                {{Form::label('img', 'Изображение')}}
                {{Form::file('img', '' , array('id' => 'img', 'class' => 'form-control'))}}
            </div>

        </div>
        <div class="box-footer">
            {{Form::submit('Обновить', array('class' => 'btn btn-primary')) }}
            {{Form::close()}}



        </div>
        <!-- /.box-body -->

        </form>
    </div>
@endsection