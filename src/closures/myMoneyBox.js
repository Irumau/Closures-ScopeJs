// function moneyBox(coins){
//     let saveCoins = 0;

//     saveCoins+= coins;

//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);

function moneyBox(){
    let saveCoins = 0;
    return function countCoins(coins, name){
        
        saveCoins+= coins;
        return console.log(`MoneyBox: $${saveCoins}. Propietario: ${name}`);
    }
}

const myMoneyBox = moneyBox();

myMoneyBox(5, 'Luis');
myMoneyBox(10, 'Luis');
myMoneyBox(15, 'Luis');


const moneyBoxAna = moneyBox();

moneyBoxAna(500 ,'Ana');
moneyBoxAna(500 ,'Ana');




function gamesBox(){
    let box = [];
    return {
        addGameToTheBox(myGames){
         box.push(myGames);
        },
        removeGameFromTheBox(){
         return console.log(box.pop());
        },
        showGamesFromTheBox(){
         return console.log(box);
        }
    }
}

const boxOfGames = gamesBox();


boxOfGames.addGameToTheBox('GTA 5');
boxOfGames.addGameToTheBox('GTA 6');
boxOfGames.removeGameFromTheBox();

boxOfGames.showGamesFromTheBox();