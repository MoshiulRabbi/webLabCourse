<?php
    $inp = readline('Enter a String: ');
    $rev = strrev($inp);
  if($rev == $inp){
    echo 'Palindrome';
  }
  else{
    echo 'Not a Palindrome';
  }
  
?>