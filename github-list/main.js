
(function() {
    const   search = document.getElementById("search");
    const   profile = document.getElementById("profile");
    const url = "https://api.github.com/users";
    const client_id = "528f265c2ff19e351849";
    const client_secrets = "1dba1338a8be4951d36804ac63b0a9c01c89a395";
    
    async function getUser(user) {
        const proflieResponse = await fetch(
            `${url}/${user}?client_id=${client_id}&client_secret=${client_secrets}`
        
        );

        const profile = proflieResponse.json();

        return profile;

    }

    function showProfile(user){
        profile.innerHTML = `<div class="row">
        <div class="col-md-4"> 
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${user.avatar_url}" />
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Repositorio: <span class="badge">${user.public_repos}</span> </li>
                    <li class="list-group-item">Seguidores: <span class="badge">${user.followers}</span></li>
                    <li class="list-group-item">Seguindo: <span class="badge">${user.following}</span></li>
                </ul>
                <div class="card-body">
                    <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">Ver perfil</a>
                </div>
            </div>
        </div>
        <div class="colmd-8"><div id="repos"></div></div>
    </div>`;
    }


    document.addEventListener("input", e => {
        const user = e.target.value;
        getUser(user).then(res => showProfile(res));
    });


})();
