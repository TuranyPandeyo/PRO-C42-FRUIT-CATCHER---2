class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton("Play");
       this.greeting = createElement("h2");
       this.title = createElement("h2");
       this.reset = createButton("Reset");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("CANDY CATCHER");
        this.title.position(700, 100);
        this.title.style("font-size", "70px");
        this.title.style("color", "skyblue");
        this.input.position(800,400);

        this.button.position(900,500);
        this.button.style("width", "100px");
        this.button.style("height", "40px");
        this.button.style("background", "lightblue");
    

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(800,250);
            this.greeting.style("color", "black");
            this.greeting.style("font-size", "100px");

        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}