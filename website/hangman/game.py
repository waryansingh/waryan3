stri=input("enter a movie name ")
already=[]
stri=stri.upper()
ss=[]
us='_'
strin=stri
stri=list(stri)
uniq=[]
for l in stri:
    if l not in uniq:
        uniq.append(l)
vow=["A","E","I","O","U"," ","a","e","i","o","u"]
st1=""
for j in range(len(stri)):
    if stri[j] in vow:
        ss.append(stri[j])
    else:
        ss.append(us)
c=0
att=7
st1=' '.join(ss)
print(st1)
print("")
while st1!=strin:
    inp=input(f"Guess the movie, you have {att} attempts. Enter 1 character at a time -  ").upper()
    c+=1
    for i in range(0,len(stri)):        
        if inp==stri[i]:            
            ss[i]=inp
        st1=' '.join(ss)
    if inp in uniq:
        print("")
        print("Woah!")
        print("")
        c-=1
    else:
        att-=1
        print("")
        print("Lmao, no")
        print("")
    if att==0:
        break
    print(st1)
    print("")
    st1=''.join(ss)
if att==0:
    print("Attempts over, Loser, Correct movie was -",strin)
else:
    print(f"Congrats, you guessed the movie -",st1,"- right after",c," attempts")