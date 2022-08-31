editable=document.querySelectorAll("editable");
bannerButton=document.querySelectorAll(".banner span.button");
courseButton=document.querySelectorAll("course span.button");
link=document.querySelectorAll("span.link");
counter=0;

while(editable.length>counter)
    {editable[counter].contentEditable=true;
    editable[counter].spellcheck=false;
    editable[counter].addEventListener("focus",function()
    {if(this.textContent=="Search courses"){this.textContent="";this.classList.add("active");}});
    editable[counter].addEventListener("focusout",function()
    {if(this.textContent==""){this.textContent="Search courses";this.classList.remove("active");}});
    counter+=1;}

counter=0;

while(bannerButton.length>counter)
    {bannerButton[counter].addEventListener("mousedown",function()
    {this.classList.add("mouseDown");});
    bannerButton[counter].addEventListener("mouseup",function()
    {this.classList.remove("mouseDown");});
    bannerButton[counter].addEventListener("mouseover",function()
    {this.classList.add("mouseOver");});
    bannerButton[counter].addEventListener("mouseout",function()
    {this.classList.remove("mouseOver");});
    counter+=1;}

counter=0;

while(courseButton.length>counter)
    {courseButton[counter].addEventListener("mousedown",function()
    {this.classList.add("mouseDown");});
    courseButton[counter].addEventListener("mouseup",function()
    {this.classList.remove("mouseDown");});
    courseButton[counter].addEventListener("mouseover",function()
    {this.classList.add("mouseOver");});
    courseButton[counter].addEventListener("mouseout",function()
    {this.classList.remove("mouseOver");});
    counter+=1;}

link[0].addEventListener("click",()=>
{window.open("https://twitter.com/")});
link[1].addEventListener("click",()=>
{window.open("https://www.youtube.com/")});
link[2].addEventListener("click",()=>
{window.open("https://pinterest.com/")});
