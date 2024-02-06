// window.onload = function () {
//     makeResizableDiv(document.getElementById('casefile'));
// };

// function makeResizableDiv(div) {
//     const resizer = document.createElement('div');
//     resizer.className = 'resizer';
//     div.appendChild(resizer);

//     let offsetX, offsetY;
//     let isResizing = false;

//     resizer.addEventListener('mousedown', (e) => {
//         e.preventDefault();
//         isResizing = true;
//         offsetX = e.clientX - div.offsetWidth;
//         offsetY = e.clientY - div.offsetHeight;

//         document.addEventListener('mousemove', handleResize);
//         document.addEventListener('mouseup', stopResize);
//     });

//     function handleResize(e) {
//         if (isResizing) {
//             const width = e.clientX - offsetX;
//             const height = e.clientY - offsetY;

//             div.style.width = `${width}px`;
//             div.style.height = `${height}px`;
//         }
//     }

//     function stopResize() {
//         isResizing = false;
//         document.removeEventListener('mousemove', handleResize);
//         document.removeEventListener('mouseup', stopResize);
//     }
// }




function toggleBoxes(boxIds, show) {
    boxIds.forEach(function(boxId) {
        const box = document.getElementById(boxId);
        box.style.display = show ? 'block' : 'none';
    });
}

let zIndexCounter = 1;

function startDragging(e, boxId) {
    e.preventDefault();

    const box = document.getElementById(boxId);

    // Bring the clicked box to the top of the z-axis
    box.style.zIndex = zIndexCounter++;

    const offsetX = e.clientX - box.getBoundingClientRect().left;
    const offsetY = e.clientY - box.getBoundingClientRect().top;

    function handleMouseMove(e) {
        box.style.left = e.clientX - offsetX + 'px';
        box.style.top = e.clientY - offsetY + 'px';
    }

    function handleMouseUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function toggleBox(boxId, show) {
    const box = document.getElementById(boxId);
    box.style.display = show ? 'block' : 'none';
}

document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('fixed-box') || e.target.closest('.fixed-box')) {
        // If the clicked element or its ancestor is a fixed-box, start dragging
        const box = e.target.closest('.fixed-box');
        startDragging(e, box.id);
    }
});



document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('fixed-box-header')) {
        const box = e.target.parentNode;
        if (activeBox !== box) {
            // Only start dragging if the header of a different box is clicked
            startDragging(e, box.id);
        }
    }
});


function toggleBoxes(boxIds, show) {
    console.log('Clicked on icon');
    boxIds.forEach(function(boxId) {
        const box = document.getElementById(boxId);
        box.style.display = show ? 'block' : 'none';
    });
}


function updateContent(imageSrc, textContent) {
    // Update the image source
    document.getElementById('displayedImage').src = imageSrc;
  
    // Update the text content
    document.getElementById('displayedText').textContent = textContent;
  }

  function toggleBox(boxId, show) {
    console.log('Toggling box:', boxId);
    const box = document.getElementById(boxId);
    box.style.display = show ? 'block' : 'none';
}

function toggleBoxes(boxIds, show) {
    console.log('Toggling boxes:', boxIds);
    boxIds.forEach(function(boxId) {
        const box = document.getElementById(boxId);
        box.style.display = show ? 'block' : 'none';
    });
}

function stopPropagation(event) {
    event.stopPropagation();
}

// Add click event listeners to the images
document.querySelector('.notebox-open img').addEventListener('click', function (event) {
    event.stopPropagation();
    toggleBox('notebox', true);
});

document.querySelector('.box-open img').addEventListener('click', function (event) {
    event.stopPropagation();
    toggleBoxes(['box3', 'box4', 'box5'], true);
});
