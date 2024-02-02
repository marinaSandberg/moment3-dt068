function adjustFooterPosition(contentSelector, footerSelector) {
    let contentElement = document.querySelector(contentSelector);
    let footer = document.querySelector(footerSelector);
  
    if (contentElement && footer) {
      let contentHeight = contentElement.offsetHeight;
      let screenHeight = window.innerHeight;

        if (contentHeight < screenHeight) {
            footer.classList.add("bokningar");
        }   
        else {
            footer.classList.remove("bokningar"); 
        }
    }
}

function addsearchLabel () {
    let screenWidth = window.innerWidth;
    let searchForm = document.querySelector("main > form");
    let searchLabel = document.createElement("label");
    searchLabel.setAttribute("for", "search");
    console.log(screenWidth, searchForm);
    
    searchLabel.innerText = (screenWidth > 1000) ? "Sök" : "";

    searchForm.appendChild(searchLabel);
}

function onWindowLoad() {
    adjustFooterPosition('main', 'footer');
    addSearchLabel();
}

window.addEventListener('load', onWindowLoad);
  
window.addEventListener('resize', onWindowLoad);


