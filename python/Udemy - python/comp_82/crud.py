from basic import db, Puppy

## create ##
my_puppy = Puppy("Rufus", 5)
db.session.add(my_puppy)
db.session.commit()

## read ##
all_puppies = Puppy.query.all() # list of puppies obj in the table
print(all_puppies)

# Select by ID
puppy_one = Puppy.query.get(1) # '1' is the ID of the object we want to get from DB
print(puppy_one.name)

# Filter
puppy_franky = Puppy.query.filter_by(name='Franky') # this will creat a SQL code!
print(puppy_franky.all())

## UPDATE ##
first_puppy = Puppy.query.get(1)
first_puppy.age = 10
db.session.add(first_puppy)
db.session.commit()

## delete ##
second_puppy = Puppy.query.get(2)
db.session.delete(second_puppy)
db.session.commit()

all_puppies = Puppy.query.all()
print(all_puppies)