
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];






// Next/previous controls
function plusSlides(n, e) {
    showSlides(slideIndex[e] += n, e);
}




function showSlides(n, e) {
  var i;
  switch (e){
    case (0):
        var slides = document.getElementsByClassName("generalmeeting");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (1):
        var slides = document.getElementsByClassName("bonfire");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (2):
        var slides = document.getElementsByClassName("cnyb");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (3):
        var slides = document.getElementsByClassName("revealing");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (4):
        var slides = document.getElementsByClassName("ultraman");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (5):
        var slides = document.getElementsByClassName("tbanq");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (6):
        var slides = document.getElementsByClassName("culturefest");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case(7):
        var slides = document.getElementsByClassName("whiteelephant");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (8):
        var slides = document.getElementsByClassName("fallsports");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (9):
        var slides = document.getElementsByClassName("winterformal");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (10):
        var slides = document.getElementsByClassName("bonfire");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
    case (11):
        var slides = document.getElementsByClassName("bonfire");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex[e] = 1}
        if (n < 1) {slideIndex[e] = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex[e]-1].style.display = "block";
        dots[slideIndex[e]-1].className += " active";
  }
  
}

