let btn = document.getElementById("btn");
let solutions = document.getElementById("solutions");

btn.addEventListener("click",()=>{
    let box1_val =  document.getElementById("type1").value;
    let box2_val = document.getElementById("type2").value;
    if(box1_val!="0" && box2_val!="0"){  
        solutions.style.display="block";
        solutions.innerHTML="<h2>Your Solutions are :-</h2>"+"<br>"+
        "<h3>Addition = </h3>"+(Number(box1_val)+Number(box2_val))+"<br>"+
        "<h3>Difference = </h3>"+(Number(box1_val)-Number(box2_val))+"<br>"+
        "<h3>Product = </h3>"+(Number(box1_val)*Number(box2_val))+"<br>"+
        "<h3>Division = </h3>"+(Number(box1_val)/Number(box2_val))+"<br>"
        ;
    }
    else{
        location.reload();
    }
})