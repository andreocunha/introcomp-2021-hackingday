function getUser() {
    let user = document.getElementById('username').value;
    fetch('https://api.github.com/users/' + user)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let card = document.getElementById('card');
        card.innerHTML = `
            <div id="userinfo">        
                <div id="maininfo">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <h2>${data.name}</h2>
                </div>
                <p>username: <b> ${data.login}</b></p>
                <p>descrição: <b> ${data.bio}</b></p>
                <p>endereço: <b> ${data.location}</b></p>
                <p>repositórios públicos: <b> ${data.public_repos}</b></p>
                <p>seguidores: <b> ${data.followers}</b></p>
                <p>seguindo: <b> ${data.following}</b></p>
            </div>
        `;
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
}