<?php
    include 'random.php';

    function createFile(){
        // Create new instance of generator class.
        $generator = new RandomStringGenerator;

        // Set token length.
        $tokenLength = 5;

        // Call method to generate random string.
        $token = $generator->generate($tokenLength);

        // Create an unique name for the file
        $namefile = $token . '.txt';
    }
?>