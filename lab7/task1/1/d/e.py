x = int(input())
arr = []
for i in range(x):
    a = int(input())
    arr.append(a)
for i in range(1, x):
    if (arr[i] < 0 and arr[i - 1] < 0) or (arr[i] > 0 and arr[i - 1] > 0):
        print("YES")
        break