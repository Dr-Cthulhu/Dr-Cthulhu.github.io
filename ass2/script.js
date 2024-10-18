function clearFields() {
  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "holder";
  document.getElementById("autodetect").checked = false;
  console.log("cleared boo")
}

async function fetchBasicWeather(street, city, state) {
  const response = await fetch('http://127.0.0.1:5000/basicweather.json', street=)
}

function submitAddress(event) {
  event.preventDefault();
  console.log('submitting...')

  let street = document.getElementById("street").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  if (street == null) {
    document.getElementById("streettooltip").visibility = "visible";
  } else if (city == "") {
    // document.getElementById("streettooltip").visibility = "visible";
  } else if (state == "holder") {
    // document.getElementById("streettooltip").visibility = "visible";
  } else {
    // document.getElementById("basicinfo").innerHTML = "ok";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         document.getElementById("basicinfo").innerHTML = xhttp.responseText;
      }
    };
    addressquery = 'http://127.0.0.1:5000/basicweather.json?street=' + street + '&city=' + city + '&state=' + state
    xhttp.open("GET",addressquery, true);
    xhttp.send();
  }
}

window.onload = function() {
  var searchForm = document.getElementById("searchform");
  searchForm.addEventListener("submit", submitAddress);
}