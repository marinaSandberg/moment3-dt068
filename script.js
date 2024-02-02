function adjustFooterPosition(contentSelector, footerSelector) {
    var contentHeight = document.querySelector(contentSelector).offsetHeight;
    var screenHeight = window.innerHeight;
    var footer = document.querySelector(footerSelector);

    console.log(contentHeight, screenHeight);

    if (contentHeight < screenHeight) {
      footer.classList.add("bokningar");
    } else {
      footer.classList.remove("bokningar");
    }
 }

 window.addEventListener('load', function () {
    adjustFooterPosition('main', 'footer');
  });
  
  window.addEventListener('resize', function () {
    adjustFooterPosition('main', 'footer');
  });