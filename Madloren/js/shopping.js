
let cartqtyplus1=document.querySelector(".cart-qty-plus1");
let cartqtyplus2=document.querySelector(".cart-qty-plus2");
let cartqtyplus3=document.querySelector(".cart-qty-plus3");
let cartqtyplus4=document.querySelector(".cart-qty-plus4");
let cartqtyminus4=document.querySelector(".cart-qty-minus4");
let cartqtyminus3=document.querySelector(".cart-qty-minus3");
let cartqtyminus2=document.querySelector(".cart-qty-minus2");
let cartqtyminus1=document.querySelector(".cart-qty-minus1");


let total1=document.querySelector("#total1");
let total2=document.querySelector("#total2");
let total3=document.querySelector("#total3");
let total4=document.querySelector("#total4");
let value1=document.querySelector("#value1");
let value2=document.querySelector("#value2");
let value3=document.querySelector("#value3");
let value4=document.querySelector("#value4");
let araToplam=document.getElementById("aratoplam");
let nihaiToplam=document.getElementById("nihaitoplam");
let kargo=document.getElementById("kargo");

araToplam.innerHTML=0;
nihaiToplam.innerHTML="25$";
let p1=$("#p1");
let p1e=0;
let p2e=0;
let p3e=0;
let p4e=0;
let sum1=0,sum2=0,sum3=0,sum4=0;
cartqtyplus1.onclick=function(){
    p1e+=1;
    total1.innerHTML=72*p1e;
    sum1=Number(total1.innerHTML);
    value1.value=p1e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";
}
cartqtyplus2.onclick=function(){
    p2e+=1;
    total2.innerHTML=125*p2e;
    sum2=Number(total2.innerHTML);
    value2.value=p2e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";
}
cartqtyplus3.onclick=function(){
    p3e+=1;
    total3.innerHTML=250*p3e;
    sum3=Number(total3.innerHTML);
    value3.value=p3e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";
}
cartqtyplus4.onclick=function(){
    p4e+=1;
    total4.innerHTML=300*p4e;
    sum4=Number(total4.innerHTML);
    value4.value=p4e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";
}

cartqtyminus1.onclick=function(){
    if(p1e>0)
    {

    
    p1e-=1;
    total1.innerHTML=72*p1e;
    sum1=Number(total1.innerHTML);
    value1.value=p1e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";
}}
cartqtyminus2.onclick=function(){
    if(p2e>0)
    {
        
    
    p2e-=1;
    total2.innerHTML=72*p2e;
    sum2=Number(total2.innerHTML);
    value2.value=p2e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";}
}
cartqtyminus3.onclick=function(){
    if(p3e>0)
    {
        
    
    p3e-=1;
    total3.innerHTML=72*p3e;
    sum3=Number(total3.innerHTML);
    value3.value=p3e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";}
}
cartqtyminus4.onclick=function(){
    if(p4e>0)
    {
        
    
    p4e-=1;
    total4.innerHTML=72*p4e;
    sum4=Number(total4.innerHTML);
    value4.value=p4e;
    araToplam.innerHTML=sum1+sum2+sum3+sum4;
    nihaiToplam.innerHTML=Number(araToplam.innerHTML)+25+"$";
}}

