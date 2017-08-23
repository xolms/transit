@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Обновить {{$meta->name}}</h3>
        </div>
        {{Form::open(array('route' => array('meta.post', $meta->alias), 'files' => true, 'method' => 'patch'))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('title', 'Заголовок')}}
                {{Form::text('title', $meta->title , array('placeholder' => 'Заголовок', 'id' => 'title', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('keywords', 'Ключевые слова')}}
                {{Form::textarea('keywords', $meta->keywords , array('id' => 'keywords', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('description', 'Описание')}}
                {{Form::textarea('description', $meta->description , array('id' => 'description', 'class' => 'form-control'))}}
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