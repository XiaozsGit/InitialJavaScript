var temp = 0;
var timeIndex = 0;
var direction = true;
var times = 4000;

var arr = box.children[1];
var arrleft = arr.children[0];
var arrright = arr.children[1];
var imgIndex = 0;

// 前进或后退一步
function timeRotaion() {
	
	var timer = setInterval(function() {

		temp = rotation.offsetLeft;
		if(direction) {
			temp -= 10;
		}else {
			if(!rotation.style.left | (rotation.style.left === 0 + 'px')) {
				temp = -(mypro.imgNo * 280);
				rotation.style.left = temp + 'px';
				temp += 10;
			}else {
				temp += 10;
			}

		}
		rotation.style.left = temp + 'px';
		timeIndex++;
		if (timeIndex > 27) {
			timeIndex = 0;
			direction = true;
			
			clearInterval(timer);
			if ((rotation.style.left === -(mypro.imgNo * 280) + 'px') && direction) {
				temp = 0;
				rotation.style.left = temp + 'px';
			}

			// 设置数字导航高亮	
			for (var j = 0; j < 4; j++) {
				imgnavOl.children[j].className = 'imgnav';
			}
			imgIndex = Math.abs(-rotation.offsetLeft / 280);
			imgnavOl.children[imgIndex].className = 'lighten' + ' ' + 'imgnav';
		}
	},30);

}

// 点击左右切换事件
function goStap(e) {

	// 计时器用于实时判断上一个轮播什么时候结束
	var temp = setInterval(function() {
		if (timeIndex === 0) {

			clearInterval(timerId);
			if(e.srcElement.id === 'right') {direction = false;};
			timeRotaion();
			timerId = setInterval(timeRotaion,times);
			clearInterval(temp);
		}
	},30);

}

// 点击数字导航
function goimg(e) {

	var con = 0;
	// 计时器用于实时判断上一个轮播什么时候结束
	var temp2 = setInterval(function() {
		if (timeIndex === 0) {

			clearInterval(timerId);
			con = e.srcElement.innerText - imgIndex - 1;
			if (con <= 0){
				con = mypro.imgNo + con;
			}
			for (var i = 0; i < con; i++){
				timeRotaion();
			}
			timerId = setInterval(timeRotaion,times);
			clearInterval(temp2);
		}
	},30);
	
}

imgnavOl.children[0].className = 'lighten' + ' ' + 'imgnav';
var timerId = setInterval(timeRotaion,times);
arr.addEventListener("click", goStap);
imgnavOl.addEventListener("click", goimg);