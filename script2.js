// function updateContent(newText, newImageSrc) {
//     document.getElementById('contentDiv').innerText = newText;
//     document.getElementById('div9Image').src = newImageSrc;
//   }

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the image and text elements
    var mainImage = document.querySelector('.div9 img');
    var mainText = document.querySelector('.div12 #displayedText');

    // Get all the areas in the image map
    var areas = document.querySelectorAll('area');

    // Add click event listeners to each area
    areas.forEach(function (area) {
        area.addEventListener('click', function () {
            // Change the image source and text content based on the data attributes
            var newImageSrc = area.dataset.image;
            var newTextContent = area.dataset.text;

            mainImage.src = newImageSrc;
            mainText.textContent = newTextContent;
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mainImage = document.getElementById('displayedImage');
    var mainText = document.getElementById('displayedText');

    var areas = document.querySelectorAll('area');

    areas.forEach(function (area) {
        area.addEventListener('click', function () {
            var newImageSrc = area.dataset.image;
            var newTextContent = area.dataset.text;

            console.log('Clicked area:', area.alt);
            console.log('New image source:', newImageSrc);
            console.log('New text content:', newTextContent);

            mainImage.src = newImageSrc;
            mainText.textContent = newTextContent;
        });
    });
});
