@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Добавить</h3>
        </div>
        {{Form::open(array('route' => 'leader.store', 'files' => true))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('name', 'ФИО')}}
                {{Form::text('name', '' , array('placeholder' => 'ФИО', 'id' => 'title', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('position', 'Должность')}}
                {{Form::text('position', '' , array('placeholder' => 'Должность', 'id' => 'position', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('vk_alias', 'Ссылка ВК')}}
                {{Form::text('vk_alias', '' , array('placeholder' => 'Ссылка ВК', 'id' => 'vk_alias', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('inst_alias', 'Ссылка Инстаграм')}}
                {{Form::text('inst_alias', '' , array('placeholder' => 'Ссылка Инстаграм', 'id' => 'inst_alias', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('fb_alias', 'Ссылка Facebook')}}
                {{Form::text('fb_alias', '' , array('placeholder' => 'Ссылка Facebook', 'id' => 'fb_alias', 'class' => 'form-control'))}}
            </div>

            <div class="form-group">
                {{Form::label('img', 'Изображение')}}
                {{Form::file('img', '' , array('id' => 'img', 'class' => 'form-control'))}}
            </div>

        </div>
        <div class="box-footer">
            {{Form::submit('Добавить', array('class' => 'btn btn-primary')) }}
        {{Form::close()}}



    </div>
    <!-- /.box-body -->

    </form>
    </div>
@endsection