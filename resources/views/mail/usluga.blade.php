<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Новая заявка на услугу {{$usluga->name}}</title>
</head>
<body>
    <p>
        С сайта {{$_SERVER['SERVER_NAME']}} в {{$time}} отправленна заявка. На получение услуги {{$usluga->name}}.
    </p>
    <p>
        Данные отправленные в заявке
    </p>
    <ul>
        <li>
            Имя: {{$data->name}}
        </li>
        @if(!empty($data->phone))
            <li>
                Телефон: {{$data->phone}}
            </li>
        @endif
        @if(!empty($data->mail))
            <li>
                E-mail: {{$data->mail}}
            </li>
        @endif
        @if(!empty($data->message))
            <li>
                Дополнительная информация: {{$data->message}}
            </li>
        @endif
    </ul>

</body>
</html>