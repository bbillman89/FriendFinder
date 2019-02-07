var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    let newFriend = req.body;
    let tdValues = [];

    for (let index of friendsData) {
      let comp = index.scores;
      let totalDif = 0;

      for (let i = 0; i < newFriend.scores.length; i++) {
        totalDif += Math.abs(comp[i] - newFriend.scores[i]);
      }

      tdValues.push(totalDif);
    }

    let totalDifComp = tdValues[0];
    
    for (let index of tdValues) {

      if (index < totalDifComp) {
        totalDifComp = index;
      }

    }

    let indexofMatch = tdValues.indexOf(totalDifComp);
    let match = friendsData[indexofMatch];

    friendsData.push(newFriend);
    res.json(match);
      
  });

};
