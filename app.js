let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);


let homeScore = {
    
    fetchScore: function (team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-01-19&end_date=2023-01-19&team_ids[]=" + team_id +"")
        .then((data)=>{
            return data.json();
        }).then((completedata)=>{
            console.log(completedata.data[0].home_team_score);
            document.querySelector(".homeScore").innerText = completedata.data[0].home_team_score;
        });


},







search: function () {
    this.fetchScore(document.querySelector(".search").value);
}};

document
.querySelector(".homeButton")
.addEventListener("click", function () {
    homeScore.search();
});



let awayScore = {
    
    fetchScore: function (team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-01-19&end_date=2023-01-19&team_ids[]=" + team_id +"")
        .then((data)=>{
            return data.json();
        }).then((completedata)=>{
            console.log(completedata.data[0].visitor_team_score);
            document.querySelector(".awayScore").innerText = completedata.data[0].visitor_team_score;
        });


},







search: function () {
    this.fetchScore(document.querySelector(".search").value);
}};

document
.querySelector(".awayButton")
.addEventListener("click", function () {
    awayScore.search();
});

var total = awayScore + homeScore;
console.log(total);

