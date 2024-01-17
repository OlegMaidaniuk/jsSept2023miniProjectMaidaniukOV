const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetailsContainer = document.getElementById('userDetailsContainer');
        userDetailsContainer.innerHTML = `<p>ID: ${user.id}</p><p>Name: ${user.name}</p><p>Email: ${user.email}</p><p>Phone: ${user.phone}</p>`;
    })
    .catch(error => {
        console.error('Помилка отримання даних:', error);
    });

document.querySelector('.posts-button').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {
            const userDetailsContainer = document.getElementById('userDetailsContainer');
            userDetailsContainer.innerHTML += '<h2>Posts of current user</h2>';

            posts.forEach(post => {
                const postBlock = document.createElement('div');
                postBlock.innerHTML = `<p>${post.title}</p>`;

                const detailsButton = document.createElement('button');
                detailsButton.innerText = 'Details';
                detailsButton.addEventListener('click', () => {
                    window.location.href = `post-details.html?id=${post.id}`;
                });


                postBlock.appendChild(detailsButton);

                userDetailsContainer.appendChild(postBlock);
            });
        })
        .catch(error => {
            console.error('Помилка отримання даних:', error);
        });
});