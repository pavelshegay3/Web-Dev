a = input()
res = 0
for i in range(len(a)):
    b = int(a[len(a) - 1 - i])
    res += b * pow(2, i)
print(res)