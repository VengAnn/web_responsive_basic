document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.querySelector('.mode-toggle');
    const htmlElement = document.documentElement;
    const sunIcon = 'ri-sun-line';
    const moonIcon = 'ri-moon-line';

    // Check if a theme is already saved in localStorage
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);

    // Set correct icon based on current theme
    modeToggle.innerHTML = `<i class="${currentTheme === 'light' ? moonIcon : sunIcon}"></i>`;

    // Toggle between light and dark mode
    modeToggle.addEventListener('click', function () {
        const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);

        // Save the selected theme in localStorage
        localStorage.setItem('theme', newTheme);

        // Update the icon
        modeToggle.innerHTML = `<i class="${newTheme === 'light' ? moonIcon : sunIcon}"></i>`;
    });
});