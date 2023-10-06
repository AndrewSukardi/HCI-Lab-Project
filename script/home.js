document.getElementById("text-3").addEventListener("mouseenter", function(){
    document.getElementById("konten-2-text1").style.display = "none";
    document.getElementById("konten-2-text2").style.display = "flex";
});

document.getElementById("text-3").addEventListener("mouseleave", function(){
    document.getElementById("konten-2-text2").style.display = "none";
    document.getElementById("konten-2-text1").style.display = "flex";
});


document.getElementById("text-4").addEventListener("mouseenter", function(){
    document.getElementById("konten-2-text3").style.display = "none";
    document.getElementById("konten-2-text4").style.display = "flex";
});

document.getElementById("text-4").addEventListener("mouseleave", function(){
    document.getElementById("konten-2-text3").style.display = "flex";
    document.getElementById("konten-2-text4").style.display = "none";
});

document.getElementById("text-5").addEventListener("mouseenter", function(){
    document.getElementById("konten-2-text5").style.display = "none";
    document.getElementById("konten-2-text6").style.display = "flex";
});

document.getElementById("text-5").addEventListener("mouseleave", function(){
    document.getElementById("konten-2-text5").style.display = "flex";
    document.getElementById("konten-2-text6").style.display = "none";
});

