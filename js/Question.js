function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active')
}

var question=document.getElementById("question").innerHTML;
var ans1=document.getElementById("ans1");
var lbl1=document.getElementById("lbl1").innerHTML;
var ans2=document.getElementById("ans2");
var lbl2=document.getElementById("lbl2").innerHTML;
var ans3=document.getElementById("ans3");
var lbl3=document.getElementById("lbl3").innerHTML;
var ans4=document.getElementById("ans4");
var lbl4=document.getElementById("lbl4").innerHTML;
var result=document.getElementById("result");
var sec=document.getElementById("local");


ans2.addEventListener("click",function(){
          result.innerHTML=`<p class="color:green">Correct</p>`
          sec.innerHTML=localStorage.getItem("answer2");
 })
 ans1.addEventListener("click",function(){
     result.innerHTML=`<p class="color:green">Not Correct</p>`;
     sec.innerHTML=localStorage.getItem("answer1");

    
})
ans3.addEventListener("click",function(){
     result.innerHTML=`<p class="color:green">Not Correct</p>`;
     sec.innerHTML=localStorage.getItem("answer3");

})
ans4.addEventListener("click",function(){
    result.innerHTML=`<p class="color:green">Not Correct</p>`;
    sec.innerHTML=localStorage.getItem("answer4");


})
localStorage.setItem("question",question)
 
localStorage.setItem("answer1",lbl1);

localStorage.setItem("answer2",lbl2);

localStorage.setItem("answer3",lbl3);

localStorage.setItem("answer4",lbl4);


//delete register question

$('#tab tbody').on('click','#trash-btn',function(){
    $(this).closest('tr').remove();
})



 
 


 