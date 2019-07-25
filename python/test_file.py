class Basic(dict):
    def __getattr__(self, item):
        return self[item]

attrd = Basic()
x='key'
y= 'test'
attrd[x] = y

print(type(attrd))
print(attrd.key)
obj = attrd
print(attrd)
