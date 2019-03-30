
(function(){
var main = document.querySelector("#main");
var table = document.querySelector("table");
var btn = document.querySelector("#btn");
var btnReset = document.querySelector("#btn2");
var arrindexes = [];

function Create(){
 var arr1 =[];
 var arr2 =[];
 var arr3 =[]; 
 var arr4 =[]; 
 var arr5 =[];
 var num = randomizeStr("12345");

 arr1.push(num[0])
 arr2.push(num[1])
 arr3.push(num[2])
 arr4.push(num[3])
 arr5.push(num[4])

var num2 = randomizeStr("12345")
while (arr1.includes(num2[0]) || arr2.includes(num2[1]) || arr3.includes(num2[2]) || 
arr4.includes(num2[3]) || arr5.includes(num2[4])){
    num2 = randomizeStr("12345")
}
 arr1.push(num2[0])
 arr2.push(num2[1])
 arr3.push(num2[2])
 arr4.push(num2[3])
 arr5.push(num2[4])


var num3 = randomizeStr("12345")
while (arr1.includes(num3[0]) || arr2.includes(num3[1]) || arr3.includes(num3[2]) || 
arr4.includes(num3[3]) || arr5.includes(num3[4])){
    num3 = randomizeStr("12345")
}
 arr1.push(num3[0])
 arr2.push(num3[1])
 arr3.push(num3[2])
 arr4.push(num3[3])
 arr5.push(num3[4])

var num4 = randomizeStr("12345")
while (arr1.includes(num4[0]) || arr2.includes(num4[1]) || arr3.includes(num4[2]) || 
arr4.includes(num4[3]) || arr5.includes(num4[4])){
    num4 = randomizeStr("12345")
}
arr1.push(num4[0])
arr2.push(num4[1])
arr3.push(num4[2])
arr4.push(num4[3])
arr5.push(num4[4])

var num5 = randomizeStr("12345")
while (arr1.includes(num5[0]) || arr2.includes(num5[1]) || arr3.includes(num5[2]) || 
arr4.includes(num5[3]) || arr5.includes(num5[4])){
    num5 = randomizeStr("12345")
}
var newArr = [];
newArr.push(num,num2,num3,num4,num5);
for (var y=0; y<newArr.length; y++){
    newArr[y]= newArr[y].split("");
}
return newArr;
}
var finalArr = Create();

function compareDiagonal(finalArr){
var diagonal1 = [];
var diagonal2 = [];
diagonal1.push(finalArr[0][0], finalArr[1][1], finalArr[2][2], finalArr[3][3], finalArr[4][4]);
diagonal2.push(finalArr[0][4], finalArr[1][3], finalArr[2][2], finalArr[3][1], finalArr[4][0]);
var samenum1 = diagonal1.filter(function(val,index,arr){
    return arr.indexOf(val) === index;
})
var samenum2 = diagonal2.filter(function(val,index,arr){
    return arr.indexOf(val) === index;
})
if (samenum1.length === 5 && samenum2.length ===5 ){
    return false;
}
return true;
}

while (compareDiagonal(finalArr))
{
    finalArr = Create();  
}

var arrnumbers =[];
for (var x=0; x<finalArr.length; x++){
arrnumbers = arrnumbers.concat(finalArr[x]);
}

for (var i=0; i<arrnumbers.length; i++){
    arrindexes.push(i);
}

arrindexes = randomize(arrindexes);
var indexes = arrindexes.slice(0,10);

var tds = document.querySelectorAll("td");
for (var j=0; j<tds.length; j++){
if (indexes.includes(j)){
    tds[j].innerHTML = arrnumbers[j];
}
else {
tds[j].className="empty";
}
}

table.addEventListener("click", function(e){
if (e.target.classList.contains("empty")){
 var newtd = document.createElement("td");
 newtd.className = "tdcss";
 newtd.innerHTML =`
 <span>1</span><span>2</span><span>3</span>
 <span>4</span><span>5</span>
 `
 e.target.replaceWith(newtd);
}

else if (e.target.tagName === "SPAN"){
    e.target.parentNode.classList.remove("tdcss");
    e.target.parentNode.classList.add("empty");
    e.target.parentNode.innerHTML = e.target.innerHTML;
}
})

btn.addEventListener("click", Count);
function Count(){
    var bool = true;
    var tds = document.querySelectorAll("td");
    tds = Array.from(tds);
    tds = tds.map(function(val){
        return val.textContent;
    })

    for (var x =0; x<tds.length; x++){
        if (tds[x] !== arrnumbers[x]){
             var info = document.querySelector("#info");
             info.innerHTML = "Niestety twoje rozwiązanie jest nieprawidłowe";
             info.className = "text-danger font-weight-bold";
             bool = false;
        }
    }

    if (bool){
        var info = document.querySelector("#info");
             info.innerHTML = "Gratulacje udało Ci się rozwiązać!";
             info.className = "text-success font-weight-bold";
    }
}

btn2.addEventListener("click", function(){
    location.reload();
})

function randomize(arr){
       for (var i=0; i<arr.length; i++){
           var rand = Math.floor(Math.random()*arr.length);
           var temp = arr[rand];
           arr[rand] = arr[i];
           arr[i] = temp;
       }
       return arr;
   }

   function randomizeStr(str){
       str = str.split("");
       for (var i=0; i<str.length; i++){
           var rand = Math.floor(Math.random()*str.length);
           var temp = str[rand];
           str[rand] = str[i];
           str[i] = temp;
       }
       return str.join("");
   }
})()