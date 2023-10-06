document.getElementById("prog-1").addEventListener("mouseenter", function(){
    document.getElementById("konten-1").style.display = "none";
    document.getElementById("konten-2").style.display = "flex";
});

document.getElementById("prog-1").addEventListener("mouseleave", function(){
    document.getElementById("konten-1").style.display = "block";
    document.getElementById("konten-2").style.display = "none";
});

document.getElementById("prog-2").addEventListener("mouseenter", function(){
    document.getElementById("konten-3").style.display = "none";
    document.getElementById("konten-4").style.display = "flex";
});

document.getElementById("prog-2").addEventListener("mouseleave", function(){
    document.getElementById("konten-3").style.display = "block";
    document.getElementById("konten-4").style.display = "none";
});