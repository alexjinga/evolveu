from flask import Flask
app = Flask (__name__)

@app.route('/')
def index():
    return '<h1>Welcome! Go to /puppy_latin/name to see your name in puppy latin!</h1>'

@app.route('/puppy_latin/<name>')
def puppy_latin(name):
    latinName = "Latin Name"
    if name[-1].lower() == 'y':
        latinName = name[:-1] +'iful'
    else:
        latinName = name +'y'

    return (f'<h1>Hi {name.capitalize()}! your puppy latin name is {latinName.capitalize()}</h1>')

if __name__ == '__main__':
    app.run(debug=True)
    