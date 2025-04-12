<?php
    $language = strtolower($_POST['language']);
    $code = $_POST['code'];

    $random = substr(md5(mt_rand()), 0, 7);
    $filePath = "temp/" . $random . "." . $language;
    $programFile = fopen($filePath, "w");
    fwrite($programFile, $code);
    fclose($programFile);

    if($language == "php") {
        $output = shell_exec("C:\php-8.3.4\php.exe $filePath 2>&1");
        echo $output;
    }
   
    if($language == "python") {
        $output = shell_exec("C:\Python312\python.exe $filePath 2>&1");
        echo $output;
    }
    if($language == "cpp") {
        $outputExe = $random . ".exe"; 
        shell_exec("g++ $filePath -o $outputExe");
        $output = shell_exec(__DIR__ . "//$outputExe");
        echo $output;
    }
?>