"use strict"
let tex = document.getElementById('text')
let list = document.getElementsByTagName('li');
let num = 0;

// 初始情况
for (let i = 0; i < 9; i++) {
    list[i].innerHTML = '';
    tex.innerHTML = 'O方出手';
}

// 绑定函数
for (let i = 0; i < 9; i++) {
    list[i].onclick = myFun;
}

// 定义单击响应函数myFun()
function myFun() {
    if (this.innerHTML == '') {
        this.innerHTML = (num % 2 == 0) ? 'O' : 'X';
        num++;
        tex.innerHTML = (num % 2 == 0) ? 'O方出手' : 'X方出手';
    }
    win();
}

// 胜负函数
function win() {
    let arr = [];
    // 每一个li节点的文本转化为数组元素存在arr中
    for (let i = 0; i < 9; i++) {
        arr.push(list[i].innerHTML);
    }

    // O胜
    if (arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O'
        || arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O'
        || arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O'
        || arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O'
        || arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O'
        || arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O'
        || arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O'
        || arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') {
        alert('O方胜利！')
        location.reload();
    }

    // X胜
    else if (arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X'
        || arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X'
        || arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X'
        || arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X'
        || arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X'
        || arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X'
        || arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X'
        || arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') {
        alert('X方胜利！')
        location.reload();
    }
    
    // 平局
    else if (num == 9) {
        alert('平局');
        location.reload();
    }
}

