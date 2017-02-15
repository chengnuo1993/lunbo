
//规定好每张图片处于的位置和状态
var states = [
				{ZIndex: 1,width: 120,height: 150,top: 69,left: 134,ZOpacity: 0.2},
				{ZIndex: 2,width: 130,height: 170,top: 59,left: 0,ZOpacity: 0.5},
				{ZIndex: 3,width: 170,height: 218,top: 35,left: 110,ZOpacity: 0.7},
				{ZIndex: 4,width: 224,height: 288,top: 0,left: 263,ZOpacity: 1},
				{ZIndex: 3,width: 170,height: 218,top: 35,left: 470,ZOpacity: 0.7},
				{ZIndex: 2,width: 130,height: 170,top: 59,left: 620,ZOpacity: 0.5},
				{ZIndex: 1,width: 120,height: 150,top: 69,left: 500,ZOpacity: 0.2}
			 ];

var lis =$('#box li');
//让每个 li 对应上面states的每个状态
function move(){
	lis.each(function(index,ele){
		var state = states[index];
		$(this).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
	});
}

//让 li 从正中间展开
move();


//下一张 让轮播图发生偏移
function next(){
	//原理：把数组最后一个元素移到素数的第一个位置  shift删除第一个 返回值为删除的值   push插入到最后位置
	states.push(states.shift());
	move();
	
}


//点击下一张（section）
$('#box .next').click(function(){
	next();
});

//上一张 让轮播图发生偏移
function prev(){
	//原理：把数组最后一个元素移到素数的第一个位置  pop最后删除 返回值为删除的值   unshift插入到第一个位置
	states.unshift(states.pop());
	move();
}


//点击上一张（section）
$('#box .prev').click(function(){
	prev();
});

//自动轮播
var interval = null;
function　autoPlay(){
	interval = setInterval(function(){
		next();
	},1500);
}
autoPlay();

//停止轮播
$('#box li').add('#box section').hover(function(){
	clearInterval(interval);
},function(){
	autoPlay();
});
