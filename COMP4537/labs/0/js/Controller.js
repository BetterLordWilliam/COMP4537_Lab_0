class Controller {
    constructor() {
        console.log('New instance of Controller created');
        this.form = document.querySelector('#numberForm');

        // Add event listeners
    }

    startGame(e) {
        console.log('We are starting the game!');
        console.log(e);
    }
}

export const controller = new Controller();
