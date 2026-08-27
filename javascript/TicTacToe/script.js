// function createBoard(){
//     let board = [];

//     for(let i = 0; i < 3; i++){
//         board[i] = [];
//         for(let j = 0; j < 3; j++){
//             board[i][j] = "-";
//         }
//     }

//     const displayBoard = () => board;

//     const dropToken = (row, column, marker) =>{
//         if (board[row][column] === "-"){
//             board[row][column] = marker;
//             return board;
//         }
//         else{
//             return;
//         }
//     }
    
//     return {displayBoard, dropToken, };
// }


// const checkWin = (function(){
//     const winStatus = (gameBoard ,marker) =>{
//         let gameboard = gameBoard.displayBoard();
//         if (
//         (gameboard[0][0] === marker &&
//         gameboard[0][1] === marker &&
//         gameboard[0][2] === marker) ||

//         (gameboard[1][0] === marker &&
//         gameboard[1][1] === marker &&
//         gameboard[1][2] === marker) ||

//         (gameboard[2][0] === marker &&
//         gameboard[2][1] === marker &&
//         gameboard[2][2] === marker) ||

//         (gameboard[0][0] === marker &&
//         gameboard[1][0] === marker &&
//         gameboard[2][0] === marker) ||

//         (gameboard[0][1] === marker &&
//         gameboard[1][1] === marker &&
//         gameboard[2][1] === marker) ||

//         (gameboard[0][2] === marker &&
//         gameboard[1][2] === marker &&
//         gameboard[2][2] === marker) ||

//         (gameboard[0][0] === marker &&
//         gameboard[1][1] === marker &&
//         gameboard[2][2] === marker) ||

//         (gameboard[0][2] === marker &&
//         gameboard[1][1] === marker &&
//         gameboard[2][0] === marker)) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     return {winStatus};
// })();

// const playRound = function(players){
//     let activePlayer = players[0];

//     const getActivePlayer = ()=> activePlayer;
//     const switchActivePlayer = () =>{
//         activePlayer = (activePlayer === players[0])? players[1]: players[0];
//     }

//     const isBoardFull = (Board) => {
//         const hasEmptyCell = Board.some(row =>
//             row.some(column => column === "-")
//         );
        
//         return !hasEmptyCell;
//     };

//     let board;
//     const startRound = () =>{
//         activePlayer = players[0];
//         let roundWon = false;
//         board = createBoard();
//         while(roundWon === false){
//             board.displayBoard();
//             console.log(`${activePlayer.name} turn to place marker`);
//             let row = Number(prompt("Enter the row number:"));
//             let column = Number(prompt("Enter the column number:"));
//             let newBoard = board.dropToken(row, column, activePlayer.marker);
//             if(newBoard === undefined){
//                 console.log(`Move rejected marker already exist`);
//                 continue;
//             }
//             board.displayBoard();
//             roundWon = checkWin.winStatus(board, activePlayer.marker);
//             if(roundWon === true){
//                 console.log(`${activePlayer.name} has won the round`);
//                 activePlayer.score ++;
//                 console.log(`${activePlayer.name} score:${activePlayer.score}`);
//                 return;
//             }
//             let tieStatus = isBoardFull(board.displayBoard());

//             if (tieStatus === true) {
//             console.log(`Tied Round`);
//             console.log(`Better Luck Next Time`);
//             return;
//         }
//             switchActivePlayer();
//         }
//     }

//     const getBoard = ()=> board;

//     return {getActivePlayer, switchActivePlayer, startRound, getBoard};
// }


// const gameController = (function(player1 = "player1", player2 = "player2"){
//     let random = Math.floor(Math.random() * 2);
//     let marker1;
//     let marker2;
//     if(random === 1){
//         marker1 = "O";
//         marker2 = "X";
//     }
//     else{
//         marker1 = "X";
//         marker2 = "O";
//     }
    
//     let players = [
//         {
//             name:player1,
//             marker: marker1,
//             score: 0
//         },
//         {
//             name:player2,
//             marker: marker2,
//             score: 0
//         }
//     ];

//     const round = playRound(players);
//     const startGame = ()=>{
//         for(let i = 0; i < 3; i++){
//             round.startRound();
//         }
//         if(players[0].score > players[1].score){
//             console.log(`${players[0].name} has won the game`);
//         }
//         else if (players[0].score < players[1].score){
//             console.log(`${players[1].name} has won the game`);
//         }
//         else{
//             console.log(`Game is tied`);
//         }
//         gameRestart();
//     }

//     const gameRestart = () => {
//     let restart = prompt("Do you want to play again? (yes/no)");

//     if (restart.toLowerCase() === "yes") {
//         players[0].score = 0;
//         players[1].score = 0;
//         startGame();
//     }
//     else{
//         console("Thanks for playing");
//     }
// };

//     return {players, startGame};
// })();


// function displayController(){
//     const boardDiv = document.querySelector(".board");
//     const playerTurnDiv = document.querySelector(".turn");

//     const updateScreen = ()=>{
//         playerTurnDiv.textContent = " "; 
        
//         const activePlayer = gameController.getActivePlayer();
//         const board = gameController.getBoard();

//         playerTurnDiv.textContent = `${activePlayer}'s turn`;

//         board.forEach((row) =>{
//             row.forEach((column, index) => {
//                 const btn = document.createElement("button");
//                 btn.classList.add("cell");
//                 btn.dataset.row.column = index;
//                 btn.textContent = activePlayer.getValue();
//                 boardDiv.appendChild(btn);
//                 btn.addEventListener("click", ()=> clickHandlerBoard(btn));
//             });
//         });
//     }
//     const clickHandlerBoard = (e)=>{
//         let selectedCell = e.target.dataset.column;

//         if(!selectedCell) return;

        
//         gameController.startGame();
//         updateScreen();
//     }
// }

// displayController();

function createBoard() {
    let board = [];

    for (let i = 0; i < 3; i++) {
        board[i] = [];

        for (let j = 0; j < 3; j++) {
            board[i][j] = "-";
        }
    }

    const displayBoard = () => board;

    const dropToken = (row, column, marker) => {
        if (board[row][column] === "-") {
            board[row][column] = marker;
            return true;
        }

        return false;
    };

    return {
        displayBoard,
        dropToken
    };
}


const checkWin = (function () {

    const winStatus = (gameBoard, marker) => {

        const board = gameBoard.displayBoard();

        if (
            // rows
            (board[0][0] === marker &&
             board[0][1] === marker &&
             board[0][2] === marker) ||

            (board[1][0] === marker &&
             board[1][1] === marker &&
             board[1][2] === marker) ||

            (board[2][0] === marker &&
             board[2][1] === marker &&
             board[2][2] === marker) ||

            // columns
            (board[0][0] === marker &&
             board[1][0] === marker &&
             board[2][0] === marker) ||

            (board[0][1] === marker &&
             board[1][1] === marker &&
             board[2][1] === marker) ||

            (board[0][2] === marker &&
             board[1][2] === marker &&
             board[2][2] === marker) ||

            // diagonals
            (board[0][0] === marker &&
             board[1][1] === marker &&
             board[2][2] === marker) ||

            (board[0][2] === marker &&
             board[1][1] === marker &&
             board[2][0] === marker)
        ) {
            return true;
        }

        return false;
    };

    return { winStatus };

})();


const playRound = function (players) {

    let activePlayer = players[0];
    let board;

    const getActivePlayer = () => activePlayer;

    const getBoard = () => board;

    const switchActivePlayer = () => {
        activePlayer =
            activePlayer === players[0]
                ? players[1]
                : players[0];
    };

    const isBoardFull = () => {

        const currentBoard = board.displayBoard();

        const hasEmptyCell = currentBoard.some(row =>
            row.some(cell => cell === "-")
        );

        return !hasEmptyCell;
    };


    // Starts ONE round
    const startRound = () => {

        activePlayer = players[0];

        board = createBoard();
    };


    // Makes ONE move
    const makeMove = (row, column) => {

        const moveSuccessful =
            board.dropToken(
                row,
                column,
                activePlayer.marker
            );

        if (!moveSuccessful) {
            return "invalid";
        }


        // Check winner
        if (
            checkWin.winStatus(
                board,
                activePlayer.marker
            )
        ) {

            activePlayer.score++;

            return "win";
        }


        // Check tie
        if (isBoardFull()) {
            return "tie";
        }


        // Continue game
        switchActivePlayer();

        return "continue";
    };


    return {
        getActivePlayer,
        getBoard,
        startRound,
        makeMove
    };
};


const gameController = (function (
    player1 = "player1",
    player2 = "player2"
) {

    let random = Math.floor(Math.random() * 2);

    let marker1;
    let marker2;

    if (random === 1) {
        marker1 = "O";
        marker2 = "X";
    } else {
        marker1 = "X";
        marker2 = "O";
    }


    const players = [
        {
            name: player1,
            marker: marker1,
            score: 0
        },
        {
            name: player2,
            marker: marker2,
            score: 0
        }
    ];


    const round = playRound(players);

    let currentRound = 0;
    const totalRounds = 3;


    const startGame = () => {

        currentRound = 0;

        players[0].score = 0;
        players[1].score = 0;

        startNextRound();
    };


    const startNextRound = () => {

        if (currentRound >= totalRounds) {

            endGame();

            return;
        }

        currentRound++;

        console.log(
            `Starting Round ${currentRound}`
        );

        round.startRound();
    };


    const endGame = () => {

        if (players[0].score > players[1].score) {

            console.log(
                `${players[0].name} won the game!`
            );

        } else if (players[1].score > players[0].score) {

            console.log(
                `${players[1].name} won the game!`
            );

        } else {

            console.log("The game is tied!");
        }
    };


    const restartGame = () => {

        currentRound = 0;

        players[0].score = 0;
        players[1].score = 0;

        startNextRound();
    };


    const getRound = () => round;

    const getCurrentRound = () => currentRound;

    return {
        players,
        startGame,
        restartGame,
        startNextRound,
        getRound,
        getCurrentRound
    };

})();


const displayController = (function () {

    const boardDiv =
        document.querySelector(".board");

    const playerTurnDiv =
        document.querySelector(".turn");

    const startButton =
        document.querySelector(".start");

    const restartButton =
        document.querySelector(".restart");

    const roundDiv =
        document.querySelector(".round");

    const scoreDiv =
        document.querySelector(".score");


    const round =
        gameController.getRound();


    const updateScreen = () => {

        boardDiv.textContent = "";

        const board =
            round.getBoard().displayBoard();

        const activePlayer =
            round.getActivePlayer();


        playerTurnDiv.textContent =
            `${activePlayer.name}'s turn`;


        roundDiv.textContent =
            `Round ${gameController.getCurrentRound()} / 3`;


        scoreDiv.textContent =
            `${gameController.players[0].name}: ${gameController.players[0].score}
             |
             ${gameController.players[1].name}: ${gameController.players[1].score}`;


        board.forEach((row, rowIndex) => {

            row.forEach((cell, columnIndex) => {

                const button =
                    document.createElement("button");

                button.classList.add("cell");

                button.dataset.row = rowIndex;

                button.dataset.column = columnIndex;


                if (cell !== "-") {
                    button.textContent = cell;
                }


                button.addEventListener(
                    "click",
                    handleCellClick
                );


                boardDiv.appendChild(button);
            });

        });

    };


    const handleCellClick = (event) => {

        const row =
            Number(event.target.dataset.row);

        const column =
            Number(event.target.dataset.column);


        const result =
            round.makeMove(row, column);


        if (result === "invalid") {

            console.log(
                "That position is already taken."
            );

            return;
        }


        updateScreen();


        if (result === "win") {

            playerTurnDiv.textContent =
                `${round.getActivePlayer().name} won the round!`;

            setTimeout(() => {

                gameController.startNextRound();

                updateScreen();

            }, 1000);

            return;
        }


        if (result === "tie") {

            playerTurnDiv.textContent =
                "Round tied!";

            setTimeout(() => {

                gameController.startNextRound();

                updateScreen();

            }, 1000);

            return;
        }

    };


    startButton.addEventListener(
        "click",
        () => {

            gameController.startGame();

            updateScreen();
        }
    );


    restartButton.addEventListener(
        "click",
        () => {

            gameController.restartGame();

            updateScreen();
        }
    );


})();