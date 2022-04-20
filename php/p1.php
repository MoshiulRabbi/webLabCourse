<?php
$inp = readline ("Enter a string : ");
$strArr = count_chars($inp,1);

foreach ($strArr as $key=>$value)
  {
  echo chr($key). " occurred $value times \n" ;
  }
?>
