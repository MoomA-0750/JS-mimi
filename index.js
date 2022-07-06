const mimiList = [
    {
        count: '0',
        name: '滅',
        pics: 'Mates/NoInput_Image_0.png'
    }, {
        count: '1',
        name: '独',
        pics: 'Mates/NoInput_Image_1.png'
    }, {
        count: '2',
        name: '双',
        pics: 'Mates/NoInput_Image_2.png'
    }, {
        count: '3',
        name: '美',
        pics: 'Mates/NoInput_Image_3.png'
    }, {
        count: '4',
        name: '余',
        pics: 'Mates/NoInput_Image_4.png'
    }, {
        count: '5',
        name: '伊',
        pics: 'Mates/NoInput_Image_5.png'
    }, {
        count: '6',
        name: '夢',
        pics: 'Mates/NoInput_Image_6.png'
    }, {
        count: '7',
        name: '奈',
        pics: 'Mates/NoInput_Image_7.png'
    }, {
        count: '8',
        name: '夜',
        pics: 'Mates/NoInput_Image_8.png'
    }, {
        count: '9',
        name: '九',
        pics: 'Mates/NoInput_Image_9.png'
    }, 
]

// window.addEventListener('scroll', ()=> {
//     const i = window.pageYOffset;
//     document.getElementById('tastingYScroll').textContent = "YScroll: " + i;
// })


let jMimiCount = 0;

window.onmousewheel = function(){
    const i = event.wheelDelta;
    document.getElementById('tastingWheelDelta').textContent = "WheelD: " + i;

	if(event.wheelDelta > 6){
		//mainCamera.zoomTo(4, 100);
        jMimiCount ++;
        inWheelEvent();
	}else if(event.wheelDelta < -6){
		//mainCamera.zoomTo(1, 100);
        jMimiCount --;
        inWheelEvent();
	}
}



const inWheelEvent = () => {
    document.getElementById('tastingTempMimiCount').textContent = "MimiCount: " + jMimiCount;
    document.getElementById('mimiCount').textContent = mimiList[jMimiCount].count;
    document.getElementById('bgNums').textContent = mimiList[jMimiCount].count;
    document.getElementById('mimiPics').setAttribute('src', mimiList[jMimiCount].pics)
    document.getElementById('mimiName').textContent = mimiList[jMimiCount].name;
}



//すみません、ここコピペしました。。。
// スクロールを禁止にする関数
function disableScroll(event) {
    event.preventDefault();
}

document.getElementById('contPScrollOff').onclick = function() {
    // イベントと関数を紐付け
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.addEventListener('mousewheel', disableScroll, { passive: false });
}

// スクロール解除
document.getElementById('contPScrollOn').onclick = function() {    
    // イベントと関数を紐付け  
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
}

//すみませんリファクタはまた今度やります。。。