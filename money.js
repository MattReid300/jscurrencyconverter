document.addEventListener("DOMContentLoaded", function () {
  axios.get("https://api.exchangerate.host/latest")
    .then(response => {
      console.log(response)
    })
})

function convert() {

  let amountInput = document.getElementById("inputNumber").value;
  let base = document.getElementById("from").value;
  let end = document.getElementById("to").value;

  if (base == end) {
    let result = amountInput;
    document.getElementById("answer").innerHTML = result
  } else {
    try {
      return axios.get("https://api.exchangerate.host/latest", {
        params: {
          base
        }
      }).then(resp => {
        const OPERATORS = {
          'EURUSD': (a, b) => a * b,
          'EURGBP': (a, b) => a * b,
          'USDEUR': (a, b) => a * b,
          'USDGBP': (a, b) => a * b,
          'GBPEUR': (a, b) => a * b,
          'GBPUSD': (a, b) => a * b,
        }
        let operand = resp.data.rates[end]
        let result = OPERATORS[base + end] ? OPERATORS[base + end](amountInput, operand) : amountInput
        document.getElementById("answer").innerHTML = result.toFixed(4);
      })
    } catch (error) {
      console.error(error)
    }
  }
}