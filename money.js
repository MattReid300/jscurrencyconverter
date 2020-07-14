function convert() {
  let thing = document.getElementById("listPicker");
  let secondThing = document.getElementById("secondListPicker");
  let listPicker = thing.options[thing.selectedIndex].value;
  let secondListPicker = secondThing.options[secondThing.selectedIndex].value;
  let result = 0;
  let amountInput = document.getElementById("inputNumber").value;

  if(listPicker == secondListPicker) {
    document.getElementById("answer").innerHTML = amountInput;
  }

  // EUROS
  if (listPicker == "1" && secondListPicker == "2") {
    let result = (amountInput * 1.09).toFixed(2) + " dollars";
    document.getElementById("answer").innerHTML = result;
  } else if (listPicker == "1" && secondListPicker == "3") {
    let result = (amountInput / 1.11).toFixed(2) + " pounds";
    document.getElementById("answer").innerHTML = result;

    // DOLLARS
  } else if (listPicker == "2" && secondListPicker == "1") {
    let result = (amountInput / 1.09).toFixed(2) + " euros";
    document.getElementById("answer").innerHTML = result;
  } else if (listPicker == "2" && secondListPicker == "3") {
    let result = (amountInput / 1.26).toFixed(2) + " pounds";
    document.getElementById("answer").innerHTML = result;

    // POUNDS
  } else if (listPicker == "3" && secondListPicker == "1") {
    let result = (amountInput * 1.11).toFixed(2) + " euros";
    document.getElementById("answer").innerHTML = result;
  } else if (listPicker == "3" && secondListPicker == "2") {
    let result = (amountInput * 1.26).toFixed(2) + " dollars";
    document.getElementById("answer").innerHTML = result;
  }
}
