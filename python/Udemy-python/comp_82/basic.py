import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

basedir = os.path.abspath(os.path.dirname(__file__))
# __file__ --> is this file (basic.py in current case)
# os.path.dirname(__file__) --> is the current location(directory) whe the file "basic.py"  

app = Flask (__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir, 'data.sqlite') #sets the database location
app.config['SQLALCHEMY_TRACK_MIDIFICATIONS'] = False #dont track all the changes
db = SQLAlchemy(app)

Migrate(app,db) # connect the application(app) with the database (db)
    # type in terminal:
        # set FLASK_APP = basic.py 
        # flask db init
        # flask db migrate -m "created Puppy table"
        # flask db upgrade

#create a Puppy table(model)
class Puppy(db.Model):
    __tablename__= 'puppies' #changing the name of the table to 'puppies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    age = db.Column(db.Integer)
    breed = db.Column(db.Text)

    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed
    
    def __repr__(self):
        return f"Puppy {self.name} is {self.age} year/s old"