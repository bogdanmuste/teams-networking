let allTeams = [];

function getHtmlTeams(teams) {
    teams.map(team => {
    return `tr>
        <td>${team.meambers}</td>
        <td>${team,name}</td>
        <td>${team.url}</a></td>
    </tr>`
})
}

function showTeams(teams) {
    const html = getHtmlTeams(teams)

    const tbody = document.querySelector("tbody");
    tbody.innerHTML = html;
}

fetch("teams.json")
    .then(r => r.json())
    .then(teams => {
        
        allTeams = teams;
        showTeams(teams);
    });


