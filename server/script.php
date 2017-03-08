<?php
  include 'random.php';
  // The global $_POST variable allows you to access the data sent with the POST method
  // To access the data sent with the GET method, you can use $_GET
  if ($_GET['ajax']) {
    $txt = $_GET['str'];

    // Create new instance of generator class.
    $generator = new RandomStringGenerator;

    // Set token length.
    $tokenLength = 5;

    // Call method to generate random string.
    $token = $generator->generate($tokenLength);

    // Create an unique name for the file
    $namefile = $token . '.txt';
    
    $myfile = file_put_contents($namefile, $txt.PHP_EOL , FILE_APPEND | LOCK_EX);
  }  
    
?>