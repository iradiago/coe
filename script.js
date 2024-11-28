const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchIcon = document.querySelector('#search-icon');
const searchBar = document.querySelector('#search-bar');
const clearSearch = document.querySelector('#clear-search');

// Toggle Hamburger Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle Search Bar
searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

// Clear Search Input
clearSearch.addEventListener('click', () => {
    document.querySelector('#search-input').value = '';
});
<script>
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Toggle search bar visibility
    searchIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
    });

    // Handle search button click
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // Perform search logic (e.g., redirect to a search page or filter content)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    
    });
</script>

