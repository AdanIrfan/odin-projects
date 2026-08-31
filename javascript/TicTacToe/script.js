// function createBoard(){
//     let board = [];

//     for (let i = 0 ; i < 3; i++){
//         board[i] = [];
//         for (let j = 0; j < 3; j++){
//             board[i][j] = "-";
//         }
//     }

//     const displayBoard = ()=> board;

//     const dropToken = (row, column , marker) => {
//         if(board[row][column] === "-"){
//             board[row][column] = marker;
//             return true;
//         }
//         return false;
//     }

//     return {displayBoard, dropToken};
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


// const playRound = (player){
//     let activePlayer;
//     let board;
//     const getActivePlayer = ()=> activePlayer;

//     const switchActivePlayer = ()=>{
//         activePlayer = activePlayer === player[0]? player[1]: player[0];
//     }

//     const getBoard = ()=> board;

//     const startRound = ()=>{
//         activePlayer = player[0];
//         board = createBoard();
//     }

//     const isBoardFull = () =>{
//         const currentBoard = board.displayBoard();
//         let hasEmptyCell = currentBoard.some((row) =>{
//             return row.some((column) =>{
//                 return column === "-";
//             })
//         })
//         return !hasEmptyCell;
//     }

//     const nextMove = (row, column) =>{
//         const successfulMove = board.dropToken(row, column, activePlayer.marker);

//         if (!successfulMove){
//             return "invalid";
//         }

//         if(checkWin.winStatus(board, activePlayer.marker)){
//             return "win"
//         }

//         if(isBoardFull()){
//             return "tie";
//         }

//         switchActivePlayer();
//         return 'continue';
//     }

//     return {getBoard, getActivePlayer, startRound, nextMove };
// }

// const gameController = (function(player1 = "player1", player2 ="player2"){
//     let marker1;
//     let marker2;
//     let random = Math.floor(Math.random() * 2);
//     if(random == 0){
//         marker1 = "X";
//         marker2 = "O";
//     }
//     else{
//         marker1 = "O";
//         marker2 = "X";
//     }
//     const players = [{
//         player: player1,
//         score: 0,
//         marker: marker1
//     },
//     {
//         player: player2,
//         score: 0,
//         marker: marker2
//     }];

//     let currentRound = 0;
//     const totalRound = 3;

//     const getCurrentRound =()=> currentRound;

//     const getRound = ()=> round;

//     const startGame =()=>{
//         currentRound = 0;
//         players[0].score = 0;
//         players[1].score = 0;

//         startNextRound();
//     }

//     const round = playRound(players);

//     let startNextRound =()=>{
//         if(currentRound >= totalRound){
//             endGame();
//             return;
//         }

//         currentRound++;
//         console.log(`CurrentRound is : ${currentRound}/3`);
//         round.startRound();
//     }

//     const endGame = ()=>{
//         if(players[0].score > players[1].score){
//             console.log(`${players[0].player} has Won the game`);
//         }
//         else if(players[1].score > players[0].score){
//             console.log(`${players[1].player} has won the game`);
//         }
//         else{
//             console.log("Tied Game");
//         }
//     }

//     const restartGame = ()=>{
//         players[0].score = 0;
//         players[1].score = 0;
//         currentRound = 0;

//         startNextRound();
//     }

//     return {players, getRound, getCurrentRound , startGame, endGame, restartGame, startNextRound};
// })();

// const displayController = (function(){
//     const  turnDiv = document.querySelector(".turn");
//     const roundDiv = document.querySelector(".round");
//     const scoreDiv = document.querySelector(".score");
//     const boardDiv = document.querySelector(".board");
//     const startBtn = document.querySelector(".start");
//     const restartBtn = document.querySelector(".restartBtn");

//     const round = gameController.getRound();

//     function UpdateScreen(){
//         let activePlayer = round.getActivePlayer();
//         let board = round.getBoard().displayBoard();

//         boardDiv.textContent = "";

//         turnDiv.textContent = `${activePlayer.name} turn's`;

//         roundDiv.textContent = `Round ${gameController.getCurrentRound()}/3`;

//         scoreDiv.textContent = `${gameController.players[0].player} score's : ${gameController.player[0].score} /
//         ${gameController.players[1].player} score's : ${gameController.players[1].score}`


//         board.forEach((row , rowIndex) => {
//             row.forEach((cell, columnIndex) =>{
//                 const btn = document.createElement("button");
//                 btn.classList.add("cell");
//                 btn.dataset.row = rowIndex;
//                 btn.dataset.column = columnIndex;
                
//                 if(cell !== "-"){
//                     btn.textContent = cell;
//                 }

//                 btn.addEventListener("click", handleCellClick);
                
//                 boardDiv.appendChild(btn);
//             })
//         });
//     }
        

//         function handleCellClick(e){
//             let row = Number(e.target.dataset.row);
//             let column = Number(e.target.dataset.column);

//             const result = round.nextMove(row, column);
//             if (result === "invalid"){
//                 console.log(`Cell is already occupied`);
//                 return;
//             }
//             if(result === "win"){
//                 turnDiv.textContent = `${activePlayer.player} has won the Round`;
//                 setTimeout(() =>{
//                     UpdateScreen()
//                     gameController.startNextRound();
//                 }, 1000)
//             }

//             if(result === "tie"){
//                 turnDiv.textContent = `Round is Tied`
//                 setTimeout(() =>{
//                     UpdateScreen()
//                     gameController.startNextRound();
//                 }, 1000)
//             }
//         }

//         startBtn.addEventListener("click", ()=>{
//             gameController.startGame();
//             UpdateScreen();
//         })

//         restartBtn.addEventListener("click", ()=>{
//             gameController.restartGame();
//             UpdateScreen();
//         })

// })();



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