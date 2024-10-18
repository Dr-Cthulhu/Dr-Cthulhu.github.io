from flask import Flask, render_template, request, jsonify
from datetime import datetime,timedelta
import json
import requests


app = Flask(__name__)
GOOGLE_API_KEY = 'AIzaSyBV7fyGRurFLSu2rTY8IEG574RcpobaaCk'
TOMORROW_API_KEY = 'Epoej36md79HLbgDoRHCpSSpdDzvKcK7'

@app.route('/')
def hello():
    return render_template('weatherboy.html', title='Home')

def get_tomorrow_uri(loc, fields, timestep, starttime=0, dayrange=0):
    time_query = ''
    if dayrange > 0:
        start_date=datetime.fromtimestamp(int(starttime) / 1e3)
        end_date = start_date + timedelta(days=dayrange)
        time_query = f'&startTime={start_date.isoformat()}&endTime={end_date.isoformat()}'
    return f'https://api.tomorrow.io/v4/timelines?location={loc}&fields={fields}&units=imperial&timesteps={timestep}{time_query}&timezone=America/Los_Angeles&apikey={TOMORROW_API_KEY}'

@app.route('/basicweather.json',methods=['GET'])
def basicweather():
    if request.method == 'GET':
   # If 'num' is None, the user has requested page the first time
        location = request.args.get('location')
        fields = [
            'temperature', 
            'temperatureMin',
            'temperatureMax',
            'windSpeed',
            'windDirection',
            'humidity',
            'pressureSeaLevel',
            'uvIndex',
            'weatherCode',
            'precipitationProbability',
            'precipitationType',
            'sunriseTime',
            'sunsetTime',
            'visibility',
            'cloudCover',
        ]
        response = requests.get(get_tomorrow_uri(location, ','.join(fields), '1d', ''))
        data = json.loads(response.text)
        # console.log(data)
        return data

@app.route('/temperaturerange.json',methods=['GET'])
def temperaturerange():
    if request.method == 'GET':
   # If 'num' is None, the user has requested page the first time
        location = request.args.get('location')
        start_time = request.args.get('startTime')
        fields = [
            'temperatureMin',
            'temperatureMax',
        ]
        response = requests.get(get_tomorrow_uri(location, ','.join(fields), '1d', starttime=start_time, dayrange=5))
        data = json.loads(response.text)
        # console.log(data)
        return data

@app.route('/hourlyweather.json',methods=['GET'])
def hourlyweather():
    if request.method == 'GET':
   # If 'num' is None, the user has requested page the first time
        location = request.args.get('location')
        start_time = request.args.get('startTime')
        fields = [
            'temperature', 
            # 'temperatureApparent',
            'windSpeed',
            'windDirection',
            'humidity',
            'pressureSeaLevel',
            # 'uvIndex',
            # 'weatherCode',
            # 'precipitationProbability',
            # 'precipitationType',
            # 'sunriseTime',
            # 'sunsetTime',
            # 'visibility',
            # 'moonPhase',
            # 'cloudCover',
        ]
        print(get_tomorrow_uri(location, ','.join(fields), '1h', start_time))
        response = requests.get(get_tomorrow_uri(location, ','.join(fields), '1h', starttime=start_time, dayrange=5))
        data = json.loads(response.text)
        # console.log(data)
        return data

if __name__ == "__main__":
    app.run(host='localhost', port=8989)
# from flask import render_template
# from app import app

# @app.route('/')
# @app.route('/weatherboy')

# def index():
#     user = {'username': 'Miguel'}
#     posts = [
#         {'author': {'username': 'John'},'body': 'Beautiful day in Portland!'},
#         {'author': {'username': 'Susan'}, 'body': 'The Avengers was so cool!'}
#     ]
#     return render_template('weatherboy.html', title='Home', user=user, posts=posts)