document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.getElementById('main-content');
    const workItems = document.querySelectorAll('.work-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    workItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            showProjectDetails(projectId);
        });
    });

    function showPage(page) {
        // Hide all sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        document.getElementById(page).style.display = 'block';

        // Update URL without reloading the page
        if (page === 'home') {
            history.pushState(null, '', './');
        } else {
            history.pushState(null, '', '#' + page);
        }
    }

    function showProjectDetails(projectId) {
        document.querySelectorAll('.project-detail').forEach(el => el.style.display = 'none');
        document.getElementById(projectId).style.display = 'block';
        showPage('project-details');
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.slice(1);
        const page = hash || 'home';
        showPage(page);
    });

    // Show initial page based on URL
    const hash = window.location.hash.slice(1);
    const initialPage = hash || 'home';
    showPage(initialPage);
});