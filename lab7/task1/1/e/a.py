def func(a, b, c, d):
    min = a
    if b < min:
        min = b
    if c < min:
        min = c
    if d < min:
        min = d
    return min
a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(func(a,b,c,d))