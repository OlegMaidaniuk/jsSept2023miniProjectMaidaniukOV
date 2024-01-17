fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        const postDetailsContainer = document.getElementById('postDetailsContainer');
        postDetailsContainer.innerHTML = `<h2>${post.title}</h2>
        <p>ID: ${post.id}</p><p>User ID: ${post.userId}</p><p>${post.body}</p>`;

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => {
                postDetailsContainer.innerHTML = '<h3>Comments</h3>';

                comments.forEach(comment => {
                    postDetailsContainer.innerHTML +=`<p><strong>${comment.name}</strong> 
                    (${comment.email}):${comment.body}</p>`;
                });

            })
            .catch(error => {
                console.error('Помилка отримання коментарів:', error);
            });
    })

    .catch(error => {
        console.error('Помилка отримання даних:', error);
    });

document.querySelector('.details-button')
    .addEventListener('click', () => {
    window.location.href = `user-details.html?id=${userId}`;
});