
var practiceSentence = "Welcome to Type Master.";

var sentenceElement = document.getElementById("sentence");
var typingInput = document.getElementById("typing-input");
var restartButton = document.getElementById("restart-button");
var messageElement = document.getElementById("message");


function showSentence() {
  sentenceElement.innerHTML = "";

  for (var index = 0; index < practiceSentence.length; index++) {
    var characterSpan = document.createElement("span");
    characterSpan.textContent = practiceSentence[index];
    sentenceElement.appendChild(characterSpan);
  }
}


function checkTyping() {
  var typedText = typingInput.value;
  var characterSpans = sentenceElement.querySelectorAll("span");

  for (var index = 0; index < characterSpans.length; index++) {
    characterSpans[index].className = "";

    if (index < typedText.length) {
      if (typedText[index] === practiceSentence[index]) {
        characterSpans[index].className = "correct";
      } else {
        characterSpans[index].className = "incorrect";
      }
    } else if (index === typedText.length) {
      characterSpans[index].className = "current";
    }
  }

  if (typedText === practiceSentence) {
    messageElement.textContent = "You finished!";
  } else {
    messageElement.textContent = "";
  }
}


typingInput.addEventListener("input", function () {
  if (typingInput.value.length > practiceSentence.length) {
    typingInput.value = typingInput.value.slice(0, practiceSentence.length);
  }

  checkTyping();
});


restartButton.addEventListener("click", function () {
  typingInput.value = "";
  messageElement.textContent = "";
  checkTyping();
  typingInput.focus();
});

showSentence();
checkTyping();
typingInput.focus();