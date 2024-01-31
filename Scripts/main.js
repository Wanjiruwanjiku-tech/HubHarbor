function searchUser() {
    const username = document.getElementById("searchInput").value;

    // Perform GitHub API request using Fetch API
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            // Handle the data and update the DOM
            const resultsContainer = document.getElementById("results");
            resultsContainer.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <img src="${data.avatar_url}" alt="Avatar">
            `;
        })
        .catch(error => console.error("Error fetching data:", error));
}
