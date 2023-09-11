<?php
$token = '6228923787:AAG-ZACsJE8lbQySbifpSY5HMXEzIqLdPPI';
$chat_id = '-1001804979370';

$name = $_POST['name'];
$phone = $_POST['phone'];
$socials = isset($_POST["socials"]) ? $_POST["socials"] : "не указан";

if(strlen(trim($name)) > 0 && strlen(trim($phone)) > 0) {
  $message = "*НОВАЯ ЗАЯВКА*\nИмя: {$name} \nТелефон: {$phone} \nСоцсети: {$socials}";
  $encoded_message = urlencode($message);

  $url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$encoded_message}&parse_mode=markdown";

  $response = file_get_contents($url);
  $data = json_decode($response, true);
  var_dump($data);
}
?>
