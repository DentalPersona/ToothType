<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dental Persona Quiz</title>
<style>
  body {
    background-color: #d8a1c4;
    font-family: 'Muli', sans-serif;
    font-weight: bold;
    color: #301934;
    text-align: center;
    padding: 50px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #301934;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }

  button:hover {
    background-color: #5d2f50;
  }
</style>
</head>
<body>
  <h1>Come and find your dental persona!</h1>
  <button id="playButton">Play</button>

  <script>
    document.getElementById('playButton').addEventListener('click', function() {
      window.location.href = 'quiz.html';
    });
  </script>
</body>
</html>
