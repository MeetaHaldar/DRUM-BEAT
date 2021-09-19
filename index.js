var totalLength=document.querySelectorAll(".drum").length;

for(var i=0;i<totalLength;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        alert("i got clicked");
    });
}