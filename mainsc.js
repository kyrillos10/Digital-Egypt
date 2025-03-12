//   btn scrool 
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
// btn
function goToHome() {
    window.location.href = "index.html"; 
  }
//   btn scrool 
