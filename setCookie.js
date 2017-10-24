function setCookie(name,value,date){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+date);
	document.cookie=name+'='+value+'expire='+date;
}