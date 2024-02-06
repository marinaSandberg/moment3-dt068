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

    console.log(screenWidth);
}

function hideLocation () {
    let screenWidth = window.innerWidth;
    let title = document.querySelector(".title");
    
    if (screenWidth < 1000) {
            if (title && !title.classList.contains("hidden")) {
                title.classList.add("hidden");
            }
        }
    else {
            if (title && title.classList.contains("hidden")) {
                title.classList.remove("hidden");
            }
        }
}

function ansokForm () {
    let screenWidth = window.innerWidth;
    let forms = document.querySelectorAll(".this-form");

    forms.forEach(form => {
        if (screenWidth < 1000) {
            if (form.classList.contains("form1")) {
                form.classList.remove("hidden");
            } else {
                form.classList.add("hidden");
            }
        } else {
            if (form.classList.contains("form2")) {
                form.classList.remove("hidden");
            } else {
                form.classList.add("hidden");
            }
        }
    });
        console.log(forms);
}

function infoBlue () {
    let screenWidth = window.innerWidth;
    let blues = document.querySelectorAll(".this-blue");
    
    if (screenWidth > 1500) {
        blues.forEach(blue => {
            if (blue.classList.contains("blue")) {
                blue.classList.remove("blue")
            }
        });
    }
    else {
        blues.forEach(blue => {
            if (blue.classList.contains("this-blue")) {
                blue.classList.add("blue")
            }
        });
    }
}

function onWindowLoad() {
    adjustFooterPosition('main', 'footer');
    addSearchLabel();
    hideLocation();
    infoBlue();
    ansokForm();
}

window.addEventListener('load', onWindowLoad);
  
window.addEventListener('resize', onWindowLoad);


