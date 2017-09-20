(function () {
    var theImages = document.querySelectorAll('.image-holder'),
          theHeader = document.querySelectorAll('.header'),
          theSubhead = document.querySelectorAll('.main-copy h2'),
          theSeasonText = document.querySelectorAll('.main-copy p'),
          appliedClass;

          function changeElements() {
            // load dynamic content here
            debugger;
          }

          theImages.forEach(function (element, index) {
            //loop through and do stuff to each element at the top of the page
            element.addEventListener('click', changeElements, false);
          });
})();
