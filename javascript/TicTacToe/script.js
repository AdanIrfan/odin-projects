function createBoard(){
    let board = [];

    for(let i = 0; i < 3; i++){
        board[i] = [];
        for(let j = 0; j < 3; j++){
            board[i][j] = "-";
        }
    }

    const displayBoard = () => board;

    const dropToken = (row, column, marker) =>{
        if (board[row][column] === "-"){
            board[row][column] = marker;
            return board;
        }
        else{
            return;
        }
    }
    
    return {displayBoard, dropToken, };
}


const checkWin = (function(){
    const winStatus = (gameBoard ,marker) =>{
        let gameboard = gameBoard.displayBoard();
        if (
        (gameboard[0][0] === marker &&
        gameboard[0][1] === marker &&
        gameboard[0][2] === marker) ||

        (gameboard[1][0] === marker &&
        gameboard[1][1] === marker &&
        gameboard[1][2] === marker) ||

        (gameboard[2][0] === marker &&
        gameboard[2][1] === marker &&
        gameboard[2][2] === marker) ||

        (gameboard[0][0] === marker &&
        gameboard[1][0] === marker &&
        gameboard[2][0] === marker) ||

        (gameboard[0][1] === marker &&
        gameboard[1][1] === marker &&
        gameboard[2][1] === marker) ||

        (gameboard[0][2] === marker &&
        gameboard[1][2] === marker &&
        gameboard[2][2] === marker) ||

        (gameboard[0][0] === marker &&
        gameboard[1][1] === marker &&
        gameboard[2][2] === marker) ||

        (gameboard[0][2] === marker &&
        gameboard[1][1] === marker &&
        gameboard[2][0] === marker)) {
            return true;
        }
        else{
            return false;
        }
    }
    return {winStatus};
})();

const playRound = function(players){
    let activePlayer = players[0];
    const switchActivePlayer = () =>{
        activePlayer = (activePlayer === players[0])? players[1]: players[0];
    }

    const isBoardFull = (Board) => {
        const hasEmptyCell = Board.some(row =>
            row.some(column => column === "-")
        );
        
        return !hasEmptyCell;
    };

    const startRound = () =>{
        activePlayer = players[0];
        let roundWon = false;
        const board = createBoard();
        while(roundWon === false){
            board.displayBoard();
            console.log(`${activePlayer.name} turn to place marker`);
            let row = Number(prompt("Enter the row number:"));
            let column = Number(prompt("Enter the column number:"));
            let newBoard = board.dropToken(row, column, activePlayer.marker);
            if(newBoard === undefined){
                console.log(`Move rejected marker already exist`);
                continue;
            }
            board.displayBoard();
            roundWon = checkWin.winStatus(board, activePlayer.marker);
            if(roundWon === true){
                console.log(`${activePlayer.name} has won the round`);
                activePlayer.score ++;
                console.log(`${activePlayer.name} score:${activePlayer.score}`);
                return;
            }
            let tieStatus = isBoardFull(board);

            if (tieStatus === true) {
            console.log(`Tied Round`);
            console.log(`Better Luck Next Time`);
            return;
        }
            switchActivePlayer();
        }
    }
    return {switchActivePlayer, startRound};
}


const gameController = (function(player1 = "player1", player2 = "player2"){
    let random = Math.floor(Math.random() * 2);
    let marker1;
    let marker2;
    if(random === 1){
        marker1 = "O";
        marker2 = "X";
    }
    else{
        marker1 = "X";
        marker2 = "O";
    }
    
    let players = [
        {
            name:player1,
            marker: marker1,
            score: 0
        },
        {
            name:player2,
            marker: marker2,
            score: 0
        }
    ];

    const round = playRound(players);
    const startGame = ()=>{
        for(let i = 0; i < 3; i++){
            round.startRound();
        }
        if(players[0].score > players[1].score){
            console.log(`${players[0].name} has won the game`);
        }
        else if (players[0].score < players[1].score){
            console.log(`${players[1].name} has won the game`);
        }
        else{
            console.log(`Game is tied`);
        }
        gameRestart();
    }

    const gameRestart = () => {
    let restart = prompt("Do you want to play again? (yes/no)");

    if (restart.toLowerCase() === "yes") {
        players[0].score = 0;
        players[1].score = 0;
        startGame();
    }
    else{
        console("Thanks for playing");
    }
};

    return {players, startGame};
})


gameController.startGame();