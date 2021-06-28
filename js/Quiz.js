class Quiz {
    constructor () {

    }

getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data) {
        gameState = data.val();
    })
}

update(state) {
    database.ref('/').update({
    gameState:state
    });
}

    
async start() {
    if(gameState === 0) {
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()) {
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question();
        question.display();
    }
}
    play() {
        question.hide();
        background("blue");
        text("*NOTE: Contestants that answered correct will be highlighted green", 125, 350);
        Contestant.getContestantInfo();
        if(allContestants !== undefined) {
        var displayContestant = 200;
        for (var plr in allContestants) {
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer) {
                fill("green");
            }
            else {
                fill("red");
            }
            displayContestant += 30;
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, displayContestant);
        }
    }
}
}