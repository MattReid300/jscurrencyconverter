const api = "https://api.exchangerate.host";
document.addEventListener("DOMContentLoaded", function () {
  const from = document.getElementById("from")
  const to = document.getElementById("to")
  axios.get(api + "/symbols")
    .then(({
      data
    }) => {
      for (const key in data.symbols) {
        from.innerHTML += `<option value="${key}">${data.symbols[key].description}</option>`
        to.innerHTML += `<option value="${key}">${data.symbols[key].description}</option>`
      }
      from.value = "EUR";
      to.value = "USD";
    })
  let keys = Object.keys(localStorage);
  for (let e=0; e < keys.length; e++) {
    let newer = JSON.parse(localStorage.getItem(keys[e]));
    document.getElementById("recent").innerHTML += `<li>${Object.values(newer)}</li>`
  }
})

function convert() {

  let amountInput = document.getElementById("inputNumber").value;
  let base = document.getElementById("from").value;
  let end = document.getElementById("to").value;
  let answer = document.getElementById("answer");

  if (base === end) {
    let result = amountInput;
    answer.innerHTML = result
  } else {
    axios.get(api + "/latest", {
      params: {
        base
      }
    }).then(resp => {
      let operand = resp.data.rates[end]
      let result = amountInput * operand;
      answer.innerHTML = result.toFixed(4);



      const recent = {
        name: "From " + base + " to " + end,
        date: new Intl.DateTimeFormat(navigator.language).format(new Date())
      }
      let code = Math.floor(Math.random() * 1000)
      let conversion = "Conversion " + code;
      localStorage.setItem(conversion, JSON.stringify(recent))
      const item = JSON.parse(localStorage.getItem(conversion))
      console.log(item);
      document.getElementById("recent").innerHTML += `<li>${Object.values(item).join(' on ')}</li>`;
    }).catch((error) => {
      console.error(error)
    })
  }
}

function clearAll() {
  window.localStorage.clear();
  document.getElementById("recent").innerHTML = "";
}