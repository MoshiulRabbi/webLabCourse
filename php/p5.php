<?php
    $inp = (int)(readline('enter a number: '));
    $sum = 0;
    $mul = 1;
    $r = 0;
    
  while($inp != 0){
    $r = $inp % 10;
    $sum = $sum + $r;
    $mul = $mul * $r;
    $inp = (int)($inp / 10);
  }
    
    if($sum == $mul){
      echo 'Perfect number';
    }
    else{
      echo 'Not a Perfect Number';
    }
 
?>
