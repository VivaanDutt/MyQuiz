class Question {
    constructor() {
        this.title = createElement('h1');
        this.input1 = createInput("Enter your name");
        this.input2 = createInput("Enter your answer");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h5');
        this.option2 = createElement('h5');
    }
    
    hide() {
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display() {
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? " );
        this.question.position(150, 80);
        this.option1.html("1: Everyone" );
        this.option1.position(150, 100);
        this.option2.html("2: Envelope" );
        this.option2.position(150, 120);

        this.input1.position(150, 230);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}
