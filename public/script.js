document.getElementById('createCollage').addEventListener('click', function() {
    const input = document.getElementById('imageInput');
    const collage = document.getElementById('collage');
    collage.innerHTML = ''; // Clear previous collage

    for (const file of input.files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            collage.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});