// Toggle dark mode and store preference
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Apply saved theme on page load
window.onload = function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Toggle job details visibility
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.previousElementSibling;
        if (details.style.display === 'none') {
            details.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            details.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});

// Fetch GitHub repositories
function fetchGitHubRepos() {
    const username = "johnzama"; // Replace with your GitHub username
    const url = `https://api.github.com/users/${username}/repos?sort=updated`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const projectsDiv = document.querySelector('.project-grid');
            data.forEach(repo => {
                if (repo.description) {
                    let projectCard = `
                        <div class="project-card">
                            <h3>${repo.name}</h3>
                            <p>${repo.description}</p>
                            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                        </div>
                    `;
                    projectsDiv.innerHTML += projectCard;
                }
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
}

// Call the function to load projects
fetchGitHubRepos();

