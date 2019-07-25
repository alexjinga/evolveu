#print “Hello World” on the console

print("Hello world")

#SYNTAX:
#define attributes / variables

#numbers
a = 1
b = 1.0

#string
stringVar1 = "this is a string"
stringVar2 = 'this is a string'

#boolean
booleanVar1 = True
booleanVar2 = False

#arrays 
pythonArray = ["XT", "MR2", "AW11", "GK5"]

#dictionary
pythonDict = {
	'maker': "Toyota",
	'model': "MR2",
	'code': "AW11",
	'engine': "4A-GE",
}

#sample if / else
a = 2
if (a == 10 or a > 10):
    print('the number is not smaller then 10')
else: 
	print('the number is smaller then 10')

# functions
# 	- parameters
# 	- returns 
def exampleFunction(b):
	if (b == 10 or b > 10):
		print("number is  NOT smaller then 10")
		return b
	else:
		print("WELL DONE!!!!")
		return b

exampleFunction(1)

# arrays
arr = [1,2,3,4,5,6]
# 	- add to the front
arr.insert(0,'a')
# 	- add to the end
arr.append(7)
arr.insert(len(arr),8)
# 	- update values
arr[0] = 0

# loops - for
for element in arr: 
    print(element)

# loops - while
i=0
while i < len(arr):
    print(f'arr[{i}]={arr[i]}')
    i=i+1

