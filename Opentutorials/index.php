<?php
require_once('conn.php');
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="style.css" media="screen" title="notitle" charset="utf-8">
  </head>
  <body id="body" class="white">
    <header>
      <h1><a href="index.php">생활코딩 JavaScript</a></h1>
    </header>
    <nav>
      <ol>
<?php
$sql = "SELECT *FROM topic";
$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result)){
  echo '<li><a href="http://localhost/index.php?id='.$row['ID'].'">'.htmlspecialchars($row['TITLE']).'</a></li>';
}
 ?>
      </ol>
    </nav>
    <div id="content">
      <article>
  <?php
  if(empty($_GET['id'])){
    echo "Welcome";
  }else{
    $id = mysqli_real_escape_string($conn,$_GET['id']);
    $sql = "SELECT *FROM topic WHERE id = ".$id;
    $sql = "SELECT topic.ID, topic.TITLE, topic.DESCRIPTION, user.NAME, topic.CREATED FROM `topic` LEFT JOIN user ON topic.AUTHOR = user.ID WHERE topic.ID=".$id;
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
  ?>
    <h2><?=htmlspecialchars($row['TITLE'])?></h2>
    <div><?=htmlspecialchars($row['CREATED'])?> | <?=htmlspecialchars($row['NAME'])?></div>
    <div><?=htmlspecialchars($row['DESCRIPTION'])?></div>
  <?php
  }
  ?>
      </article>
      <input type="button" name="name" value="White" onclick="document.getElementById('body').className=''">
      <input type="button" name="name" value="Black" onclick="document.getElementById('body').className='black'">
      <a href="write.php">write</a>
    </div>
  </body>
</html>
