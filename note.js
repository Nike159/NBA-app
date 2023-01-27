let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);


let homeScore = {
    
    fetchScore: function (team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-01-25&end_date=2023-01-25&team_ids[]=" + team_id +"")
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
        fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-01-25&end_date=2023-01-25&team_ids[]=" + team_id +"")
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

let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);
let homeS = 0;
let awayS = 0;


let totalScore = {
    
    homeScore: function (team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-01-25&end_date=2023-01-25&team_ids[]=" + team_id +"")
        .then((data)=>{
            return data.json();
        }).then((completedata)=>{
            this.homeS = completedata.data[0].home_team_score;
            console.log(completedata.data[0].home_team_score);
            document.querySelector(".homeScore").innerText = completedata.data[0].home_team_score;
        });
        


},

    hsearch: function () {
        this.homeScore(document.querySelector(".search").value);
},

    awayScore: function (team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=2023-01-25&end_date=2023-01-25&team_ids[]=" + team_id +"")
        .then((data)=>{
            return data.json();
        }).then((completedata)=>{
            this.awayS = completedata.data[0].visitor_team_score;
            console.log(completedata.data[0].visitor_team_score);
            document.querySelector(".awayScore").innerText = completedata.data[0].visitor_team_score;
        });
    },
    search: function () {
        this.awayScore(document.querySelector(".search").value);
        
    },

    

    score: function () {
        var total = 0;
        var total = this.homeS + this.awayS;
        document.querySelector("#total").innerText = total;
    }


    
};

document
.querySelector(".homeButton")
.addEventListener("click", function () {
    homeScore.search();
});

document
.querySelector(".awayButton")
.addEventListener("click", function () {
    totalScore.search();
});




