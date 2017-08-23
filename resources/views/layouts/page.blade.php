<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="ru-ru" xml:lang="ru-ru">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    @yield('meta')

    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui">
    <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'>
    <link rel='icon' href='{{asset('img/favicon.ico')}}'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="{{asset('transit/desktop.css?ver=2.2.5')}}" media="all">
    <link rel="stylesheet" type="text/css" href="{{asset('transit/xolms.css')}}" media="all">

    <script type="text/javascript" src="{{asset('transit/user.js?ver=2.2.5')}}"></script>
    <script src="{{asset('js/notify.min.js')}}" type="text/javascript"></script>

    <script type="text/javascript">new JSApp({ noRedirect : false });</script>
    <meta name="robots" content="noyaca">
</head>
<body>
<div id="screen">
    <div id="wrapper">
        <div id="content">
            @yield('content')
            @include('modules.footer')

</body>
</html>