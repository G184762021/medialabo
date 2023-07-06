// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//  hantei();
 
 let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="kaitou"]');
    let yoso = Number(i.value);
    
    kaisu = kaisu +1;
    let d = document.querySelector('span#aa');
    d.textContent = kaisu;
    let e = document.querySelector('span#yoso');
    e.textContent = yoso;
          

    let f = document.querySelector('p#result');

    if (kaisu < 4) {
    if (kotae>yoso) {
        f.textContent= ('まちがい．答えはもっと大きいですよ');
    } else if (kotae<yoso) {
    f.textContent=('まちがい．答えはもっと小さいですよ');
    } else {
        f.textContent=('正解です．おめでとう!');
    }
 } else {
    f.textContent=('答えは'+ kotae + 'でした．すでにゲームは終わっています');
    }
}