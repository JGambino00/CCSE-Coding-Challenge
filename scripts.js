document.addEventListener("DOMContentLoaded", () => {
    const blog = document.getElementById("blog");

    // Fetch data from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            // Populate blog cards with post details
            posts.forEach(post => {
                const card = createBlogCard(post);
                blog.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));

    // Function to create blog cards
    function createBlogCard(post) {
        // Create card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Create card title to append to card element
        const title = document.createElement("h1");
        title.textContent = post.title;

        // Create card body to append to card element
        const body = document.createElement("p");
        body.textContent = post.body;

        // Add the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
        // When the delete button is clicked, remove the child element from blog
        deleteBtn.addEventListener("click", () => deletePost(card));

        // Append body, title and delete button 
        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(deleteBtn);

        return card;
    }

    // Delete function will remove card from horizontal blog
    // Note: Can also use the DELETE route of the JSONPlaceholder to delete a post
    function deletePost(card) {
        blog.removeChild(card);
    }
});