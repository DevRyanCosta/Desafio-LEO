counter=0;
courses=document.querySelectorAll(".courseButton")
document.getElementById("anounceButton").addEventListener("click",function(){alert("Stop to click me mother fucker")})
while(counter<courses.length){courses[counter].addEventListener("click",function(){alert("No courses yet :I");});counter=counter+1;}
