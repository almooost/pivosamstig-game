<?php

if($_GET['t']){


    $igbs = [
        'name' => 'Inglorious Beer Stars'
    ];

    $dgdem = [
        'name' => 'Die Gönndir Ehrenmänner'
    ];

    $data = ($_GET['t'] == 'igbs' ? $igbs : $dgdem);

    echo json_encode($data);
    exit();
}
