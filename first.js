var obj1 = {name:"Person1",age:5};
var obj2 = {age:5,name:"Person1"};
s1=JSON.stringify(obj1);
s2=JSON.stringify(obj2);
if(s1==s2){
    true
}
else{
    false
}
console.log(s1==s2);
    
