from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, ValidationError
from wtforms.validators import DataRequired, Email, EqualTo

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(),Email()])
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password',validators=[DataRequired()])
    submit = SubmitField('Log in')

class RegistrationForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(),Email()])
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password',validators=[DataRequired(),EqualTo('pass_confirm',message='Passwords must match!')])
    pass_confirm = PasswordField('Confirm Pasword', validators=[DataRequired()])
    submit = SubmitField('Register!')

    def check_email(self,email_field):
        if User.query.filter_by(email=email_field.data).first():
            raise ValidationError('Your email has been already registered')
    
    def check_username(self,username_field):
        if User.query.filter_by(username=username_field.data).first():
            raise ValidationError('Username is taken!')

