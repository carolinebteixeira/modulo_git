document.addEventListener('DOMContentLoaded', async function () {
    const API_URL = "https://api.github.com/users/carolinebotelhoteixeira";

    const profileName = document.querySelector('.profile-name');
    const profileUsername = document.querySelector('.profile-username');
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileLink = document.querySelector('.profile-link');
    const repoCount = document.querySelector('.numbers-item:nth-child(1)');
    const followersCount = document.querySelector('.numbers-item:nth-child(2)');
    const followingCount = document.querySelector('.numbers-item:nth-child(3)');

    try {

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        
        const data = await response.json();

        profileName.textContent = data.name || 'Usuário sem nome';
        profileUsername.textContent = `@${data.login}`;
        profileAvatar.src = data.avatar_url;
        profileLink.href = data.html_url;
        profileLink.textContent = "Ver no Github";
        repoCount.innerHTML = `<h4>Repositórios</h4>${data.public_repos}`;
        followersCount.innerHTML = `<h4>Seguidores</h4>${data.followers}`;
        followingCount.innerHTML = `<h4>Seguindo</h4>${data.following}`;
    } catch (error) {

        alert("Erro ao buscar os dados do GitHub. Por favor, tente novamente mais tarde.");
        console.error(error);
    }
});
