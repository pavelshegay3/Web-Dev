x = int(input())
arr = []
for i in range(x):
    a = int(input())
    arr.append(a)
count = 0
for i in range(x):
    if arr[i] > 0:
        count += 1
print(count)