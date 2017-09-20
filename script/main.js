
(function () {
    var theImages = document.querySelectorAll('.image-holder'),
          theHeader = document.querySelector('.heading'),
          theSubhead = document.querySelector('.main-copy h2'),
          theSeasonText = document.querySelector('.main-copy p'),
          appliedClass;

          function changeElements() {
            // load dynamic content here
            //debugger;

            let subImages = document.querySelector('.subImagesContainer');
            let objectIndex = dynamicContent[this.id];

            while (subImages.firstChild) {
              subImages.removeChild(subImages.firstChild);
            }

            objectIndex.images.forEach(function(element, index){
                let newSubImg = document.createElement('img');

                newSubImg.classList.add('thumb');
                newSubImg.src = "images/" + objectIndex.images[index];
                subImages.appendChild(newSubImg);

            });

            theSubhead.classList.remove(appliedClass);
            theHeader.classList.remove(appliedClass);

            theSubhead.classList.add(this.id);
            theHeader.classList.add(this.id);

            theSubhead.firstChild.nodeValue = objectIndex.headline;
            theSeasonText.firstChild.nodeValue = objectIndex.text;
          }

          theImages.forEach(function (element, index) {
            //loop through and do stuff to each element at the top of the page
            element.addEventListener('click', changeElements, false);
          });

          //init app

          theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
          theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
          theHeader.classList.add('spring');
})();
