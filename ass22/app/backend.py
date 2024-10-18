from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

# @app.route('/hello/')
# @app.route('/hello/<name>')
# def hello(name=None):
#     user = {'username': 'Miguel'}
#     posts = [
#         {'author': {'username': 'John'},'body': 'Beautiful day in Portland!'},
#         {'author': {'username': 'Susan'}, 'body': 'The Avengers was so cool!'}
#     ]
#     return render_template('weatherboy.html', title='Home', user=user, post=posts)

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