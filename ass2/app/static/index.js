const GOOGLE_API_KEY = 'AIzaSyBV7fyGRurFLSu2rTY8IEG574RcpobaaCk'
const IPINFO_TOKEN = '513c1bdb80831d'

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

const temprange_response = {
  "data": {
    "timelines": [
      {
        "endTime": "2024-10-22T06:00:00-07:00",
        "intervals": [
          {
            "startTime": "2024-10-17T06:00:00-07:00",
            "values": {
              "temperatureMax": 71.6,
              "temperatureMin": 56.12
            }
          },
          {
            "startTime": "2024-10-18T06:00:00-07:00",
            "values": {
              "temperatureMax": 73.4,
              "temperatureMin": 54.27
            }
          },
          {
            "startTime": "2024-10-19T06:00:00-07:00",
            "values": {
              "temperatureMax": 82.69,
              "temperatureMin": 53.52
            }
          },
          {
            "startTime": "2024-10-20T06:00:00-07:00",
            "values": {
              "temperatureMax": 83.93,
              "temperatureMin": 57.88
            }
          },
          {
            "startTime": "2024-10-21T06:00:00-07:00",
            "values": {
              "temperatureMax": 78.31,
              "temperatureMin": 67.81
            }
          },
          {
            "startTime": "2024-10-22T06:00:00-07:00",
            "values": {
              "temperatureMax": 80.49,
              "temperatureMin": 68.11
            }
          }
        ],
        "startTime": "2024-10-17T06:00:00-07:00",
        "timestep": "1d"
      }
    ]
  }
}

const hourly_response = {
  "data": {
    "timelines": [
      {
        "endTime": "2024-10-22T09:00:00-07:00",
        "intervals": [
          {
            "startTime": "2024-10-17T09:00:00-07:00",
            "values": {
              "humidity": 76,
              "pressureSeaLevel": 29.87,
              "temperature": 65.97,
              "windDirection": 159.81,
              "windSpeed": 1.82
            }
          },
          {
            "startTime": "2024-10-17T10:00:00-07:00",
            "values": {
              "humidity": 74,
              "pressureSeaLevel": 29.88,
              "temperature": 66.76,
              "windDirection": 227.38,
              "windSpeed": 3.36
            }
          },
          {
            "startTime": "2024-10-17T11:00:00-07:00",
            "values": {
              "humidity": 71,
              "pressureSeaLevel": 29.86,
              "temperature": 66.54,
              "windDirection": 212.69,
              "windSpeed": 4.05
            }
          },
          {
            "startTime": "2024-10-17T12:00:00-07:00",
            "values": {
              "humidity": 73,
              "pressureSeaLevel": 29.88,
              "temperature": 67.33,
              "windDirection": 225,
              "windSpeed": 4.19
            }
          },
          {
            "startTime": "2024-10-17T13:00:00-07:00",
            "values": {
              "humidity": 66,
              "pressureSeaLevel": 29.85,
              "temperature": 69.58,
              "windDirection": 244,
              "windSpeed": 7.83
            }
          },
          {
            "startTime": "2024-10-17T14:00:00-07:00",
            "values": {
              "humidity": 64,
              "pressureSeaLevel": 29.84,
              "temperature": 69.58,
              "windDirection": 232,
              "windSpeed": 6.43
            }
          },
          {
            "startTime": "2024-10-17T15:00:00-07:00",
            "values": {
              "humidity": 52,
              "pressureSeaLevel": 29.79,
              "temperature": 71.6,
              "windDirection": 189.81,
              "windSpeed": 4.19
            }
          },
          {
            "startTime": "2024-10-17T16:00:00-07:00",
            "values": {
              "humidity": 61,
              "pressureSeaLevel": 29.81,
              "temperature": 69.8,
              "windDirection": 220.88,
              "windSpeed": 6.99
            }
          },
          {
            "startTime": "2024-10-17T17:00:00-07:00",
            "values": {
              "humidity": 72.55,
              "pressureSeaLevel": 29.83,
              "temperature": 66.3,
              "windDirection": 256,
              "windSpeed": 8.54
            }
          },
          {
            "startTime": "2024-10-17T18:00:00-07:00",
            "values": {
              "humidity": 76.97,
              "pressureSeaLevel": 29.83,
              "temperature": 64.4,
              "windDirection": 256,
              "windSpeed": 8.02
            }
          },
          {
            "startTime": "2024-10-17T19:00:00-07:00",
            "values": {
              "humidity": 82,
              "pressureSeaLevel": 29.83,
              "temperature": 63.2,
              "windDirection": 250.06,
              "windSpeed": 6.15
            }
          },
          {
            "startTime": "2024-10-17T20:00:00-07:00",
            "values": {
              "humidity": 86,
              "pressureSeaLevel": 29.86,
              "temperature": 61.93,
              "windDirection": 220.7,
              "windSpeed": 4.51
            }
          },
          {
            "startTime": "2024-10-17T21:00:00-07:00",
            "values": {
              "humidity": 88,
              "pressureSeaLevel": 29.86,
              "temperature": 60.8,
              "windDirection": 121.28,
              "windSpeed": 3.86
            }
          },
          {
            "startTime": "2024-10-17T22:00:00-07:00",
            "values": {
              "humidity": 88.66,
              "pressureSeaLevel": 29.88,
              "temperature": 60.63,
              "windDirection": 96.14,
              "windSpeed": 4.07
            }
          },
          {
            "startTime": "2024-10-17T23:00:00-07:00",
            "values": {
              "humidity": 88.66,
              "pressureSeaLevel": 29.88,
              "temperature": 60.65,
              "windDirection": 102.63,
              "windSpeed": 4.19
            }
          },
          {
            "startTime": "2024-10-18T00:00:00-07:00",
            "values": {
              "humidity": 88.66,
              "pressureSeaLevel": 29.88,
              "temperature": 60.5,
              "windDirection": 97.03,
              "windSpeed": 5.07
            }
          },
          {
            "startTime": "2024-10-18T01:00:00-07:00",
            "values": {
              "humidity": 90.66,
              "pressureSeaLevel": 29.86,
              "temperature": 58.98,
              "windDirection": 74.06,
              "windSpeed": 4.91
            }
          },
          {
            "startTime": "2024-10-18T02:00:00-07:00",
            "values": {
              "humidity": 91.19,
              "pressureSeaLevel": 29.86,
              "temperature": 58.22,
              "windDirection": 86.35,
              "windSpeed": 5.59
            }
          },
          {
            "startTime": "2024-10-18T03:00:00-07:00",
            "values": {
              "humidity": 92,
              "pressureSeaLevel": 29.88,
              "temperature": 57.26,
              "windDirection": 80.57,
              "windSpeed": 5.33
            }
          },
          {
            "startTime": "2024-10-18T04:00:00-07:00",
            "values": {
              "humidity": 92,
              "pressureSeaLevel": 29.88,
              "temperature": 56.12,
              "windDirection": 82.22,
              "windSpeed": 5.14
            }
          },
          {
            "startTime": "2024-10-18T05:00:00-07:00",
            "values": {
              "humidity": 84.45,
              "pressureSeaLevel": 29.88,
              "temperature": 56.3,
              "windDirection": 50.25,
              "windSpeed": 6.04
            }
          },
          {
            "startTime": "2024-10-18T06:00:00-07:00",
            "values": {
              "humidity": 90,
              "pressureSeaLevel": 29.91,
              "temperature": 56.45,
              "windDirection": 63.43,
              "windSpeed": 6.48
            }
          },
          {
            "startTime": "2024-10-18T07:00:00-07:00",
            "values": {
              "humidity": 89.59,
              "pressureSeaLevel": 29.93,
              "temperature": 56.49,
              "windDirection": 47.72,
              "windSpeed": 5.71
            }
          },
          {
            "startTime": "2024-10-18T08:00:00-07:00",
            "values": {
              "humidity": 81.96,
              "pressureSeaLevel": 29.94,
              "temperature": 57.6,
              "windDirection": 62.17,
              "windSpeed": 5.24
            }
          },
          {
            "startTime": "2024-10-18T09:00:00-07:00",
            "values": {
              "humidity": 78.51,
              "pressureSeaLevel": 29.97,
              "temperature": 62.6,
              "windDirection": 81.03,
              "windSpeed": 5.48
            }
          },
          {
            "startTime": "2024-10-18T10:00:00-07:00",
            "values": {
              "humidity": 73.26,
              "pressureSeaLevel": 30,
              "temperature": 65.3,
              "windDirection": 108.13,
              "windSpeed": 4.85
            }
          },
          {
            "startTime": "2024-10-18T11:00:00-07:00",
            "values": {
              "humidity": 62.07,
              "pressureSeaLevel": 30,
              "temperature": 69.03,
              "windDirection": 165.08,
              "windSpeed": 5.03
            }
          },
          {
            "startTime": "2024-10-18T12:00:00-07:00",
            "values": {
              "humidity": 51.55,
              "pressureSeaLevel": 30,
              "temperature": 71.6,
              "windDirection": 194.65,
              "windSpeed": 6.55
            }
          },
          {
            "startTime": "2024-10-18T13:00:00-07:00",
            "values": {
              "humidity": 42.98,
              "pressureSeaLevel": 29.97,
              "temperature": 73.4,
              "windDirection": 200,
              "windSpeed": 7.71
            }
          },
          {
            "startTime": "2024-10-18T14:00:00-07:00",
            "values": {
              "humidity": 45.07,
              "pressureSeaLevel": 29.97,
              "temperature": 72.23,
              "windDirection": 241.14,
              "windSpeed": 8.95
            }
          },
          {
            "startTime": "2024-10-18T15:00:00-07:00",
            "values": {
              "humidity": 48.9,
              "pressureSeaLevel": 29.94,
              "temperature": 71.6,
              "windDirection": 256,
              "windSpeed": 10.94
            }
          },
          {
            "startTime": "2024-10-18T16:00:00-07:00",
            "values": {
              "humidity": 55.24,
              "pressureSeaLevel": 29.94,
              "temperature": 69.8,
              "windDirection": 256,
              "windSpeed": 12.61
            }
          },
          {
            "startTime": "2024-10-18T17:00:00-07:00",
            "values": {
              "humidity": 58.9,
              "pressureSeaLevel": 29.94,
              "temperature": 68,
              "windDirection": 256,
              "windSpeed": 12.32
            }
          },
          {
            "startTime": "2024-10-18T18:00:00-07:00",
            "values": {
              "humidity": 60.61,
              "pressureSeaLevel": 29.97,
              "temperature": 66.2,
              "windDirection": 249.14,
              "windSpeed": 9.17
            }
          },
          {
            "startTime": "2024-10-18T19:00:00-07:00",
            "values": {
              "humidity": 66,
              "pressureSeaLevel": 30,
              "temperature": 64.4,
              "windDirection": 262.22,
              "windSpeed": 6.61
            }
          },
          {
            "startTime": "2024-10-18T20:00:00-07:00",
            "values": {
              "humidity": 70,
              "pressureSeaLevel": 30,
              "temperature": 61.93,
              "windDirection": 57.64,
              "windSpeed": 5.5
            }
          },
          {
            "startTime": "2024-10-18T21:00:00-07:00",
            "values": {
              "humidity": 72.4,
              "pressureSeaLevel": 30,
              "temperature": 60.74,
              "windDirection": 51.64,
              "windSpeed": 5.39
            }
          },
          {
            "startTime": "2024-10-18T22:00:00-07:00",
            "values": {
              "humidity": 76,
              "pressureSeaLevel": 30.03,
              "temperature": 58.67,
              "windDirection": 85.54,
              "windSpeed": 5.7
            }
          },
          {
            "startTime": "2024-10-18T23:00:00-07:00",
            "values": {
              "humidity": 77.67,
              "pressureSeaLevel": 30.05,
              "temperature": 57.2,
              "windDirection": 81.08,
              "windSpeed": 5.37
            }
          },
          {
            "startTime": "2024-10-19T00:00:00-07:00",
            "values": {
              "humidity": 77.34,
              "pressureSeaLevel": 30.05,
              "temperature": 56.89,
              "windDirection": 84.14,
              "windSpeed": 5.14
            }
          },
          {
            "startTime": "2024-10-19T01:00:00-07:00",
            "values": {
              "humidity": 76.51,
              "pressureSeaLevel": 30.03,
              "temperature": 56.6,
              "windDirection": 119.84,
              "windSpeed": 4.54
            }
          },
          {
            "startTime": "2024-10-19T02:00:00-07:00",
            "values": {
              "humidity": 73.41,
              "pressureSeaLevel": 30.03,
              "temperature": 55.22,
              "windDirection": 105.09,
              "windSpeed": 5.37
            }
          },
          {
            "startTime": "2024-10-19T03:00:00-07:00",
            "values": {
              "humidity": 70.12,
              "pressureSeaLevel": 30.05,
              "temperature": 54.5,
              "windDirection": 39.34,
              "windSpeed": 5.1
            }
          },
          {
            "startTime": "2024-10-19T04:00:00-07:00",
            "values": {
              "humidity": 67.13,
              "pressureSeaLevel": 30.03,
              "temperature": 54.4,
              "windDirection": 58.78,
              "windSpeed": 4.72
            }
          },
          {
            "startTime": "2024-10-19T05:00:00-07:00",
            "values": {
              "humidity": 65.82,
              "pressureSeaLevel": 30.03,
              "temperature": 54.27,
              "windDirection": 63.49,
              "windSpeed": 5.28
            }
          },
          {
            "startTime": "2024-10-19T06:00:00-07:00",
            "values": {
              "humidity": 61.5,
              "pressureSeaLevel": 30.05,
              "temperature": 54.07,
              "windDirection": 77.62,
              "windSpeed": 6.22
            }
          },
          {
            "startTime": "2024-10-19T07:00:00-07:00",
            "values": {
              "humidity": 55.51,
              "pressureSeaLevel": 30.06,
              "temperature": 53.52,
              "windDirection": 89.33,
              "windSpeed": 6.65
            }
          },
          {
            "startTime": "2024-10-19T08:00:00-07:00",
            "values": {
              "humidity": 52.26,
              "pressureSeaLevel": 30.08,
              "temperature": 53.9,
              "windDirection": 103.22,
              "windSpeed": 6.53
            }
          },
          {
            "startTime": "2024-10-19T09:00:00-07:00",
            "values": {
              "humidity": 22.75,
              "pressureSeaLevel": 30.08,
              "temperature": 61.49,
              "windDirection": 346.48,
              "windSpeed": 1.25
            }
          },
          {
            "startTime": "2024-10-19T10:00:00-07:00",
            "values": {
              "humidity": 18.02,
              "pressureSeaLevel": 30.08,
              "temperature": 67.6,
              "windDirection": 158.33,
              "windSpeed": 1.47
            }
          },
          {
            "startTime": "2024-10-19T11:00:00-07:00",
            "values": {
              "humidity": 16.32,
              "pressureSeaLevel": 30.07,
              "temperature": 72.93,
              "windDirection": 183.97,
              "windSpeed": 3.58
            }
          },
          {
            "startTime": "2024-10-19T12:00:00-07:00",
            "values": {
              "humidity": 12.65,
              "pressureSeaLevel": 30.05,
              "temperature": 77.84,
              "windDirection": 188.14,
              "windSpeed": 5.65
            }
          },
          {
            "startTime": "2024-10-19T13:00:00-07:00",
            "values": {
              "humidity": 11.42,
              "pressureSeaLevel": 30.03,
              "temperature": 81.13,
              "windDirection": 202.53,
              "windSpeed": 5.63
            }
          },
          {
            "startTime": "2024-10-19T14:00:00-07:00",
            "values": {
              "humidity": 10.76,
              "pressureSeaLevel": 30,
              "temperature": 82.69,
              "windDirection": 227.22,
              "windSpeed": 6.99
            }
          },
          {
            "startTime": "2024-10-19T15:00:00-07:00",
            "values": {
              "humidity": 13.72,
              "pressureSeaLevel": 29.99,
              "temperature": 82.11,
              "windDirection": 238.86,
              "windSpeed": 10.22
            }
          },
          {
            "startTime": "2024-10-19T16:00:00-07:00",
            "values": {
              "humidity": 21.29,
              "pressureSeaLevel": 29.99,
              "temperature": 79.22,
              "windDirection": 250.45,
              "windSpeed": 11.39
            }
          },
          {
            "startTime": "2024-10-19T17:00:00-07:00",
            "values": {
              "humidity": 25.06,
              "pressureSeaLevel": 29.99,
              "temperature": 76.03,
              "windDirection": 254.16,
              "windSpeed": 10.68
            }
          },
          {
            "startTime": "2024-10-19T18:00:00-07:00",
            "values": {
              "humidity": 28.74,
              "pressureSeaLevel": 30,
              "temperature": 72.54,
              "windDirection": 261.9,
              "windSpeed": 8.36
            }
          },
          {
            "startTime": "2024-10-19T19:00:00-07:00",
            "values": {
              "humidity": 27.62,
              "pressureSeaLevel": 30.02,
              "temperature": 70.26,
              "windDirection": 275.25,
              "windSpeed": 7.08
            }
          },
          {
            "startTime": "2024-10-19T20:00:00-07:00",
            "values": {
              "humidity": 30.98,
              "pressureSeaLevel": 30.03,
              "temperature": 67.4,
              "windDirection": 279.62,
              "windSpeed": 4.12
            }
          },
          {
            "startTime": "2024-10-19T21:00:00-07:00",
            "values": {
              "humidity": 32.79,
              "pressureSeaLevel": 30.03,
              "temperature": 65.68,
              "windDirection": 262.28,
              "windSpeed": 3.05
            }
          },
          {
            "startTime": "2024-10-19T22:00:00-07:00",
            "values": {
              "humidity": 28.87,
              "pressureSeaLevel": 30.04,
              "temperature": 66.27,
              "windDirection": 270.49,
              "windSpeed": 0.62
            }
          },
          {
            "startTime": "2024-10-19T23:00:00-07:00",
            "values": {
              "humidity": 40.13,
              "pressureSeaLevel": 30.06,
              "temperature": 61.64,
              "windDirection": 87.51,
              "windSpeed": 5.94
            }
          },
          {
            "startTime": "2024-10-20T00:00:00-07:00",
            "values": {
              "humidity": 46.75,
              "pressureSeaLevel": 30.06,
              "temperature": 60.05,
              "windDirection": 65.09,
              "windSpeed": 6.46
            }
          },
          {
            "startTime": "2024-10-20T01:00:00-07:00",
            "values": {
              "humidity": 44.56,
              "pressureSeaLevel": 30.05,
              "temperature": 58.29,
              "windDirection": 45.34,
              "windSpeed": 5.17
            }
          },
          {
            "startTime": "2024-10-20T02:00:00-07:00",
            "values": {
              "humidity": 40.48,
              "pressureSeaLevel": 30.05,
              "temperature": 58.9,
              "windDirection": 37.37,
              "windSpeed": 4.31
            }
          },
          {
            "startTime": "2024-10-20T03:00:00-07:00",
            "values": {
              "humidity": 33.16,
              "pressureSeaLevel": 30.05,
              "temperature": 61.98,
              "windDirection": 15.78,
              "windSpeed": 3.45
            }
          },
          {
            "startTime": "2024-10-20T04:00:00-07:00",
            "values": {
              "humidity": 29.12,
              "pressureSeaLevel": 30.03,
              "temperature": 64.08,
              "windDirection": 355.95,
              "windSpeed": 2.59
            }
          },
          {
            "startTime": "2024-10-20T05:00:00-07:00",
            "values": {
              "humidity": 30.05,
              "pressureSeaLevel": 30.04,
              "temperature": 62.93,
              "windDirection": 358.61,
              "windSpeed": 2.37
            }
          },
          {
            "startTime": "2024-10-20T06:00:00-07:00",
            "values": {
              "humidity": 37.39,
              "pressureSeaLevel": 30.06,
              "temperature": 58.18,
              "windDirection": 356.68,
              "windSpeed": 3.76
            }
          },
          {
            "startTime": "2024-10-20T07:00:00-07:00",
            "values": {
              "humidity": 37.52,
              "pressureSeaLevel": 30.07,
              "temperature": 57.88,
              "windDirection": 353.63,
              "windSpeed": 3.64
            }
          },
          {
            "startTime": "2024-10-20T08:00:00-07:00",
            "values": {
              "humidity": 40.4,
              "pressureSeaLevel": 30.09,
              "temperature": 58.44,
              "windDirection": 330.08,
              "windSpeed": 3.21
            }
          },
          {
            "startTime": "2024-10-20T09:00:00-07:00",
            "values": {
              "humidity": 30.29,
              "pressureSeaLevel": 30.1,
              "temperature": 65.03,
              "windDirection": 307.11,
              "windSpeed": 1.87
            }
          },
          {
            "startTime": "2024-10-20T10:00:00-07:00",
            "values": {
              "humidity": 21.35,
              "pressureSeaLevel": 30.11,
              "temperature": 72.33,
              "windDirection": 257.95,
              "windSpeed": 0.31
            }
          },
          {
            "startTime": "2024-10-20T11:00:00-07:00",
            "values": {
              "humidity": 16.99,
              "pressureSeaLevel": 30.09,
              "temperature": 77.48,
              "windDirection": 179.6,
              "windSpeed": 0.96
            }
          },
          {
            "startTime": "2024-10-20T12:00:00-07:00",
            "values": {
              "humidity": 13.55,
              "pressureSeaLevel": 30.08,
              "temperature": 81.65,
              "windDirection": 208.8,
              "windSpeed": 2.79
            }
          },
          {
            "startTime": "2024-10-20T13:00:00-07:00",
            "values": {
              "humidity": 12.14,
              "pressureSeaLevel": 30.05,
              "temperature": 83.93,
              "windDirection": 232.86,
              "windSpeed": 6.8
            }
          },
          {
            "startTime": "2024-10-20T14:00:00-07:00",
            "values": {
              "humidity": 11.98,
              "pressureSeaLevel": 30.03,
              "temperature": 83.81,
              "windDirection": 240.96,
              "windSpeed": 10.85
            }
          },
          {
            "startTime": "2024-10-20T15:00:00-07:00",
            "values": {
              "humidity": 13.94,
              "pressureSeaLevel": 30.02,
              "temperature": 81.62,
              "windDirection": 246.17,
              "windSpeed": 12.57
            }
          },
          {
            "startTime": "2024-10-20T16:00:00-07:00",
            "values": {
              "humidity": 17.04,
              "pressureSeaLevel": 30.01,
              "temperature": 78.66,
              "windDirection": 246.45,
              "windSpeed": 12.28
            }
          },
          {
            "startTime": "2024-10-20T17:00:00-07:00",
            "values": {
              "humidity": 21.4,
              "pressureSeaLevel": 30.01,
              "temperature": 75.8,
              "windDirection": 243.14,
              "windSpeed": 10.95
            }
          },
          {
            "startTime": "2024-10-20T18:00:00-07:00",
            "values": {
              "humidity": 27.16,
              "pressureSeaLevel": 30.01,
              "temperature": 72.9,
              "windDirection": 239.05,
              "windSpeed": 9.02
            }
          },
          {
            "startTime": "2024-10-20T19:00:00-07:00",
            "values": {
              "humidity": 29.54,
              "pressureSeaLevel": 30.02,
              "temperature": 71.49,
              "windDirection": 242.91,
              "windSpeed": 7.85
            }
          },
          {
            "startTime": "2024-10-20T20:00:00-07:00",
            "values": {
              "humidity": 31.5,
              "pressureSeaLevel": 30.03,
              "temperature": 70.81,
              "windDirection": 235.26,
              "windSpeed": 5.09
            }
          },
          {
            "startTime": "2024-10-20T21:00:00-07:00",
            "values": {
              "humidity": 32.29,
              "pressureSeaLevel": 30.03,
              "temperature": 70.18,
              "windDirection": 217.62,
              "windSpeed": 4.05
            }
          },
          {
            "startTime": "2024-10-20T22:00:00-07:00",
            "values": {
              "humidity": 32.81,
              "pressureSeaLevel": 30.03,
              "temperature": 69.52,
              "windDirection": 191.92,
              "windSpeed": 2.64
            }
          },
          {
            "startTime": "2024-10-20T23:00:00-07:00",
            "values": {
              "humidity": 32.61,
              "pressureSeaLevel": 30.03,
              "temperature": 69.56,
              "windDirection": 127.18,
              "windSpeed": 2.86
            }
          },
          {
            "startTime": "2024-10-21T00:00:00-07:00",
            "values": {
              "humidity": 33.14,
              "pressureSeaLevel": 30.03,
              "temperature": 69.41,
              "windDirection": 121.97,
              "windSpeed": 2.97
            }
          },
          {
            "startTime": "2024-10-21T01:00:00-07:00",
            "values": {
              "humidity": 31.63,
              "pressureSeaLevel": 30.02,
              "temperature": 69.15,
              "windDirection": 104.78,
              "windSpeed": 2.77
            }
          },
          {
            "startTime": "2024-10-21T02:00:00-07:00",
            "values": {
              "humidity": 29.73,
              "pressureSeaLevel": 30.02,
              "temperature": 69.05,
              "windDirection": 91.05,
              "windSpeed": 2.94
            }
          },
          {
            "startTime": "2024-10-21T03:00:00-07:00",
            "values": {
              "humidity": 28.55,
              "pressureSeaLevel": 30.01,
              "temperature": 68.71,
              "windDirection": 81.39,
              "windSpeed": 2.15
            }
          },
          {
            "startTime": "2024-10-21T04:00:00-07:00",
            "values": {
              "humidity": 27.89,
              "pressureSeaLevel": 30,
              "temperature": 68.35,
              "windDirection": 76.7,
              "windSpeed": 1.97
            }
          },
          {
            "startTime": "2024-10-21T05:00:00-07:00",
            "values": {
              "humidity": 27.67,
              "pressureSeaLevel": 30,
              "temperature": 67.95,
              "windDirection": 79.58,
              "windSpeed": 2.41
            }
          },
          {
            "startTime": "2024-10-21T06:00:00-07:00",
            "values": {
              "humidity": 29.91,
              "pressureSeaLevel": 30.02,
              "temperature": 67.88,
              "windDirection": 66.62,
              "windSpeed": 2.06
            }
          },
          {
            "startTime": "2024-10-21T07:00:00-07:00",
            "values": {
              "humidity": 28.91,
              "pressureSeaLevel": 30.02,
              "temperature": 67.81,
              "windDirection": 28.67,
              "windSpeed": 1.6
            }
          },
          {
            "startTime": "2024-10-21T08:00:00-07:00",
            "values": {
              "humidity": 26.5,
              "pressureSeaLevel": 30.03,
              "temperature": 68.67,
              "windDirection": 259.41,
              "windSpeed": 1.36
            }
          },
          {
            "startTime": "2024-10-21T09:00:00-07:00",
            "values": {
              "humidity": 23.53,
              "pressureSeaLevel": 30.04,
              "temperature": 70.97,
              "windDirection": 235.89,
              "windSpeed": 0.94
            }
          },
          {
            "startTime": "2024-10-21T10:00:00-07:00",
            "values": {
              "humidity": 20.54,
              "pressureSeaLevel": 30.05,
              "temperature": 73.38,
              "windDirection": 246.07,
              "windSpeed": 2.01
            }
          },
          {
            "startTime": "2024-10-21T11:00:00-07:00",
            "values": {
              "humidity": 17.96,
              "pressureSeaLevel": 30.04,
              "temperature": 75.78,
              "windDirection": 247.65,
              "windSpeed": 4.04
            }
          },
          {
            "startTime": "2024-10-21T12:00:00-07:00",
            "values": {
              "humidity": 16.63,
              "pressureSeaLevel": 30.03,
              "temperature": 77.77,
              "windDirection": 247.13,
              "windSpeed": 5.63
            }
          },
          {
            "startTime": "2024-10-21T13:00:00-07:00",
            "values": {
              "humidity": 17.32,
              "pressureSeaLevel": 30.01,
              "temperature": 78.31,
              "windDirection": 243.98,
              "windSpeed": 7.26
            }
          },
          {
            "startTime": "2024-10-21T14:00:00-07:00",
            "values": {
              "humidity": 19.14,
              "pressureSeaLevel": 29.99,
              "temperature": 77.91,
              "windDirection": 240.84,
              "windSpeed": 8.25
            }
          },
          {
            "startTime": "2024-10-21T15:00:00-07:00",
            "values": {
              "humidity": 21.3,
              "pressureSeaLevel": 29.98,
              "temperature": 77.18,
              "windDirection": 242.44,
              "windSpeed": 9.22
            }
          },
          {
            "startTime": "2024-10-21T16:00:00-07:00",
            "values": {
              "humidity": 23.77,
              "pressureSeaLevel": 29.97,
              "temperature": 75.89,
              "windDirection": 240.79,
              "windSpeed": 9.77
            }
          },
          {
            "startTime": "2024-10-21T17:00:00-07:00",
            "values": {
              "humidity": 26.45,
              "pressureSeaLevel": 29.97,
              "temperature": 74.54,
              "windDirection": 238.2,
              "windSpeed": 9.29
            }
          },
          {
            "startTime": "2024-10-21T18:00:00-07:00",
            "values": {
              "humidity": 29.44,
              "pressureSeaLevel": 29.98,
              "temperature": 73.37,
              "windDirection": 231.86,
              "windSpeed": 7.9
            }
          },
          {
            "startTime": "2024-10-21T19:00:00-07:00",
            "values": {
              "humidity": 31.37,
              "pressureSeaLevel": 29.99,
              "temperature": 72.64,
              "windDirection": 221.36,
              "windSpeed": 5.82
            }
          },
          {
            "startTime": "2024-10-21T20:00:00-07:00",
            "values": {
              "humidity": 31.72,
              "pressureSeaLevel": 30,
              "temperature": 72.23,
              "windDirection": 188.57,
              "windSpeed": 3.64
            }
          },
          {
            "startTime": "2024-10-21T21:00:00-07:00",
            "values": {
              "humidity": 32.17,
              "pressureSeaLevel": 30,
              "temperature": 71.68,
              "windDirection": 153.09,
              "windSpeed": 3.4
            }
          },
          {
            "startTime": "2024-10-21T22:00:00-07:00",
            "values": {
              "humidity": 33.69,
              "pressureSeaLevel": 30.01,
              "temperature": 70.75,
              "windDirection": 150.36,
              "windSpeed": 3.44
            }
          },
          {
            "startTime": "2024-10-21T23:00:00-07:00",
            "values": {
              "humidity": 34.07,
              "pressureSeaLevel": 30.01,
              "temperature": 70.19,
              "windDirection": 139.82,
              "windSpeed": 2.58
            }
          },
          {
            "startTime": "2024-10-22T00:00:00-07:00",
            "values": {
              "humidity": 32.11,
              "pressureSeaLevel": 30.01,
              "temperature": 70.12,
              "windDirection": 98.38,
              "windSpeed": 2.54
            }
          },
          {
            "startTime": "2024-10-22T01:00:00-07:00",
            "values": {
              "humidity": 29.62,
              "pressureSeaLevel": 30,
              "temperature": 70.28,
              "windDirection": 85.83,
              "windSpeed": 2.18
            }
          },
          {
            "startTime": "2024-10-22T02:00:00-07:00",
            "values": {
              "humidity": 28.74,
              "pressureSeaLevel": 30,
              "temperature": 70.03,
              "windDirection": 98.39,
              "windSpeed": 2.08
            }
          },
          {
            "startTime": "2024-10-22T03:00:00-07:00",
            "values": {
              "humidity": 28.62,
              "pressureSeaLevel": 29.98,
              "temperature": 69.62,
              "windDirection": 103.26,
              "windSpeed": 2.22
            }
          },
          {
            "startTime": "2024-10-22T04:00:00-07:00",
            "values": {
              "humidity": 29.1,
              "pressureSeaLevel": 29.98,
              "temperature": 69.01,
              "windDirection": 153.64,
              "windSpeed": 1.18
            }
          },
          {
            "startTime": "2024-10-22T05:00:00-07:00",
            "values": {
              "humidity": 29.17,
              "pressureSeaLevel": 29.98,
              "temperature": 68.6,
              "windDirection": 117.52,
              "windSpeed": 0.76
            }
          },
          {
            "startTime": "2024-10-22T06:00:00-07:00",
            "values": {
              "humidity": 28.88,
              "pressureSeaLevel": 29.99,
              "temperature": 68.29,
              "windDirection": 124.3,
              "windSpeed": 0.48
            }
          },
          {
            "startTime": "2024-10-22T07:00:00-07:00",
            "values": {
              "humidity": 28,
              "pressureSeaLevel": 29.99,
              "temperature": 68.11,
              "windDirection": 288.75,
              "windSpeed": 0.88
            }
          },
          {
            "startTime": "2024-10-22T08:00:00-07:00",
            "values": {
              "humidity": 25.99,
              "pressureSeaLevel": 30.01,
              "temperature": 69.07,
              "windDirection": 300.56,
              "windSpeed": 0.86
            }
          },
          {
            "startTime": "2024-10-22T09:00:00-07:00",
            "values": {
              "humidity": 22.84,
              "pressureSeaLevel": 30.02,
              "temperature": 71.67,
              "windDirection": 269.36,
              "windSpeed": 1.29
            }
          }
        ],
        "startTime": "2024-10-17T09:00:00-07:00",
        "timestep": "1h"
      }
    ]
  }
}

var curLocation = '';
var chartsOpen = false;

function clearDetailPage() {
  document.getElementById("detailpage").style.display = "none";
  chartsOpen = true;
  toggleChartShow();
  delete window.temprangechart;
  delete window.meteogram;
}

function clearFields() {
  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "holder";
  document.getElementById("autodetect").checked = false;

  document.getElementById("streettooltip").style.visibility = "hidden";
  document.getElementById("citytooltip").style.visibility = "hidden";
  document.getElementById("statetooltip").visibility = "hidden";


  document.getElementById("badresults").style.display = "none";
  document.getElementById("basicpage").style.display = "none";
  clearDetailPage();
  curLocation = '';
  console.log("cleared boo");
}

function displayBadResults() {
  document.getElementById("badresults").style.display = "block";
  document.getElementById("basicpage").style.display = "none";
  document.getElementById("detailpage").style.display = "none";
}

async function fetchAutoDetectLocation() {
  try {
    const response = await fetch('https://ipinfo.io/?token=' + IPINFO_TOKEN, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log('whatever');
    console.log(json.loc);
    // return json;
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchGeoLocation(street, city, state) {
  let address = street + ',' + city + ',' + state;
  let querystring = new URLSearchParams({
    address: address,
    key: GOOGLE_API_KEY,
  }).toString();
  console.log(querystring);
  try {
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?' + querystring, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json.results[0].geometry.location);
    return json.results[0];
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
  
  document.getElementById("basicpage").style.display = "none";
  document.getElementById("detailpage").style.display = "block";
}

function toggleChartShow() {
  if (chartsOpen) {
    document.getElementById("charts").style.display = "none";
    document.getElementById("toggle_btn").src = "static/images/point-down-512.png";

    chartsOpen = false;
  } else {
    if (!window.temprangechart) {
      fetchTempRangeWeather().then(data => {
        window.temprangechart = new TempRangeChart(temprange_response, 'temprange_container');
      });
    }
    if (!window.meteogram) {
      fetchHourlyWeather().then(data => {
        window.meteogram = new Meteogram(hourly_response, 'hourly_container');
      });
    }
    document.getElementById("charts").style.display = "block";
    document.getElementById("toggle_btn").src = "static/images/point-up-512.png";
    chartsOpen = true;
  }
}

function showWeekInfo(data, address) {
  try {
    let intervals = data.data.timelines[0].intervals;
    let todayvals = intervals[0].values;
    document.getElementById("location").innerHTML = address;
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
    clearDetailPage();
    document.getElementById("badresults").style.display = "none";
    document.getElementById("basicpage").style.display = "block";
  } catch (error) {
    console.log(error);
    displayBadResults();
  }
}

function createIcon(key, dict) {
  let description = dict[key].desc;
  let icon = dict[key].icon;
}

function submitAddress() {
  console.log('submitting...');

  let autodetect = document.getElementById("autodetect");

  let street = document.getElementById("street");
  let city = document.getElementById("city");
  let state = document.getElementById("state");

  if (autodetect.checked) {
    console.log("DETECTED");
    try {
      fetchAutoDetectLocation().then(response => {
        let location = response.loc[0] + ',' + response.loc[1];
        curLocation = location;
        fetchBasicWeather(location).then(data => {
            showWeekInfo(data, response.city + ', ' + response.region + ', ' + response.country);
        });
      }).catch((error) => {
        console.log(error);
        displayBadResults();
      });
    } catch (error) {
      console.log(error);
      displayBadResults();
    }
    street.value = "";
    city.value = "";
    state.value = "";
    document.getElementById("streettooltip").style.visibility = "hidden";
    document.getElementById("citytooltip").style.visibility = "hidden";
    document.getElementById("statetooltip").visibility = "hidden";

  } else {
    if (street.value == "") {
      document.getElementById("streettooltip").style.visibility = "visible";
      document.getElementById("citytooltip").style.visibility = "hidden";
      document.getElementById("statetooltip").visibility = "hidden";
      console.log("no street");
    } else if (city.value == "") {
      console.log("no city");
      document.getElementById("streettooltip").style.visibility = "hidden";
      document.getElementById("citytooltip").style.visibility = "visible";
      document.getElementById("statetooltip").visibility = "hidden";
    } else if (state.value == "holder") {
      console.log("no state");
      document.getElementById("streettooltip").style.visibility = "hidden";
      document.getElementById("citytooltip").style.visibility = "hidden";
      document.getElementById("statetooltip").visibility = "visible";
    } else {
      console.log("is it here?");
      document.getElementById("streettooltip").style.visibility = "hidden";
      document.getElementById("citytooltip").style.visibility = "hidden";
      document.getElementById("statetooltip").visibility = "hidden";

      fetchGeoLocation(street.value, city.value, state.value).then(response => {
        try {
          let location = response.geometry.location.lat + ',' + response.geometry.location.lng;
          console.log(location);
          curLocation = location;
          fetchBasicWeather(location).then(data => {
            showWeekInfo(holder_response, response.formatted_address);
          }).catch((error) => {
            console.log(error);
            displayBadResults();
          });
        } catch(error) {
          console.log(error);
          displayBadResults();
        }
      });
    }
  }
}

// window.onload = function() {
//   var searchForm = document.getElementById("searchform");
//   searchForm.addEventListener("submit", submitAddress);
// }