


//获取dom对象的样式属性
//参数：
// dom对象
// 样式属性名

//返回值：样式属性值

function getStyle(domObj,attr) {
	if(domObj.currentStyle){//如果能够获取到currentStyle
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}