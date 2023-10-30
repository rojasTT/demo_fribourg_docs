<?php

// suppression de tous les fichiers sauf unzip.php et dist.zip
function deleteAll($dir, $remove = false) {
  $structure = glob(rtrim($dir, "/").'/*');
  if (is_array($structure)) {
    foreach($structure as $file) {
      if (is_dir($file))
        deleteAll($file, true);
      else if(is_file($file)) {
        if ($file != './unzip.php' && $file != './dist.zip') {
          unlink($file);
        }
      }
    }
  }
  if($remove) {
    rmdir($dir);
  }
}
deleteAll('.');

// emplacement du zip
$file = 'dist.zip';

// répertoire pour l'extraction
$path = '.';


$zip = new ZipArchive;
$res = $zip->open($file);
if ($res === TRUE) {
  $res2 = $zip->extractTo($path);
  $zip->close();
  
  if($res2 === FALSE){
    echo "error extracting $file";
  }
  else {
    echo "$file extracted to $path";
  }
  
} else {
  echo "error reading $file";
}

// suppression du zip
unlink('dist.zip');

?>