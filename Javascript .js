

function submit() {

    let Quizes = Number(document.getElementById('Quizes').value);
    
    let Midterm = Number(document.getElementById('Midterm').value);
      
    let FinalTest = Number(document.getElementById('FinalTest').value);
      
    let Oral = Number(document.getElementById('Oral').value) ;
    
let total = 
Quizes+Midterm+FinalTest+Oral
document.getElementById(`total_grades`).innerHTML=total

if (total <= 100 &&total >= 90){
    document.getElementById(`final_grade`).innerHTML=`A`
}

 else if (total >= 80 &&total  <= 89) {
    document.getElementById(`final_grade`).innerHTML=`B`
}
 else if (total >= 70 &&total <= 79) {
    document.getElementById(`final_grade`).innerHTML=`C`
}
else if (total >= 60 &&total <= 69) {
    document.getElementById(`final_grade`).innerHTML=`D`
}
else if (total <= 59){
    document.getElementById(`final_grade`).innerHTML=`F`
  
}


}
