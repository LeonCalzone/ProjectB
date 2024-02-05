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

//
function startResizing(event, boxId) {
    event.preventDefault();

    const box = document.getElementById(boxId);
    const originalWidth = box.clientWidth;
    const aspectRatio = 1247/711; // Set your desired aspect ratio (width/height)

    function resize(event) {
        const newWidth = originalWidth + event.clientX - event.pageX;

        // Set minimum values for width
        const minWidth = originalWidth;

        // Apply constraints
        const constrainedWidth = Math.max(minWidth, newWidth);

        // Calculate height based on the aspect ratio
        const constrainedHeight = constrainedWidth / aspectRatio;

        // Update dimensions
        box.style.width = constrainedWidth + 'px';
        box.style.height = constrainedHeight + 'px';
    }

    function stopResizing() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
    }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResizing);
}//