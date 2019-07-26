from basic import db, Puppy

db.create_all() #creates akk the tables(models)

sam = Puppy('Sammy', 3)
frank = Puppy('Franky', 4)

print (sam.id) #it will print 'None'
print (frank.id) #it will print 'None'

db.session.add_all([sam, frank])
#or you can add each object indivdually to the DB
#db.session.add(sam)
#db.session.add(frank)

db.session.commit()
print (sam.id)
print (frank.id)
