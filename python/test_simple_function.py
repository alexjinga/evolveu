######
# testing simple_function.py
######
from simple_function import create_email

def test_email():
        assert create_email("Larry","Shumlich") == 'larry.shumlich@evolveu.ca'
        assert create_email("Heiko","Peters") == 'heiko.peters@evolveu.ca'

######
# testing tax_calculator.py
######

from tax_calculator import tax_calc

def test_tax_calc():
        assert tax_calc(47630) == 7144.5
        assert tax_calc(95259) == 16908.945
        assert tax_calc(147667) == 30534.08
        assert tax_calc(210371) == 48719.16
