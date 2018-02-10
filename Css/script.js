// quiz begins; no answers correct
var correct = 0;

//ask questions
var answer1 = prompt("Name a programing language that's also a gem");
if (answer1.toUpperCase() === 'Ruby') {
  correct +=1
}
var answer2 = prompt("Name a programing language that's also a snake")
if (answer2.toUpperCase === 'Python') {
  correct +=1
}
var answer3 = prompt("What language adds color to a website")
if (answer3.toUpperCase === 'CSS') {
  correct +=1
}
var answer4 = prompt("What Language adds interactivity to a webste")
if (answer4.toUpperCase === 'Javascript') {
  correct +=1
}
var answer5 = prompt("What language adds content to a website")
if (answer5.toUpperCase === 'HTML') {
  correct +=1
}

//output results
document.write('<p>You got' + correct + 'out of 5 questions correct.</p>')

//output rank
if (correct === 5) {
  document.write("<p><strong>You earned a gold crown!</strong></p>"
} else if (correct >= 3) {
    document.write("<p><strong>You got a silver crown!</strong></p>")
  } else if (correct <= 2) {
   document.write("<p><strong>No crown for you!</strong></p>")
  }
