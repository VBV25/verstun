<?php
$name = htmlspecialchars($_POST['nameInputValue']);
$phone = htmlspecialchars($_POST['phoneInputValue']);
$comment = htmlspecialchars($_POST['commentInputValue']);

//

//ОТПРАВКА 


$subject = "Заявка";

$headers = "From: 
Заявка\r\n \r\n 
Site: Верстун \r\n \r\n
 
Имя: $name \r\n 
Телефон: $phone\r\n 

 
Комментарии:\r\n \r\n 
$comment\r\n \r\n \r\n";

/*verstun@gmail.com*/
if (mail(
  "ychoba.boec92.92@yandex.ru",
  $subject,
  $headers

))
  echo "Отправлено"/*Сообщение отправлено*/;
else
  echo "Проверьте правильность заполнения формы!"/*Сообщение не отправлено*/;
