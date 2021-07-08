function convert() {

  let amountInput = document.getElementById("inputNumber").value;
  let base = document.getElementById("from").value;
  let end = document.getElementById("to").value;

  //   // EUROS
  //   if (listPicker == "1" && secondListPicker == "2") {
  //     apireq("EUR", "EUR", "POUND");
  //   } else if (listPicker == "1" && secondListPicker == "3") {
  //     apireq("USD", "GBP", "POUND");
  //     // DOLLARS
  //   } else if (listPicker == "2" && secondListPicker == "1") {
  //     apireq("USD", "GBP", "POUND");
  //   } else if (listPicker == "2" && secondListPicker == "3") {
  //     apireq("USD", "GBP", "POUND");
  //     // POUNDS
  //   } else if (listPicker == "3" && secondListPicker == "1") {
  //     apireq("USD", "GBP", "POUND");
  //   } else if (listPicker == "3" && secondListPicker == "2") {
  //     apireq("USD", "GBP", "POUND");
  //   }
  // }

  try {
    return axios.get("https://api.exchangerate.host/latest", {
      params: {
        base
      }
    }).then(resp => {
      const OPERATORS = {
        'EURGBP': (a,b) => a * b,
        'EURGBP': (a,b) => a * b,
        'EURGBP': (a,b) => a * b,
        'EURGBP': (a,b) => a * b,
      }
      let operand = resp.data.rates[end]
      let result = OPERATORS[base+end] ? OPERATORS[base+end](amountInput, operand) : amountInput
      document.getElementById("answer").innerHTML = result;
    })
  } catch (error) {
    console.error(error)
  }
}