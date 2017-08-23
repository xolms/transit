@extends('layouts.admin')

@section('content')
    <div class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">Добавить</h3>
        </div>
        {{Form::open(array('route' => 'usluga.store', 'files' => true))}}
        <div class="box-body">
            <div class="form-group">
                {{Form::label('alias', 'Alias вводить можно на русском языке с пробелами должно быть уникально')}}
                {{Form::text('alias', '' , array('placeholder' => 'Alias', 'id' => 'alias', 'class' => 'form-control', 'maxlength' => '60', 'minlength' => '2'))}}
            </div>
            <div class="form-group">
                {{Form::label('name', 'Имя услуги')}}
                {{Form::text('name', '' , array('placeholder' => 'Имя услуги', 'id' => 'name', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('title', 'Title')}}
                {{Form::text('title', '' , array('placeholder' => 'Заголовок', 'id' => 'title', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('description', 'Description')}}
                {{Form::text('description', '' , array('placeholder' => 'Description', 'id' => 'title', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('text_index', 'Текст для главной')}}
                {{Form::textarea('text_index', '' , array('placeholder' => 'Текст для главной', 'id' => 'text_index', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('keywords', 'Keywords')}}
                {{Form::text('keywords', '' , array('placeholder' => 'Keywords', 'id' => 'keywords', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('img', 'Изображение')}}
                {{Form::file('img', '' , array('id' => 'img', 'class' => 'form-control'))}}
            </div>
            <div class="form-group">
                {{Form::label('img_index', 'Изображение для главной')}}
                {{Form::file('img_index', '' , array('id' => 'img_index', 'class' => 'form-control'))}}
            </div>
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Текст
                    </h3>
                    <!-- tools box -->
                    <div class="pull-right box-tools">
                        <button type="button" class="btn btn-default btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                            <i class="fa fa-minus"></i></button>

                    </div>
                    <!-- /. tools -->
                </div>
                <!-- /.box-header -->
                <div class="box-body pad">
                    {{Form::textarea('text', '' , array('id' => 'textarea', 'class' => 'textarea', 'style' => 'width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;'))}}
                </div>
            </div>

        </div>
        <div class="box-footer">
            {{Form::submit('Добавить услугу', array('class' => 'btn btn-primary')) }}
        {{Form::close()}}



    </div>
    <!-- /.box-body -->

    </form>
    </div>
@endsection