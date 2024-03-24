#what's your name?
def func(first, last):
    full = first + " " + last
    return "Hello " + full + "! You just delved into python." 
first = str(input())
last = str(input())
print(func(first, last))