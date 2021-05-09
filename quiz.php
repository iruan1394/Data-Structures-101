<!doctype html>
<!--Ivan Ruan-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="css/template.css">
    <link rel="icon" href="images/favicon.ico">
  </head>
  <body onload = "initialize()">
    <h1 class = "page-header"><b>Data Structures 101</b></h1>
    <div class = "row"> 
        <div class="navbar">
            <a class = "col-md-3" href="home.html">Home</a>
            <div class = "col-md-3 dropdown">
              <button class="dropbtn">Overviews</button>
              <div class = "dropdown-content">
                <a href="arrays.html">Arrays</a>
                <a href="linkedlists.html">Linked Lists</a>
                <a href="stacks.html">Stacks</a>
                <a href="queues.html">Queues</a>
                <a href="hashtables.html">Hash Tables</a>
                <a href="bstrees.html">Binary Search Trees</a>
              </div>
            </div>
            <div class = "col-md-3 dropdown">
              <button class="dropbtn">Efficiency Tests</button>
              <div class = "dropdown-content">
                <a href="arraytest.html">Arrays</a>
                <a href="linkedtest.html">Linked Lists</a>
                <a href="stacktest.html">Stacks</a>
                <a href="queuetest.html">Queues</a>
                <a href="hashtest.html">Hash Tables</a>
                <a href="bstreetest.html">Binary Search Trees</a>
              </div>
          </div>
            <a class = "col-md-3" href="quiz.php">Take a Quiz</a>
        </div>
    </div>
    <div class="container-fluid text-center">    
      <div class = "row filler"></div>
      <div class="row content">
        <div class="col-sm-2 column sidenav"></div>
        <div class="col-sm-8 column text-left"> 
          <h2><b><u>Instructions: </u></b></h2>
          <br>
          <ul>
            <li>There are 8 multiple choice questions in total, randomly chosen from a set of 50.</li>
            <br>
            <li>Pick an answer to each question by clicking on a bubble.</li>
            <br>
            <li>If no questions or answers are displayed, then the database storing them is offline. In that case, the quiz feature will be unavailable until the database is back online.</li>
            <br>
            <li>When you are done, click on the submit button. Your score will then be displayed at the bottom of this page.</li>
            <br>
            <li>After submitting, correct answers will be shown as green text. Incorrect answers will be shown as red.</li>
          </ul>
          <br>
          <div class = "row filler"></div>
          <div class="row">
            <div class = "col-sm-6">
              <div>
                <h3 class = "question" id = "q1"></h3>
                <div id='block-11' style='padding: 10px;'>
                  <label for='option-11' >
                    <input type='radio' onclick = "choose(0,1)" onclick = "choose(0,1)" name='option1' class = 'input' id='option-11'/>
                    <span class = "option" id = "o11"></span>
                  </label>
                  <span class = 'result' id='result-11'></span>
                </div>
                <div id='block-12' style='padding: 10px;'>
                  <label for='option-12' >
                    <input type='radio' onclick = "choose(0,2)" name='option1' class = 'input' id='option-12'/>
                    <span class = "option" id = "o12"></span>
                  </label>
                  <span class = 'result' id='result-12'></span>
                </div>
                <div id='block-13' style='padding: 10px;'>
                  <label for='option-13' >
                    <input type='radio' onclick = "choose(0,3)" name='option1' class = 'input' id='option-13'/>
                    <span class = "option" id = "o13"></span>
                  </label>
                  <span class = 'result' id='result-13'></span>
                </div>
                <div id='block-14' style='padding: 10px;'>
                  <label for='option-14' >
                    <input type='radio' onclick = "choose(0,4)" name='option1' class = 'input' id='option-14'/>
                    <span class = "option" id = "o14"></span>
                  </label>
                  <span class = 'result' id='result-14'></span>
                </div>
              </div>
            </div>
            <div class= "col-sm-6">
              <div>
                <h3 class = "question" id = "q2"></h3>
                <div id='block-21' style='padding: 10px;'>
                  <label for='option-21' >
                    <input type='radio' onclick = "choose(1,1)" name='option2' class = 'input' id='option-21'/>
                    <span class = "option" id = "o21"></span>
                  </label>
                  <span class = 'result' id='result-21'></span>
                </div>
                <div id='block-22' style='padding: 10px;'>
                  <label for='option-22' >
                    <input type='radio' onclick = "choose(1,2)" name='option2' class = 'input' id='option-22'/>
                    <span class = "option" id = "o22"></span>
                  </label>
                  <span class = 'result' id='result-22'></span>
                </div>
                <div id='block-23' style='padding: 10px;'>
                  <label for='option-23' >
                    <input type='radio' onclick = "choose(1,3)" name='option2' class = 'input' id='option-23'/>
                    <span class = "option" id = "o23"></span>
                  </label>
                  <span class = 'result' id='result-23'></span>
                </div>
                <div id='block-24' style='padding: 10px;'>
                  <label for='option-24' >
                    <input type='radio' onclick = "choose(1,4)" name='option2' class = 'input' id='option-24'/>
                    <span class = "option" id = "o24"></span>
                  </label>
                  <span class = 'result' id='result-24'></span>
                </div>
              </div>
            </div>
          </div>
          <div class = "row">
            <div class = "col-sm-6">
              <div>
                  <h3 class = "question" id = "q3"></h3>
                  <div id='block-31' style='padding: 10px;'>
                    <label for='option-31' >
                      <input type='radio' onclick = "choose(2,1)" name='option3' class = 'input' id='option-31'/>
                      <span class = "option" id = "o31"></span>
                    </label>
                    <span class = 'result' id='result-31'></span>
                  </div>
                  <div id='block-32' style='padding: 10px;'>
                    <label for='option-32' >
                      <input type='radio' onclick = "choose(2,2)" name='option3' class = 'input' id='option-32'/>
                      <span class = "option" id = "o32"></span>
                    </label>
                    <span class = 'result' id='result-32'></span>
                  </div>
                  <div id='block-33' style='padding: 10px;'>
                    <label for='option-33' >
                      <input type='radio' onclick = "choose(2,3)" name='option3' class = 'input' id='option-33'/>
                      <span class = "option" id = "o33"></span>
                    </label>
                    <span class = 'result' id='result-33'></span>
                  </div>
                  <div id='block-34' style='padding: 10px;'>
                    <label for='option-34' >
                      <input type='radio' onclick = "choose(2,4)" name='option3' class = 'input' id='option-34'/>
                      <span class = "option" id = "o34"></span>
                    </label>
                    <span class = 'result' id='result-34'></span>
                  </div>
                </div>      
            </div>
            <div class = "col-sm-6">
              <div>
                  <h3 class = "question" id = "q4"></h3>
                  <div id='block-41' style='padding: 10px;'>
                    <label for='option-41' >
                      <input type='radio' onclick = "choose(3,1)" name='option4' class = 'input' id='option-41'/>
                      <span class = "option" id = "o41"></span>
                    </label>
                    <span class = 'result' id='result-41'></span>
                  </div>
                  <div id='block-42' style='padding: 10px;'>
                    <label for='option-42' >
                      <input type='radio' onclick = "choose(3,2)" name='option4' class = 'input' id='option-42'/>
                      <span class = "option" id = "o42"></span>
                    </label>
                    <span class = 'result' id='result-42'></span>
                  </div>
                  <div id='block-43' style='padding: 10px;'>
                    <label for='option-43' >
                      <input type='radio' onclick = "choose(3,3)" name='option4' class = 'input' id='option-43'/>
                      <span class = "option" id = "o43"></span>
                    </label>
                    <span class = 'result' id='result-43'></span>
                  </div>
                  <div id='block-44' style='padding: 10px;'>
                    <label for='option-44' >
                      <input type='radio' onclick = "choose(3,4)" name='option4' class = 'input' id='option-44'/>
                      <span class = "option" id = "o44"></span>
                    </label>
                    <span class = 'result' id='result-44'></span>
                  </div>
                </div>
            </div>
          </div>
          <div class = "row">
            <div class = "col-sm-6">
              <div>
                <h3 class = "question" id = "q5"></h3>
                <div id='block-51' style='padding: 10px;'>
                  <label for='option-51' >
                    <input type='radio' onclick = "choose(4,1)" name='option5' class = 'input' id='option-51'/>
                    <span class = "option" id = "o51"></span>
                  </label>
                  <span class = 'result' id='result-51'></span>
                </div>
                <div id='block-52' style='padding: 10px;'>
                  <label for='option-52' >
                    <input type='radio' onclick = "choose(4,2)" name='option5' class = 'input' id='option-52'/>
                    <span class = "option" id = "o52"></span>
                  </label>
                  <span class = 'result' id='result-52'></span>
                </div>
                <div id='block-53' style='padding: 10px;'>
                  <label for='option-53' >
                    <input type='radio' onclick = "choose(4,3)" name='option5' class = 'input' id='option-53'/>
                    <span class = "option" id = "o53"></span>
                  </label>
                  <span class = 'result' id='result-53'></span>
                </div>
                <div id='block-54' style='padding: 10px;'>
                  <label for='option-54' >
                    <input type='radio' onclick = "choose(4,4)" name='option5' class = 'input' id='option-54'/>
                    <span class = "option" id = "o54"></span>
                  </label>
                  <span class = 'result' id='result-54'></span>
                </div>
              </div>
            </div>
            <div class = "col-sm-6">
              <div>
                <h3 class = "question" id = "q6"></h3>
                <div id='block-61' style='padding: 10px;'>
                  <label for='option-61' >
                    <input type='radio' onclick = "choose(5,1)" name='option6' class = 'input' id='option-61'/>
                    <span class = "option" id = "o61"></span>
                  </label>
                  <span class = 'result' id='result-61'></span>
                </div>
                <div id='block-62' style='padding: 10px;'>
                  <label for='option-62' >
                    <input type='radio' onclick = "choose(5,2)" name='option6' class = 'input' id='option-62'/>
                    <span class = "option" id = "o62"></span>
                  </label>
                  <span class = 'result' id='result-62'></span>
                </div>
                <div id='block-63' style='padding: 10px;'>
                  <label for='option-63' >
                    <input type='radio' onclick = "choose(5,3)" name='option6' class = 'input' id='option-63'/>
                    <span class = "option" id = "o63"></span>
                  </label>
                  <span class = 'result' id='result-63'></span>
                </div>
                <div id='block-64' style='padding: 10px;'>
                  <label for='option-64' >
                    <input type='radio' onclick = "choose(5,4)" name='option6' class = 'input' id='option-64'/>
                    <span class = "option" id = "o64"></span>
                  </label>
                  <span class = 'result' id='result-64'></span>
                </div>
              </div>
            </div>
          </div>
          <div class = "row">
            <div class = "col-sm-6">
              <div>
                <h3 class = "question" id = "q7"></h3>
                <div id='block-71' style='padding: 10px;'>
                  <label for='option-71' >
                    <input type='radio' onclick = "choose(6,1)" name='option7' class = 'input' id='option-71'/>
                    <span class = "option" id = "o71"></span>
                  </label>
                  <span class = 'result' id='result-71'></span>
                </div>
                <div id='block-72' style='padding: 10px;'>
                  <label for='option-72' >
                    <input type='radio' onclick = "choose(6,2)" name='option7' class = 'input' id='option-72'/>
                    <span class = "option" id = "o72"></span>
                  </label>
                  <span class = 'result' id='result-72'></span>
                </div>
                <div id='block-73' style='padding: 10px;'>
                  <label for='option-73' >
                    <input type='radio' onclick = "choose(6,3)" name='option7' class = 'input' id='option-73'/>
                    <span class = "option" id = "o73"></span>
                  </label>
                  <span class = 'result' id='result-73'></span>
                </div>
                <div id='block-74' style='padding: 10px;'>
                  <label for='option-74' >
                    <input type='radio' onclick = "choose(6,4)" name='option7' class = 'input' id='option-74'/>
                    <span class = "option" id = "o74"></span>
                  </label>
                  <span class = 'result' id='result-74'></span>
                </div>
              </div>
            </div>
            <div class = "col-sm-6">
              <div>
                <h3 class = "question" id = "q8"></h3>
                <div id='block-81' style='padding: 10px;'>
                  <label for='option-81' >
                    <input type='radio' onclick = "choose(7,1)" name='option8' class = 'input' id='option-81'/>
                    <span class = "option" id = "o81"></span>
                  </label>
                  <span class = 'result' id='result-81'></span>
                </div>
                <div id='block-82' style='padding: 10px;'>
                  <label for='option-82' >
                    <input type='radio' onclick = "choose(7,2)" name='option8' class = 'input' id='option-82'/>
                    <span class = "option" id = "o82"></span>
                  </label>
                  <span class = 'result' id='result-82'></span>
                </div>
                <div id='block-83' style='padding: 10px;'>
                  <label for='option-83' >
                    <input type='radio' onclick = "choose(7,3)" name='option8' class = 'input' id='option-83'/>
                    <span class = "option" id = "o83"></span>
                  </label>
                  <span class = 'result' id='result-83'></span>
                </div>
                <div id='block-84' style='padding: 10px;'>
                  <label for='option-84' >
                    <input type='radio' onclick = "choose(7,4)" name='option8 ' class = 'input' id='option-84'/>
                    <span class = "option" id = "o84"></span>
                  </label>
                  <span class = 'result' id='result-84'></span>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class = 'row'>
            <div class = "col-sm-3"></div>
            <div class = "col-sm-6">
              <span id = "res" class = "center-block text-center resulttext"></span>
            </div>
            <div class = "col-sm-3">
              <span class = "text-right">
                <button id = "subbut" onclick = "submit()"  class = "submitbutton">Submit</button>
              </span>
            </div>
          </div>
          <br>
        </div>
        <div class="col-sm-2 column sidenav"></div>
      </div>
    </div>
    <footer class="container-fluid">
      <span class = "col-sm-2 text-center footertext">
      </span>
      <span class = "col-sm-8 text-center footertext">
        <a href="https://forms.gle/D4YJZUgrdtnnerCE8">Click Here to Give Feedback</a>
      </span>
      <span class = "col-sm-2 text-center footertext">
      </span>
    </footer>
    <?php
      function fetch($query){
        global $question;
        global $option1;
        global $option2;
        global $option3;
        global $option4;
        global $answer;

        $servername = "146.245.252.140";
        $username = "";
        $password = "";
        $db = "ivruan_db";

        $conn = new mysqli($servername, $username, $password, $db);
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        $result = $conn->query($query)->fetch_assoc();
        $question = $result["question"];
        $option1 = $result["option1"];
        $option2 = $result["option2"];
        $option3 = $result["option3"];
        $option4 = $result["option4"];
        $answer = $result["answer"];
        $conn->close();
      }
      
      $numQuestions = 50;
      $arr = array();
      for($i = 1; $i <= 8; $i++){
        $temp = rand(1,$numQuestions);
        while(in_array($temp, $arr))
          $temp = rand(1,$numQuestions);
        $arr[$i-1] = $temp;
      }  

    ?>
    <script>
      var correct = [];
      var answers = [];
      function initialize(){

        document.getElementById("q1").innerHTML = "1. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[0]"); echo json_encode($question);?>;
        document.getElementById("o11").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o12").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o13").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o14").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q2").innerHTML = "2. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[1]"); echo json_encode($question);?>;
        document.getElementById("o21").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o22").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o23").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o24").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q3").innerHTML = "3. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[2]"); echo json_encode($question);?>;
        document.getElementById("o31").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o32").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o33").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o34").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q4").innerHTML = "4. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[3]"); echo json_encode($question);?>;
        document.getElementById("o41").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o42").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o43").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o44").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q5").innerHTML = "5. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[4]"); echo json_encode($question);?>;
        document.getElementById("o51").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o52").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o53").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o54").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q6").innerHTML = "6. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[5]"); echo json_encode($question);?>;
        document.getElementById("o61").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o62").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o63").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o64").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q7").innerHTML = "7. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[6]"); echo json_encode($question);?>;
        document.getElementById("o71").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o72").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o73").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o74").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);

        document.getElementById("q8").innerHTML = "8. " + <?php fetch("SELECT * FROM quiz WHERE ID = $arr[7]"); echo json_encode($question);?>;
        document.getElementById("o81").innerHTML = <?php echo json_encode($option1);?>;
        document.getElementById("o82").innerHTML = <?php echo json_encode($option2);?>;
        document.getElementById("o83").innerHTML = <?php echo json_encode($option3);?>;
        document.getElementById("o84").innerHTML = <?php echo json_encode($option4);?>;
        correct.push(<?php echo json_encode($answer);?>);
      }

      function choose(index, choice){
        answers[index] = choice;
      } 

      function submit(){
        var score = 0;
        for(var i = 0; i < correct.length; i++){
          if(answers[i] == correct[i]){
            score++;
            document.getElementById("o" + (i+1) + correct[i]).style.color = 'limegreen';
            document.getElementById('result-' + (i+1) + correct[i]).style.color = 'limegreen';
            document.getElementById('result-' + (i+1) + correct[i]).innerHTML = '(Correct!)';
          }
          else{
            if(answers[i] != undefined){
              document.getElementById("o" + (i+1) + answers[i]).style.color = 'red';
              document.getElementById('result-' + (i+1) + answers[i]).style.color = 'red';
              document.getElementById('result-' + (i+1) + answers[i]).innerHTML = '(Incorrect!)';
            }
            document.getElementById("o" + (i+1) + correct[i]).style.color = 'limegreen';
          }
        }

        document.getElementById("subbut").disabled = true;
        document.getElementById("subbut").style.color = "grey";
        document.getElementById("subbut").style.cursor = "not-allowed";

        var temp;
        for(var j = 11; j <= 84; j++){
          temp = "option-" + j;
          document.getElementById(temp).disabled = true;
          if(j % 10 == 4)
            j+=6;
        }
        
        document.getElementById("res").innerHTML = "You answered " + score + " out of 8 questions correctly.";
        //alert("You answered " + score + " out of 8 questions correctly.");
      } 
    </script>
    <script src="https://code.jquery.com/jquery-1.22.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  </body>
</html>