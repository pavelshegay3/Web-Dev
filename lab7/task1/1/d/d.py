x = int(input())
arr = []
for i in range(x):
    a = int(input())
    arr.append(a)
count = 0
for i in range(1, x):
    if arr[i] > arr[i - 1]:
        count += 1
print(count)