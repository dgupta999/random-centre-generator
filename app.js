let button=document.getElementById('btn');
let centres=["Mumbai","Hyderabad",
"Chennai",
"Kerala",
"Haryana",
"Delhi"]

let students=[] //creating blank array
button.addEventListener("click",function(){
let nameinput=document.getElementById('name').value;
let emailinput=document.getElementById('email').value;
let randomcentre=Math.floor(Math.random() * centres.length)
let randomcentrename=centres[randomcentre]
let result={
    name: nameinput,
    email: emailinput,
    centre: randomcentrename,
}
//checking if student already registered
let ifstudentexists=students.filter((result)=>{
    return result.email === emailinput;
})
if (ifstudentexists.length == 0){
    students.push(result); //adding value to array
    console.log(students);
}
else{
    alert('Student already registered!')
}
//Updating user data
let studentname=document.getElementById('name1');
studentname.textContent=nameinput;
let studentemail=document.getElementById('email2');
studentemail.textContent=result.email;
let centre=document.getElementById('centre');
centre.textContent=result.centre;
})