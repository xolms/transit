@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Обновить {{$work->title}}</h3>
        </div>
        {{Form::open(array('route' => array('work.update', $work->id), 'files' => true, 'method' => 'patch'))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('title', 'Title')}}
                {{Form::text('title', $work->title , array('placeholder' => 'Заголовок', 'id' => 'title', 'class' => 'form-control'))}}
            </div>

            <div class="form-group">
                {{Form::label('text', 'Текст')}}
                {{Form::textarea('text', $work->text , array('placeholder' => 'Текст', 'id' => 'text', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('year', 'Год')}}
                {{Form::text('year', $work->year , array('placeholder' => 'Год', 'id' => 'year', 'class' => 'form-control'))}}
            </div>

            <div class="form-group">
                {{Form::label('img', 'Изображение')}}
                {{Form::file('img', '' , array('id' => 'img', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('img_hover', 'Изображение при наведении')}}
                {{Form::file('img_hover', '' , array('id' => 'img_hover', 'class' => 'form-control'))}}
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