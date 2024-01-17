fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        const contain = document.body;
        contain.style.display = 'flex';
        contain.style.width = '100vw';
        contain.style.height = '100vh';
        contain.style.justifyContent = 'center';
        contain.style.alignItems = 'center';
        contain.style.flexWrap = 'wrap';

        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.innerHTML = `<p style="background-color: rgba(175,179,179,0.31)">ID: ${user.id}</p>
            <p style="background-color: darkgrey">Name: ${user.name}</p>`;
            userBlock.style.width = '40%';

            userBlock.style.backgroundColor = '#555977';
            userBlock.style.margin = '10px';
            userBlock.style.border = '2px black solid';
            userBlock.style.borderRadius = '20px';
            userBlock.style.padding = '10px';


            const detailsButton = document.createElement('button');
            detailsButton.style.padding = '5px';
            detailsButton.innerText = 'Details';

            detailsButton.addEventListener('click', () => {
                window.location.href = `user-details.html?id=${user.id}`;
            });
            const postsButton = document.createElement('button');
            postsButton.style.padding = '5px';
            postsButton.innerText = 'Post of current user';
            postsButton.addEventListener('click', () => {
                window.location.href = `user-posts.html?id=${user.id}`;
            });

            userBlock.appendChild(detailsButton);
            userBlock.appendChild(postsButton);
            contain.appendChild(userBlock);
        });
    })
    .catch(error => {
        console.error('Помилка отриманння даних:', error);
    });