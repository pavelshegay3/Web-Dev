x = int(input())
arr = []
for i in range(x):
    a = int(input())
    arr.append(a)
for i in range(x):
    if arr[i] % 2 == 0:
        print(arr[i], end = " ")