x = int(input())
while x > 1 and x % 2 == 0:
    x //= 2

if x == 1:
    print("YES")
else:
    print("NO")

