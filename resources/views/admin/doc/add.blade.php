@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Добавить</h3>
        </div>
        {{Form::open(array('route' => 'doc.store', 'files' => true))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('name', 'Название')}}
                {{Form::text('name', '' , array('placeholder' => 'Название', 'id' => 'name', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                <label for="type">Тип</label>
                <select name="type" id="type" class="form-control">
                    <option value="licence">Лицензия</option>
                    <option value="rev">Отзыв</option>
                    <option value="present">Награда</option>
                </select>
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