from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField

class AddForm(FlaskForm):
    name = StringField('Name of Puppy: ')
    submit = SubmitField ('Add Puppy')

class DelForm(FlaskForm):
    id = IntegerField('ID number of the puppy to remove: ')
    submit = SubmitField('Remove Puppy')

class OwnerForm(FlaskForm):
    name = StringField('Name of Owner:')
    id = IntegerField('ID of Puppy:')
    submit = SubmitField('Add Owner')