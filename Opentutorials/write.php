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
  <body id="body" class="">
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
        <form class="" action="process.php" method="post">
          <p>
            <label for="title">제목 : </label>
            <input id="title" type="text" name="title">
          </p>
          <p>
            <label for="author">저자 : </label>
            <input id="author" type="text" name="author" value="">
          </p>
          <p>
            <label for="description">본문 : </label>
            <textarea id="description" name="description" rows="8" cols="40"></textarea>
          </p>
          <p>
            <input type="submit" value="전송">
          </p>
        </form>

      </article>
    <a href="write.php">쓰기</a>
  </body>
</html>
