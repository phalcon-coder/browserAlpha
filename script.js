
function handleURLKeyPress(event) {
    if (event.key === 'Enter') {
        const urlInput = document.getElementById('urlInput').value.trim();
        let url;

        // Check if the input includes a protocol
        if (urlInput.startsWith('http://') || urlInput.startsWith('https://')) {
            url = urlInput;
        } else {
            // Assume "https://" and add it to the input
            url = `https://${urlInput}`;
        }

        window.location.href = url;
    }
}

function handleSearchKeyPress(event) {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value.trim();
        const searchURL = `https://search.brave.com/search?q=${encodeURIComponent(searchInput)}`;

        window.location.href = searchURL;
    }
}