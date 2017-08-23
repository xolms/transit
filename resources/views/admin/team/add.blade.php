@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Добавить</h3>
        </div>
        {{Form::open(array('route' => 'team.store', 'files' => true))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('alt', 'ФИО')}}
                {{Form::text('alt', '' , array('placeholder' => 'ФИО', 'id' => 'alt', 'class' => 'form-control'))}}
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