<?php
$token = "5414459205:AAH0KkiiyvkwiNyq5qx3G1Nb1Z9VsqCR630";
$chat_id = "-742149444";
if ($_POST['act'] == 'order') {
    $phone = ($_POST['phone']);
    $arr = array(
        'Телефон:' => $phone
    );
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    if ($sendToTelegram) {
       header("Location: http://xn----9sbmabpdli4aphna2a6e.xn--p1ai/");
    }
}
?>