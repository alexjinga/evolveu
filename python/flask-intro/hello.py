from flask import Flask, request

people = {2:{'fname':'Alex', 'lname':'Jinga','age':29},
		  10:{'fname':'Lex', 'lname':'Smith','age':31},
		  20:{'fname':'Erik', 'lname':'Jason','age':30}
    	 }

app = Flask(__name__)

@app.route("/admin/")
@app.route("/admin")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=None):
	print('people:', people)
	print ('my id is:', int(myid))
	return "Hello World! - admin v4 - Alex " + \
        str(people.get(int(myid),{'fname':'Who Knows'})) 


@app.route("/info")
def info():
    print('Args:', request.args)
    return "Hello World! - info - Alex " + request.args.get('alex1','default1') + request.args.get('parm2','default1') + request.args.get('parm3','default1')

@app.route("/update")
def update():
    return "you are in the update route Alex"

if __name__ == '__main__':
    app.run(host='localhost', debug=True)

    # app.run(debug=True)
