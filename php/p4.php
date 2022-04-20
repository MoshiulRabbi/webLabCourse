<?php
    $inp = readline('enter a string: : ');
    $ss = readline('enter a string: ');
    
    if(strpos($inp,$ss)!== false){
      echo 'Substring';
    }
    else{
      echo 'Not a substring';
    }
?>