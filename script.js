document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
//Objective 1//
var button = document.createElement("button");
button.innerHTML = "ALERT";
var hello = document.getElementsByClassName("hello")[0];
hello.appendChild(button);
button.addEventListener ("click", function() {
  alert("Easy!");
});

//Objective 2//
var message = document.getElementById("message");
document.getElementById("myButton").addEventListener("click", function() {
    alert( message.value );
});

//Objective 3//
var div = document.getElementById( 'mydiv' );
div.onmouseover = function() {
  div.style.backgroundColor = 'green';
};
div.onmouseout = function() {
  div.style.backgroundColor = 'yellow';
};

//Objective 4//
document.getElementById('name').onclick = randomize;   
     function randomize() {
        
        return false;
    }   
function randomize() {
  document.getElementById('name').style.color = randomColors();
}
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//Objective 5//
var mybtn = document.createElement("button");
mybtn.innerHTML = "Generate Name";
var genName = document.getElementsByClassName("addName")[0];
genName.appendChild(mybtn);
mybtn.addEventListener ("click", function() {
   var p = document.getElementById("JB");
  document.getElementById("JB").innerText="JB!";
  genName.appendChild(p);
});

//Objective 6//
var friends = ['adrian','dylan','nequil','markus','lance','chance','dominik','chris','greg','kristine',]
    var i = 1;
    var list = document.getElementById("list");
    var add = document.getElementById('addElem');
    add.addEventListener('click', function() {
    var itemsByTagName = document.getElementsByTagName("li");
    list.innerHTML += '<li>item ' + i++ + '</li>'
});
  });