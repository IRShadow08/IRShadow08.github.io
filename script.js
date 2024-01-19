window.onload = function() 
{
    var loadingElement = document.getElementById("loading");
    loadingElement.classList.add("hidden");

    // Removes the "hidden" after loading disappears
    setTimeout(function() {
        loadingElement.style.display = "none";
    }, 1000);
};

document.addEventListener('DOMContentLoaded', function () {
    var aboutSection = document.querySelector('.about');
    
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          aboutSection.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(aboutSection);
  });

function copyToClipboard() {
    var textToCopy = document.getElementById("discordId").textContent;
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Discord ID copied to clipboard!");
}