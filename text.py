"""
swap program

"""

def swap(li,pos1,pos2):
    li[pos1],li[pos2]=li[pos2],li[pos1]
    return li

li=[3,5,6,7,8,9]
pos1=2
pos2=5
print(swap(li, pos1-1, pos2-1))


# 2nd prog- Swap elements in string list

l1=["hi", "gfg","how", "are"]
print("the original list is:" +str(l1))
res=[sub.replace("g","-").replace("e","w").replace("-","e") for sub in l1]
print(res)
b=" ".join(l1)  #converts list to string
print(b)


#3 - Find maximum between numbers

a=5
b=4
c=8
maximum=max(a,b,c)
print(maximum)


#4 Check if element exists in a list

a=[4,6,7,8,9,3]

for i in a:
    if i==3:
        print("Yes! It exists.")

# Way4.2

b=[3,5,6,7,1,66]

exist_counnt=b.count(7)
if exist_counnt>0:
    print("True")
else:
    print("false")



#5 Reversing a list:
def reverse_list(l1):
    l2=l1[::-1]
    return l2

l1=[3,5,6,7,8,9]
print(reverse_list(l1))



#6 Clonning or Copying a list:

#6.1 

def clone(l1):
    l2=l1[:]
    return l2

l1=[9,6,7,3,22]
l2=clone(l1)
print("list after clonning:", l2)


#6.2
def clonning(list_One):
    list_2=[]
    list_2.extend(list_One)
    return list_2

list_one=[4,6,7,8,9]
list_2=clonning(list_one)
print(list_2)

clonning(list_one)


#7 Count occurences of items in a list:

def count_occ(list_1):
    Count_sum=0
    for i in list_1:
        if (i==x):
            Count_sum=Count_sum+1
    return Count_sum
list_1=[3,5,6,7,8,9,4,5,10,5,55,6,7]
x=5

print(count_occ(list_1)
)    
        


#8

g=[55,67,88,99]
res=[]
for i in g:
    sum=0
    for digit in str(i):
        sum+=int(digit)
    res.append(sum)

print(str(res))

print(type((res)))




#9 To find smallest nummber in list:

k=[7,8,5,33,56,78]
k.sort()
print(k)





