from flask import Flask, render_template, url_for
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template(url_for('static', filename='index.html'))

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

#Register blueprints
#from app.users.views import mod as usersModule
#app.register_blueprint(usersModule)
