function getUser() {
    let user = document.getElementById('username').value;

    if(!user){
        return null;
    }

    console.log(user);
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
                <div id="allinfo">
                    <p>username: <b> ${data.login}</b></p>
                    <p>descrição: <b> ${data.bio}</b></p>
                    <p>endereço: <b> ${data.location}</b></p>
                    
                    <div id="numbersinfoarea">
                        <div id="numbersinfo">
                            <p><b>${data.public_repos}</b></p>
                            <p>repositórios</p>
                        </div>

                        <div id="numbersinfo">
                            <p><b>${data.followers}</b></p>
                            <p>seguidores</p>
                        </div>

                        <div id="numbersinfo">
                            <p><b>${data.following}</b></p>
                            <p>seguindo</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    })
    .catch(function (error) {
        console.log("Error: " + error);
    });
}