var mypro = {};
mypro.imgNo = 4;
var lis = {};
var imgs = {};
var imgsaddress = "";

var box = document.getElementById('box');
var rotation = box.children[0];

rotation.style.position = 'absolute';
rotation.style.width = (mypro.imgNo + 1) * 280 + 'px';
rotation.style.height = 100 + 'px';

// 添加图片
var imgsul = document.createElement('ul');
rotation.appendChild(imgsul);

// 图片地址
for (var i = 0; i < mypro.imgNo; i++) {
	lis[i] = document.createElement('li');
	lis[i].className = 'imgsul';
	lis[i].value = i;
	imgsul.appendChild(lis[i]);
	imgs[i] = document.createElement('img');
	imgsaddress = 'images/lunbotu0' + (i + 1) +'.jpg';
	imgs[i].src = imgsaddress;
	lis[i].appendChild(imgs[i]);
}

// 添加最后一张重复的图片
var lastli = document.createElement('li');
var lastimg = document.createElement('img');
lastli.className = 'imgsul';
lastli.value = 0;
lastimg.src = 'images/lunbotu01.jpg';
imgsul.appendChild(lastli);
lastli.appendChild(lastimg);

// 动态添加数字导航
var imgnav = box.children[2];
imgnav.className = 'imgnav';

var imgnavOl = document.createElement('ol');
imgnav.appendChild(imgnavOl);


for (var i = 0; i < mypro.imgNo; i++){
	lis[i] = document.createElement('li');
	lis[i].innerText = (i + 1);
	lis[i].className = 'imgnav';
	imgnavOl.appendChild(lis[i]);
}