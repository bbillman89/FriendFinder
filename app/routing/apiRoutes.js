var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      
    friendsData.push(req.body);
    res.json(true);

    //Run Comparison here

    let userScoresNumber = [];
    //loop to convert strings to ints
    for (let index of req.body.scores){
      userScoresNumber.push(parseInt(index));
    }

    //loop through each friend in the data file

    //loop through each score per friend
    for (let index of friendsData[0].scores){
      let 
    }

    //console.log(userScoresNumber);
    console.log(friendsData[0].scores);

  });

};
