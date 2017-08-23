@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Обновить {{$title->id}}</h3>
        </div>
        {{Form::open(array('route' => array('title.update', $title->id), 'files' => true, 'method' => 'patch'))}}
        <div class="box-body">
            <div class="form-group">
                @if($title->type == 'title')
                    {{Form::label('value', 'Title')}}
                    {{Form::text('value', $title->value , array('placeholder' => 'Заголовок', 'id' => 'value', 'class' => 'form-control'))}}
                @elseif($title->type == 'text')
                    {{Form::label('value', 'Текст')}}
                    {{Form::textarea('value', $title->value , array('placeholder' => 'Текст', 'id' => 'value', 'class' => 'form-control'))}}
                @else
                    {{Form::label('value', 'Изображение')}}
                    {{Form::file('value', '' , array('id' => 'value', 'class' => 'form-control'))}}
                @endif
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