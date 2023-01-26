.then(response => response.json())
.then(data => console.log(data.data[0].home_team_score)) 
fetch("https://www.balldontlie.io/api/v1/games?start_date=" + currentDate + "&end_date=" + currentDate + "&team_ids[]=" + team_id +"")
document.querySelector(".homeScore").innerText = score;