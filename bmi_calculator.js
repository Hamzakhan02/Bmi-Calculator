// var height=document.getElementById("height")
// var weight=document.getElementById("weight")
// let m=height*100;
// let bmi = weight/m*m;
// var but= document.querySelector("button")
// but.addEventListener("click",()=>{
//     document.querySelector("h1").innerHTML=bmi.value;

// })

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const height=document.getElementById("height").value
    const weight=document.getElementById("weight").value
    const result=document.getElementById("result");

    if(height ==="" || height <= 0 ||  isNaN(height)){
        result.innerHTML=`please give a valid input ${height}`
      } 
        else if(weight == "" || weight<=0 || isNaN(weight)){
            result.innerHtML = `please a valid  ${weight}`

        } else {
            const bmi=(weight/((height*height)/10000).toFixed(2))
            result.innerHTML=`Result ${bmi}`
            
            if(bmi<=18){
                result.innerHTML=bmi+"you are under weight"
            } 
                
            else if(bmi>=18 && bmi<=20){
                    result.innerHTML=` you are in normal range ${bmi}`
                }
                
                else{
                    result.innerHTML=`you are over weight ${bmi}`
                }
        }

})