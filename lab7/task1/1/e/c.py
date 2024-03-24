def func(x, y):
    return (x and not y) or (not x and y)
x = int(input())
y = int(input())
print(int(func(x, y)))