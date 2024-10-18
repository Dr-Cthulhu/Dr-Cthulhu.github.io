const GOOGLE_API_KEY = 'AIzaSyBV7fyGRurFLSu2rTY8IEG574RcpobaaCk'

const weathercodes = {
  '1000': {'desc': 'Clear', 'icon': 'clear_day.svg'},
  '1100': {'desc': 'Mostly Clear', 'icon': 'mostly_clear_day.svg'},
  '1101': {'desc': 'Partly Cloudy', 'icon': 'partly_cloudy_day.svg'},
  '1102': {'desc': 'Mostly Cloudy', 'icon': 'mostly_cloudy.svg'},
  '1001': {'desc': 'Cloudy', 'icon': 'cloudy.svg'},
  '2100': {'desc': 'Light Fog', 'icon': 'fog_light.svg'},
  '2000': {'desc': 'Fog', 'icon': 'fog.svg'},
  '4000': {'desc': 'Drizzle', 'icon': 'drizzle.svg'},
  '4200': {'desc': 'Light Rain', 'icon': 'rain_light.svg'},
  '4001': {'desc': 'Rain', 'icon': 'rain.svg'},
  '4201': {'desc': 'Heavy Rain', 'icon': 'rain_heavy.svg'},
  '5001': {'desc': 'Flurries', 'icon': 'flurries.svg'},
  '5100': {'desc': 'Light Snow', 'icon': 'snow_light.svg'},
  '5000': {'desc': 'Snow', 'icon': 'snow.svg'},
  '5101': {'desc': 'Heavy Snow', 'icon': 'snow_heavy.svg'},
  '6000': {'desc': 'Freezing Drizzle', 'icon': 'freezing_drizzle.svg'},
  '6200': {'desc': 'Light Freezing Rain', 'icon': 'freezing_rain_light.svg'},
  '6001': {'desc': 'Freezing Rain', 'icon': 'freezing_rain.svg'},
  '6201': {'desc': 'Heavy Freezing Rain', 'icon': 'freezing_rain_heavy.svg'},
  '7102': {'desc': 'Light Ice Pellets', 'icon': 'ice_pellets_light.svg'},
  '7000': {'desc': 'Ice Pellets', 'icon': 'ice_pellets.svg'},
  '7101': {'desc': 'Heavy Ice Pellets', 'icon': 'ice_pellets_heavy.svg'},
  '8000': {'desc': 'Thunderstorm', 'icon': 'tstorm.svg'},
}

const dayheaders = ["Date", "Status", "Temp High", "Temp Low", "Wind Speed"]

const precipitationTypes = ["N/A", "Rain", "Snow", "Freezing Rain", "Ice Pellets"]

const holder_response = {
  "data": {
    "timelines": [
      {
        "endTime": "2024-10-22T06:00:00-07:00",
        "intervals": [
          {
            "startTime": "2024-10-16T06:00:00-07:00",
            "values": {
              "cloudCover": 100,
              "humidity": 87.49,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 29.97,
              "sunriseTime": "2024-10-16T13:58:00Z",
              "sunsetTime": "2024-10-17T01:18:00Z",
              "temperature": 68.22,
              "temperatureMax": 68.22,
              "temperatureMin": 59.67,
              "uvIndex": 4,
              "visibility": 9.94,
              "weatherCode": 1001,
              "windDirection": 155.19,
              "windSpeed": 5.31
            }
          },
          {
            "startTime": "2024-10-17T06:00:00-07:00",
            "values": {
              "cloudCover": 100,
              "humidity": 91.86,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 29.94,
              "sunriseTime": "2024-10-17T13:59:00Z",
              "sunsetTime": "2024-10-18T01:16:00Z",
              "temperature": 68,
              "temperatureMax": 68,
              "temperatureMin": 55.34,
              "uvIndex": 2,
              "visibility": 9.94,
              "weatherCode": 1001,
              "windDirection": 149.37,
              "windSpeed": 7.63
            }
          },
          {
            "startTime": "2024-10-18T06:00:00-07:00",
            "values": {
              "cloudCover": 69.53,
              "humidity": 90.11,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 30.03,
              "sunriseTime": "2024-10-18T14:00:00Z",
              "sunsetTime": "2024-10-19T01:15:00Z",
              "temperature": 72.53,
              "temperatureMax": 72.53,
              "temperatureMin": 52.51,
              "uvIndex": 5,
              "visibility": 9.94,
              "weatherCode": 1000,
              "windDirection": 168.09,
              "windSpeed": 16.77
            }
          },
          {
            "startTime": "2024-10-19T06:00:00-07:00",
            "values": {
              "cloudCover": 55.47,
              "humidity": 53.58,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 30.1,
              "sunriseTime": "2024-10-19T14:01:00Z",
              "sunsetTime": "2024-10-20T01:14:00Z",
              "temperature": 81.54,
              "temperatureMax": 81.54,
              "temperatureMin": 52.43,
              "uvIndex": 5,
              "visibility": 14.58,
              "weatherCode": 1000,
              "windDirection": 192.06,
              "windSpeed": 13.19
            }
          },
          {
            "startTime": "2024-10-20T06:00:00-07:00",
            "values": {
              "cloudCover": 6.64,
              "humidity": 30.44,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 30.08,
              "sunriseTime": "2024-10-20T14:01:00Z",
              "sunsetTime": "2024-10-21T01:13:00Z",
              "temperature": 79.99,
              "temperatureMax": 79.99,
              "temperatureMin": 65.71,
              "uvIndex": 5,
              "visibility": 15,
              "weatherCode": 1000,
              "windDirection": 166.9,
              "windSpeed": 10.03
            }
          },
          {
            "startTime": "2024-10-21T06:00:00-07:00",
            "values": {
              "cloudCover": 100,
              "humidity": 30.19,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 30.01,
              "sunriseTime": "2024-10-21T14:02:00Z",
              "sunsetTime": "2024-10-22T01:12:00Z",
              "temperature": 79.26,
              "temperatureMax": 79.26,
              "temperatureMin": 67.81,
              "visibility": 15,
              "weatherCode": 1001,
              "windDirection": 179.91,
              "windSpeed": 9.27
            }
          },
          {
            "startTime": "2024-10-22T06:00:00-07:00",
            "values": {
              "cloudCover": 84.47,
              "humidity": 34.35,
              "precipitationProbability": 0,
              "precipitationType": 0,
              "pressureSeaLevel": 30.03,
              "sunriseTime": "2024-10-22T14:03:00Z",
              "sunsetTime": "2024-10-23T01:11:00Z",
              "temperature": 80.37,
              "temperatureMax": 80.37,
              "temperatureMin": 68.69,
              "visibility": 15,
              "weatherCode": 1000,
              "windDirection": 195.24,
              "windSpeed": 9.36
            }
          }
        ],
        "startTime": "2024-10-16T06:00:00-07:00",
        "timestep": "1d"
      }
    ]
  }
}

var curLocation = '';
var chartsOpen = false;

function clearFields() {
  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "holder";
  document.getElementById("autodetect").checked = false;
  console.log("cleared boo");
}

async function fetchGeoLocation(street, city, state) {
  console.log('please why');
  let address = street + ',' + city + ',' + state;
  let querystring = new URLSearchParams({
    address: address,
    key: GOOGLE_API_KEY,
  }).toString();
  try {
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?' + querystring, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log('whatever');
    console.log(json.results[0].geometry.location);
    // return json;
    return json.results[0].geometry.location;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchBasicWeather(location) {
  let querystring = new URLSearchParams({
    location: location,
  }).toString();
  try {
    const response = await fetch('http://localhost:8989/basicweather.json?' + querystring, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchTempRangeWeather() {
  console.log(Date.now());
  let querystring = new URLSearchParams({
    location: curLocation,
    startTime: Date.now(),
  }).toString();
  try {
    const response = await fetch('http://localhost:8989/temperaturerange.json?' + querystring, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchHourlyWeather() {
  console.log(Date.now());
  let querystring = new URLSearchParams({
    location: curLocation,
    startTime: Date.now(),
  }).toString();
  try {
    const response = await fetch('http://localhost:8989/hourlyweather.json?' + querystring, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

function getHourRep(datestring) {
  let date = new Date(datestring);
  return date.toLocaleTimeString("en-US", {hour: "numeric"}).replace(/\s/g, "");
}

function getDateRep(datestring) {
  let date = new Date(datestring);
  let dateOptions = {weekday: "long", day: "numeric", month: "short", year: "numeric"};
  return date.toLocaleDateString("en-GB", dateOptions);
}

function dayClickListener(isostring, vals) {
  document.getElementById("date_detail").innerHTML = getDateRep(isostring);
  document.getElementById("weather_detail").innerHTML = weathercodes[vals.weatherCode].desc;
  document.getElementById("hilo_detail").innerHTML = vals.temperatureMax.toString() + "°F/" + vals.temperatureMin.toString() + "°F";
  document.getElementById("weather_detail_icon").src = "static/images/weather_symbols/" + weathercodes[vals.weatherCode].icon;

  document.getElementById("precipitation_detail").innerHTML = precipitationTypes[vals.precipitationType];
  document.getElementById("rain_detail").innerHTML = vals.precipitationProbability.toString() + "%";
  document.getElementById("wind_detail").innerHTML = vals.windSpeed.toString() + " mph";
  document.getElementById("humidity_detail").innerHTML = vals.humidity.toString() + "%";
  document.getElementById("visibility_detail").innerHTML = vals.visibility.toString() + " mi";
  document.getElementById("sunrise_detail").innerHTML = getHourRep(vals.sunriseTime) + "/" + getHourRep(vals.sunsetTime);
  
  fetchTempRangeWeather().then(data => {
    // do something
  });
  fetchHourlyWeather().then(data => {
    console.log(data);
    window.meteogram = new Meteogram(data, 'hourly_container');
  });
}

function showWeekInfo(data) {
  let intervals = data.data.timelines[0].intervals;
  let todayvals = intervals[0].values;
  document.getElementById("weather_today_icon").src = "static/images/weather_symbols/" + weathercodes[todayvals.weatherCode].icon;
  document.getElementById("weather_today_desc").innerHTML = weathercodes[todayvals.weatherCode].desc;
  document.getElementById("temp_today").innerHTML = Math.round(todayvals.temperature).toString() + "°";

  document.getElementById("humidity_desc").innerHTML = Math.round(todayvals.humidity).toString() + "%";
  document.getElementById("pressure_desc").innerHTML = todayvals.pressureSeaLevel.toString() + "inHg";
  document.getElementById("windspeed_desc").innerHTML = todayvals.windSpeed.toString() + "mph";
  document.getElementById("visibility_desc").innerHTML = todayvals.visibility.toString() + "mi";
  document.getElementById("cloudcover_desc").innerHTML = Math.round(todayvals.cloudCover).toString() + "%";
  document.getElementById("uvlevel_desc").innerHTML = todayvals.uvIndex.toString();

  let daytable = document.getElementById("daytable");
  daytable.innerHTML = "";

  let headerrow = document.createElement("tr");
  for (var i = 0; i < 5; i++) {
    let hd = document.createElement("th");
    hd.innerHTML = dayheaders[i];
    headerrow.appendChild(hd);
  }
  daytable.appendChild(headerrow);

  console.log(intervals.length);
  for (var j = 0; j<intervals.length; j++) {
    let row = document.createElement("tr");
    row.className = "clickablerow";

    let el = document.createElement("td");
    let time = intervals[j].startTime;
    el.innerHTML = getDateRep(intervals[j].startTime);
    row.appendChild(el);

    let vals = intervals[j].values;
    el = document.createElement("td");
    let statimg = document.createElement("img");
    statimg.className = "inline";
    statimg.src = "static/images/weather_symbols/" + weathercodes[vals.weatherCode].icon;
    statimg.style.width = "60px";
    el.appendChild(statimg);
    let statdesc = document.createElement("div");
    statdesc.className = "inline";
    statdesc.innerHTML = weathercodes[vals.weatherCode].desc;
    statdesc.style.verticalAlign = "150%";
    statdesc.style.marginLeft = "10px";
    el.appendChild(statdesc);
    row.appendChild(el);

    el = document.createElement("td");
    el.innerHTML = vals.temperatureMax;
    row.appendChild(el);

    el = document.createElement("td");
    el.innerHTML = vals.temperatureMin;
    row.appendChild(el);

    el = document.createElement("td");
    el.innerHTML = vals.windSpeed;
    row.appendChild(el);

    row.addEventListener("click",() => { dayClickListener(time, vals); });

    console.log(row);
    daytable.appendChild(row);
  }
}

function createIcon(key, dict) {
  let description = dict[key].desc;
  let icon = dict[key].icon;
}

function submitAddress() {
  console.log('submitting...');

  let street = document.getElementById("street").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  if (street == "") {
    document.getElementById("streettooltip").style.visibility = "visible";
    console.log("no street");
  } else if (city == "") {
    console.log("no city");
    // document.getElementById("streettooltip").visibility = "visible";
  } else if (state == "holder") {
    console.log("no state");
    // document.getElementById("streettooltip").visibility = "visible";
  } else {
    console.log("is it here?");
    fetchGeoLocation(street, city, state).then(response => {
      let location = response.lat + ',' + response.lng;
      console.log(location);
      curLocation = location;
      // fetchBasicWeather(location).then(data => {
        showWeekInfo(holder_response);
      // });
    });
    // console.log(location);
    // console.log('GEOLOCATION: ' + location.stringify());

    // fetchBasicWeather(street, city, state, false)
  }
}

// window.onload = function() {
//   var searchForm = document.getElementById("searchform");
//   searchForm.addEventListener("submit", submitAddress);
// }