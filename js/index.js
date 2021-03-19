console.log('Testing');

document.querySelector('button').addEventListener('click', runGame);

async function runGame(){
    let res = await fetch('/api');
    let coin = await res.json();
    console.log(coin);
    document.querySelector('img').src = `img/${coin.answer}.png`;
    document.querySelector('h3').innerText = `${coin.answer} wins`;
}