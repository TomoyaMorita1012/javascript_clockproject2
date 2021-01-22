'use strict';

function Gettime() {
  // 現在時刻をインスタンス
  let dt = new Date();

  // 時(h)と分(m)の数字をセット
  function timeForSet(timeUnit) {
    // timeには取得した時刻の数字を代入
    // unitは時(h)なのか分(m)なのか判断
    let time, unit;
    if (timeUnit == 'Hours') {
      time = dt.getHours().toString().split('');
      unit = '.h';
    } else if (timeUnit == 'Minutes') {
      time = dt.getMinutes().toString().split('');
      unit = '.m';
    };

    // 時刻が一桁だった場合、先頭に0を追加
    if (time.length == 1) {
      time.unshift('0');
    }

    // 表示する数字のエリアを取得
    let timeWord = document.getElementById(timeUnit + '_number');
    let clock_number = timeWord.getElementsByClassName('clock_number');

    // 配列 time を文字数分処理
    for (let i = 0; i < clock_number.length; i++) {

      // 該当する数字以外のstyleをリセット
      for (let count = 0; count < 10; count++) {
        if (time[i] !== count) {
          let other_Num = clock_number[i].getElementsByClassName(unit + [i] + '_' + count)
          for (let reset = 0; reset < other_Num.length; reset++) {
            other_Num[reset].style.backgroundColor = 'rgb(12,255,0)';
          }
        }
      }

      // 該当する数字のstyleを非表示にさせる処理
      let style_num = clock_number[i].getElementsByClassName(unit + [i] + '_' + time[i]);
      for (let j = 0; j < style_num.length; j++) {
        style_num[j].style.backgroundColor = '#000';
      }
    }
  }

  // 時(h)、分(m)どちらの処理も呼び出す
  timeForSet('Hours');
  timeForSet('Minutes');

  // centerの●を点滅させる処理
  let center = document.getElementsByClassName('center_round');
  for (let i = 0; i < center.length; i++) {
    center[i].classList.toggle('none');
  }
}

// 時間を取得する処理を1秒毎に呼び出す
setInterval(Gettime, 1000);