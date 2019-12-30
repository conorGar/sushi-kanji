<?php
$host = "localhost"; 
$user = "root"; 
$password = "root"; 
$dbname = "kanji_quest_db"; 
$id = '';


$connection = mysqli_connect($host, $user, $password,$dbname); //new PDO($dsn, $username, $password, $options);
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));




switch ($method) {
    case 'GET':
      $id = $_GET['id'];
      $sql = "select * from users".($id?" where id=$id":''); 
      break;
    case 'POST':
      $username = $_POST["username"];
      $password = $_POST["passwordHash"];

      $sql = "INSERT into users (username, passwordHash, email, points) values ('$username', '$password', 'xxx@gmail.com', 0)"; 
      break;
}

// run SQL statement
$result = mysqli_query($connection,$sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}
  
if ($method == 'GET') {
      if (!$id) echo '[';
      for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
      }
      if (!$id) echo ']';
} elseif ($method == 'POST') {
      echo json_encode($result);
} else {
      echo mysqli_affected_rows($con);
}
  
  $con->close();


// if(isset($_POST['submit'])){
//     require "config.php";

//     try{


//         $new_user = array(
//             "username" => $_POST['username'],
//             "passwordHash" => $_POST['passwordHash'],
//             "email" => $_POST['email'],
//             "points" => $_POST['points']
//         );

//         $sql = sprintf(
//             "INSERT INTO %s (%s) VALUES (%s)",
//             "users",
//             implode(", ", array_keys($new_user)),
//             ":username, HASHBYTES('SHA2_512', :passwordHash), :email, :points"
//         );
//             // ":" . implode(", :",array_keys($new_user))

//         $statement = $connection->prepare($sql);
//         $statement->execute($new_user);

//     }catch(PDOException $error){
//         echo $sql . "<br>" . $error->getMessage();
//     }
// }
?>