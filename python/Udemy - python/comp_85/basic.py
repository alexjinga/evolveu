#entries into the tables
from models import db,Puppy,Owner,Toy

db.create_all() 

#Create puppies
rufus = Puppy('Rufus')
fido = Puppy('Fido')
#add them to db
db.session.add_all([rufus,fido])
db.session.commit()

print(Puppy.query.all())

pup1 = Puppy.query.filter_by(name='Rufus').first()
print(pup1)

#create Owner obj
jose = Owner('Jose', pup1.id)

#give pup1 some toys
toy1 = Toy('chew toy', pup1.id)
toy2 = Toy('ball',pup1.id)

#add all to db
db.session.add_all([jose,toy1,toy2])
db.session.commit()

pup1 = Puppy.query.filter_by(name='Rufus').first()
print(pup1)


pup1.report_toys()