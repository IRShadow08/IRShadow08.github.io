window.onload = function() 
{
    var loadingElement = document.getElementById("loading");
    loadingElement.classList.add("hidden");

    // Removes the "hidden" after loading disappears
    setTimeout(function() {
        loadingElement.style.display = "none";
    }, 1000);
};