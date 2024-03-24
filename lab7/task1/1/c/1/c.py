import math
a = int(input())
b = int(input())
for i in range (a, b + 1):
    if math.pow(math.sqrt(i), 2) == i:
        print(i, end = " ")