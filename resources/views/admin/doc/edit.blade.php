@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Обновить {{$doc->id}}</h3>
        </div>
        {{Form::open(array('route' => array('doc.update', $doc->id), 'files' => true, 'method' => 'patch'))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('name', 'Название')}}
                {{Form::text('name', $doc->name , array('placeholder' => 'Название', 'id' => 'name', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                <label for="type">Тип</label>
                <select name="type" id="type" class="form-control">
                    <option value="licence"> {{$doc->type == 'licence' ? 'selected' : ''}}Лицензия</option>
                    <option value="rev" {{$doc->type == 'rev' ? 'selected' : ''}}>Отзыв</option>
                    <option value="present" {{$doc->type == 'present' ? 'selected' : ''}}>Награда</option>
                </select>
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