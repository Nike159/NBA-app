let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate);
let homeS = 0;
let awayS = 0;
var test = 200;


    
    function homeScore(team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=02-01-2023&end_date=02-01-2023&team_ids[]=" + team_id +"")
        .then((data)=>{
            return data.json();
        }).then((completedata)=>{
            this.homeS = completedata.data[0].home_team_score;
            console.log(completedata.data[0].home_team_score);
            document.querySelector(".homeScore").innerText = completedata.data[0].home_team_score;
        });
        


};

     function hsearch() {
        this.homeScore(document.querySelector(".hsearch").value);
     };

    function awayScore(team_id) {
        fetch("https://www.balldontlie.io/api/v1/games?start_date=" + currentDate +"&end_date=" + currentDate + "&team_ids[]=" + team_id +"")
        .then((data)=>{
            return data.json();
        }).then((completedata)=>{
            console.log(completedata.data[0].visitor_team_score);
            this.awayS = completedata.data[0].visitor_team_score;
            document.querySelector(".awayScore").innerText = completedata.data[0].visitor_team_score;
        });
    };
    function asearch() {
        this.awayScore(document.querySelector(".asearch").value);
        
    };

    

    function score() {
        var total= 0;
        var total = this.homeS + this.awayS;
        document.querySelector("#total").innerText = total;
    };


    

setInterval(asearch, 30000);
setInterval(hsearch, 30000);
setInterval(score, 30000);







document
.querySelector(".hsearch")
.addEventListener("click", function () {
    hsearch();
});


document
.querySelector(".asearch")
.addEventListener("click", function () {
    asearch();
});



document
.querySelector(".scoreButton")
.addEventListener("click", function () {
    score();
});









    

