function adjustFooterPosition(contentSelector, footerSelector) {
    let contentElement = document.querySelector(contentSelector);
    let footer = document.querySelector(footerSelector);
  
    if (contentElement && footer) {
      let contentHeight = contentElement.offsetHeight;
      let screenHeight = window.innerHeight;

    console.log(contentHeight, screenHeight);

        if (contentHeight < screenHeight) {
            footer.classList.add("bokningar");
        }   
        else {
            footer.classList.remove("bokningar"); 
        }
    }
}

 window.addEventListener('load', function () {
    adjustFooterPosition('main', 'footer');
  });
  
  window.addEventListener('resize', function () {
    adjustFooterPosition('main', 'footer');
  });