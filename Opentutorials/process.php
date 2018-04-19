<?php
require_once('conn.php');
 ?>
 
<?php

//$result = mysqli_query($conn, "SELECT * FROM topic");
if(empty($_POST['author'])){
  echo "author is empty";
}else{
  $author = mysqli_real_escape_string($conn,$_POST['author']);
  $sql = "SELECT *FROM `user` WHERE `NAME` = '{$author}';";

  $result = mysqli_query($conn, $sql);

  if($result->num_rows > 0){
    echo "1\n";
      $row = mysqli_fetch_assoc($result);
      $user_id=$row['ID'];
  } else{
    echo "2\n";
    $sql = "INSERT INTO `user`(`ID`, `NAME`, `PASSWORD`)
    VALUES(NULL, '{$author}', '123123');";
    $result = mysqli_query($conn, $sql);
    $user_id = mysqli_insert_id($conn);
  }
  $title = mysqli_real_escape_string($conn, $_POST['title']);
  $description = mysqli_real_escape_string($conn, $_POST['description']);
  $sql = "INSERT INTO `topic`(`ID`, `TITLE`, `DESCRIPTION`,`AUTHOR`,`CREATED`)
  VALUES(NULL, '{$title}','{$description}','{$user_id}',now());";
  mysqli_query($conn, $sql);
  header('Location:index.php');
}
?>
