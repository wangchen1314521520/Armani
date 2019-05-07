

//运动封装:

//参数：
//dom对象
//样式属性名
//起始值
//结束值
//方向(1：表示正向，-1：表示反向)
//时间间隔
//步长

function mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func) {
	
	let value = startValue;
	let myTimer = setInterval(function(){
		value = value+direction*step;

		// if(direction>0){
		// 	if(value>endValue){
		// 		value = endValue;
		// 		window.clearInterval(myTimer);
		// 	}
		// }else{
		// 	if(value<endValue){
		// 		value = endValue;
		// 		window.clearInterval(myTimer);
		// 	}
		// }

		// if(direction>0?value>endValue:value<endValue){
		if(Math.abs(value-endValue)<step){
			value = endValue;
			window.clearInterval(myTimer);
			//func&&func();
			if(func){
				func();
			}
		}

		if(attr=="opacity"){
			domObj.style[attr] = value;
		}else{
			domObj.style[attr] = value+"px";
		}		
	},timeSpace);	
}


//参数：
//dom对象
//样式属性名
//结束值
//时间间隔
//步长

function mover02(domObj,attr,endValue,timeSpace,step,func) {
	let startValue = parseInt(getStyle(domObj,attr));
	let direction = startValue-endValue>0?-1:1;

	mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func);
}

//运动三：
// 让某个物体花多长时间从当前位置移动到某个位置
//参数：
//dom对象
//样式属性名
//结束值
//总时长

function mover03(domObj,attr,endValue,timeLong,func) {

	let startValue = parseInt(getStyle(domObj,attr));
	let direction = startValue-endValue>0?-1:1;

	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = Math.abs(startValue-endValue)/stepCount ;//步长 = 路程/步子数

	mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func);
}


//缓冲运动的封装

//参数：
//dom对象
//样式属性名
//起始值
//结束值
//方向(1：表示正向，-1：表示反向)
//时间间隔
//固定值


function mover04(domObj,attr,startValue,endValue,direction,timeSpace,num,func) {
	let value =  startValue;
	let step ;
	let myTimer = setInterval(function(){
		step = (endValue-value)/num;

		value= direction>0?Math.ceil(value+direction*step):Math.floor(value+direction*step);
		
		if(Math.abs(endValue-value)<=step){
			console.log("到头了");
			value = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}

		domObj.style[attr] = value+"px";

	},timeSpace);
	
}
function fadeInOut(domInObj,domOutObj,timeLong,func){

	let timeSpace = 30 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = 1/stepCount ;//步长 = 路程/步子数


	let currOpacity = 0;
	let myTimer = setInterval(()=>{

		currOpacity+=step;

		if(currOpacity>=1){
			currOpacity=1;
			clearInterval(myTimer);
			func&&func();
		}

		domInObj.style.opacity = currOpacity;
		domOutObj.style.opacity = 1-currOpacity;
	},timeSpace);
}
