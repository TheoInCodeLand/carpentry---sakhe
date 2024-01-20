document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const list = document.getElementById('featured_designs');
    const items = list.getElementsByTagName('div');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent.toLowerCase();

            if (itemText.includes(searchTerm)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    });
});
