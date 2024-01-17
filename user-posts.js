const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Використовуємо ID для отримання всіх постів користувача
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        const userPostsContainer = document.getElementById('userPostsContainer');

        userPostsContainer.innerHTML = '<h2 style="width:100vw">User Posts</h2>';

        userPostsContainer.style.color = 'darkgray';
        userPostsContainer.style.backgroundColor = 'blue';
        userPostsContainer.style.columnGap = '10px';
        userPostsContainer.style.rowGap = '10px';

        userPostsContainer.style.display = 'flex';
        userPostsContainer.style.justifyContent = 'center';


        userPostsContainer.style.flexWrap = 'wrap';
        userPostsContainer.style.width = '100%';
        userPostsContainer.style.marginBottom = '15px';




        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.style.backgroundColor = 'yellow';
            postBlock.style.width = '19%';
            postBlock.innerHTML = `<h3 style="background-color: rgba(0,128,0,0.66)">${post.title}</h3>
            <p>${post.body}</p>`;

            userPostsContainer.appendChild(postBlock);
        });


    })
    .catch(error => {
        console.error('Помилка отримання даних:', error);
    });

// Додаємо обробник події для кнопки "Back to User Details"
document.querySelector('.details-button')
    .addEventListener('click', () => {
        // Переадресовуємо на сторінку "user-details.html" з параметрами ID користувача
        window.location.href = `user-details.html?id=${userId}`;
    });