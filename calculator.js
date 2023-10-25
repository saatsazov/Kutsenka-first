document.getElementById("price1").onclick=function(event){
    let a=document.getElementById("type").value;
    let b=document.getElementById("ammount").value;
    let au=document.getElementById("au").value;
    if (au=="mg") {
        b=b/1000;
    }
   let c=document.getElementById("purity").value;
    let DP=0
   if (a=="Morphine") {
         DP=5
   }
    else if (a=="Heroin") {
      DP=10
   }
   let result1=DP*c*(b/100); 
    document.getElementById("result1").innerHTML = result1.toFixed(0);
}