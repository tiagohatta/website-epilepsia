<?php
  // The global $_POST variable allows you to access the data sent with the POST method
  // To access the data sent with the GET method, you can use $_GET
  $txt = "infancia-x";

  /*$file = fopen('configurationSettings.txt', 'w+'); //Open your .txt file
  $content = $command;
  fwrite($file , $content); //Now lets write it in there
  fclose($file ); //Finally close our .txt
  */
  
  $myfile = file_put_contents('configurationSettings.txt', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);

  header('Location: infancia-x.html');s
?>