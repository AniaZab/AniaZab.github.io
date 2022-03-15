let numberOfClicks = 0;
function Wstaw(buttonId) {
  if (document.getElementById(buttonId).innerHTML.value == "0") {
	  if(numberOfClicks % 2 == 0){
		  document.getElementById(buttonId).innerHTML.value = "X";
	  }
	  else{
		  document.getElementById(buttonId).innerHTML.value = "O";
	  }
	  numberOfClicks+=1;
	}
}
