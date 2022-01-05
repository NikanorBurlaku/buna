<?php 

if((isset($_POST['call-name']))&&(isset($_POST['phone'])&&$_POST['phone']!="")){ 
    $to = 'orlov93123@yandex.ru';
    $subject = 'Callback';
    $message = 'Имя: '.$_POST['call-name'].'
Номер телефона: '.$_POST['phone']; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
  $headers .= "From: mining-krd.ru <info@mail.com>\r\n"; 
  mail($to, $subject, $message, $headers);
  
    echo json_encode(array('status' => 'success'));
  } else {
    echo json_encode(array('status' => 'error'));
  }
  
?>