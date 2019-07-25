import math

def tax_calc(income):

    percentage = [0.15, 0.205, 0.26, 0.29, 0.33]
    taxAmount = [0, 7145, 16908, 30535, 48719]
    incomeBraket = [0,47630, 95259, 147667, 210371]
    tax = 0
    i = 0

    while income > (incomeBraket[i]):
        i=i+1
    
    i=i-1 
    
    tax = (income-incomeBraket[i])*percentage[i]+taxAmount[i]
      
    return tax