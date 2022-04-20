<?php
$a = (int)(readline('Enter a string: '));
if ($a % 400 == 0){
  echo 'Leap year';
}
else if($a % 4 == 0){
  echo 'Given year is leap year';
}
else{
  print('Given year is not a leapyear');
}
?>