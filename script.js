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

function addSearchLabel () {
    let screenWidth = window.innerWidth;
    let searchForm = document.querySelector("main > form");
    let existingLabel = searchForm.querySelector("label[for='search']");
    
    if (existingLabel) {
        existingLabel.innerText = (screenWidth > 1000) ? "Sökfunktion" : "";
    } else {
        let searchLabel = document.createElement("label");
        searchLabel.setAttribute("for", "search");
        searchLabel.setAttribute("class", "search");

        searchLabel.innerText = (screenWidth > 1000) ? "Sökfunktion" : "";

        searchForm.insertBefore(searchLabel, searchForm.firstChild);
    }

    console.log(screenWidth, searchForm);
}

function onWindowLoad() {
    adjustFooterPosition('main', 'footer');
    addSearchLabel();
}

window.addEventListener('load', onWindowLoad);
  
window.addEventListener('resize', onWindowLoad);


