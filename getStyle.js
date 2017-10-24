function getStyle(obj,att){
	return obj.currentStyle?obj.currentStyle[att]:getComputedStyle(obj,false)[att];
}