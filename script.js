function startResizing(e, boxId) {
    e.preventDefault();

    const box = document.getElementById(boxId);
    const originalWidth = box.offsetWidth;
    const originalHeight = box.offsetHeight;
    const originalX = e.clientX;
    const originalY = e.clientY;

    function handleMouseMove(e) {
        const newWidth = originalWidth + (e.clientX - originalX);
        const newHeight = originalHeight + (e.clientY - originalY);

        box.style.width = `${newWidth}px`;
        box.style.height = `${newHeight}px`;
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

function startDragging(e, boxId) {
    e.preventDefault();

    const box = document.getElementById(boxId);
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

function updateContent(imageSrc, textContent) {
    // Update the image source
    document.getElementById('displayedImage').src = imageSrc;
  
    // Update the text content
    document.getElementById('displayedText').textContent = textContent;
  }
