$(function () {

  $(".numbers-row").append('<div class="inc button">+</div>');

  $(".button").on("click", function () {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0){
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }

    }

    $button.parent().find("input").val(newVal);

  });

});
function addNumbers(){
  const body = document.getElementsByTagName('body')[0];
  const bgNbreEleve = "linear-gradient(-255deg, #231557 0%, #44107A 29%, #ff1361 67%, #fff800 100%)";
  var number;
  var result = "";
  number = Number(document.getElementById("french-hens").value);
  for (var i = 1; i <= 11; i++) {
    result = result + "<p>" + number + "*" + i + "=" + number * i + "</p>";
  }
  if (number >= 10) {
    body.style.backgroundImage = bgNbreEleve;
  }
  document.getElementById("result").innerHTML = result;
}
function Effacer() {
  document.getElementById('french-hens').value = '';
  document.getElementById('result').innerHTML = '';
}
// function btnDisable(){
//   var button = document.querySelector(".boutton");
//   if (valeur>0){
//     // document.getElementById("result").innerHTML="";
//     document.querySelector('.boutton').disabled = false;
//     document.querySelector('.button').disabled = false;

// }else if (valeur<0){
//     document.querySelector('.boutton').disabled = true;
//     document.querySelector('.button').disabled = true;
// }
// }


