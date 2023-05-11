document.querySelector(".fx-bt").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
    var x=document.querySelector('emailac').style.offsetWidth;
    console.log(x);
    document.querySelector('.emailac').offsetWidth=2*x;
    document.querySelector('.passwordac').offsetWidth=2*x;
  });
  
document.querySelector("#popup a").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
