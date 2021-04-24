class Question {
    constructor() {
        this.title = createElement('h1');
        this.input1 = createInput("Enter your name");
        this.input2 = createInput("Enter your answer");
        this.button = createButton('Submit')
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
        this.option1.html("1: Everyone " );
        this.option1.position(150, 100);
        this.option2.html("2: Envelope" );
        this.option2.position(150, 120);

        this.input1.position(150, 230);
    }
}