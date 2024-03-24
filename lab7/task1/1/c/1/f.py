x = int(input())
y = str(x)
ch = False
for i in reversed(y):
    if ch == True:
        print(i, end = "")
        continue
    if int(i) == 0 and ch == False:
        continue 
    if (int(i) != 0) and (ch == False):
        ch = True
        print(i, end = "")