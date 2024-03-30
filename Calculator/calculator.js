function display(value){
    document.getElementById("result").value+=value;
  }

const validateInputs = function(e) {
var reg = /^\d+$/;
if(!reg.test(e)){
   alert("Invalid input! Please enter Number")
}
}

function backspace() {
    var p = document.getElementById("result").value;
    var q = p.substring(0,p.length-1);
    document.getElementById("result").value=q;
}
  function clearScreen() {
      document.getElementById("result").value = "";
  }
  
  function calculate() {
      var p = document.getElementById("result").value;
      var q = eval(p);
      document.getElementById("result").value=q;
  }
