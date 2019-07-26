import os
import psycopg2
from forms import AddForm, DelForm, OwnerForm
from flask import Flask, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# #Connect to the DB
# con = psycopg2.connect(
#     host = "localhost",
#     database = "comp298_DB",
#     user = "postgres",
#     password = "",
#     port = "5432"
# )

# #cursor 
# cur = con.cursor()

# cur.execure("select * from client")
# rows - cur.fetchall()
#     for r in rows:
#         print(f"id {r[0]} name {r[1]}")

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mykey'

#########################################
####### SQL DATABASE SECTION ############
#########################################

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir,'data.sqlite')
app.config['SLQALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
Migrate(app,db)

##########################################
##########     MODELS      ###############
##########################################
class Puppy(db.Model):
    __tablename__ = 'puppies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    owner = db.relationship('Owner',backref='puppy', uselist=False)

    def __init__(self,name):
        self.name=name
    
    def __repr__ (self):
        if self.owner:
            return f"Puppy name: {self.name}(ID:{self.id}) and owner is {self.owner.name} (ID:{self.owner.id}) "
        else:
            return f"Puppy name is {self.name}(ID:{self.id}) and has no owner yet!"

class Owner(db.Model):
    __tablename__='owner'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    puppy_id = db.Column(db.Integer, db.ForeignKey('puppies.id'))
    
    def __init__(self,name,puppy_id):
        self.name = name
        self.puppy_id = puppy_id

 # type in terminal:
        # set FLASK_APP = <current file name>.py 
        # flask db init
        # flask db migrate -m "creat DB tables"
        # flask db upgrade


##########################################
#####  VIEW FUNCTIONS - HAVE FORMS   #####
##########################################

@app.route ('/')
def index():
    return render_template('index.html')

@app.route ('/add', methods=['GET','POST'])
def add_pup():
    form = AddForm()
    if form.validate_on_submit():
        name = form.name.data
        new_pup = Puppy(name)
        db.session.add(new_pup)
        db.session.commit() 
        return redirect(url_for('list_pup'))
    return render_template('add.html', form=form)

@app.route ('/list', methods=['GET','POST'])
def list_pup():
    puppies = Puppy.query.all()
    return render_template('list.html', puppies=puppies)

@app.route ('/delete', methods=['GET','POST'])
def del_pup():
    form = DelForm()
    if form.validate_on_submit():
        id = form.id.data
        pup = Puppy.query.get(id)
        db.session.delete(pup)
        db.session.commit()
        return redirect(url_for('list_pup'))
    return render_template('delete.html', form=form)

@app.route ('/owners', methods=['GET', 'POST'])
def add_owner():
    form = OwnerForm()
    if form.validate_on_submit():
        name = form.name.data
        pup_id = form.id.data
        new_owner = Owner(name, pup_id)
        db.session.add(new_owner)
        db.session.commit()
        return redirect(url_for('list_pup'))
    return render_template('owners.html', form=form)

#close connection
# con.close()


if __name__ == '__main__':
    app.run(debug=True)