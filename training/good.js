form=document.getElementById("myform")
na=document.getElementById("name")
pa=document.getElementById("pass")
er=document.getElementById("erro")
form.addEventListener("submit",(e)=>{
    
    
   
    
    
    if(na.value===""){
       


    
        
        er.style.padding=5  +"px";
        er.innerHTML="empty input";
        e.preventDefault();
        

    }

    if(pa.value.length<4){
        er.style.padding=5  +"px";
        er.innerHTML="Need Strong pasword";
        e.preventDefault();

    }
    


})