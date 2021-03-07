/* クリックしたらその回数が表示される
制限時間が設けらて、カウントダウンが表示される。
余力があったらCSSで動作を分かりやすくする */



const button = document.getElementById('button')
var number = document.getElementById('number').textContent

//クリックしたら1ずつ増やす
var settime;
var a = 0;
button.addEventListener('click', () => {

    a++
    document.getElementById('number').innerHTML = a + "回";

})
//riset
const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    document.getElementById('number').innerHTML = 0 + "回";
    limit.textContent = "5"
    button.disabled = false
    clearInterval(settime)
    sec = 5
})

//カウントダウンタイマー
var sec = 5;

const limit = document.querySelector('.limit')
//スタートを押したら起動する
const start = document.getElementById('start')
start.addEventListener('click', () => {
    timelimit();

})

/* 何をしてエラーが起きたのか
書き方 */

const add = 1 + 2;

const timelimit = () => {
    settime = setInterval(function () {
        sec--
        limit.textContent = sec;

        if (sec < 0) {
            limit.textContent = "Finish"
            //clearInterval(timelimit)
            button.disabled = true;
        }
    }, 1000)

}




//どうして関数をそのまま入れるのではなく、変数に入れると動くのか
//変数には実行する力はなく、関数には実行する力があるため