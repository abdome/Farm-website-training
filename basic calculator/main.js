// catch number
let ev="";
function my(ele)
{
    
   var x=document.getElementById(ele).innerHTML;
   let c =document.getElementById("screen");
   if(x=="C")
   {
       
       c.value="";
       ev="";
   }
   else if( x == "CE")
   {
    ev=ev.substring(0,ev.length -1);
    c.value=ev;
   }
   else if( x == "=")
   {
       let res=ev.replace("%","/100");
       c.value=eval(res);
       ev="";
   }
//    else if( x == "%")
//    {
//        window.alert("d");
//        c.value=ev+"%";
//        ev+="/100";
       
//    }
   else
   {
       ev+=x;
       c.value=ev; 
    //    window.alert(ev) ;

   }
}