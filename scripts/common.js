//document.onkeydown = function() {
//	if (event.keyCode == 116) {
//		event.keyCode = 0;
//		event.returnValue = false;
//	}
//}
//document.oncontextmenu = function() {
//	event.returnValue = false;
//}
$(document).ready(function() {
	$("a").attr("hidefocus","true");
	//StartupPage_InitLink();
});
//=============================================
function StartupPage_InitLink()
{
	$("a").each(function(){
		var obj=$(this);
		var tit=obj.attr('title');
		var txt=obj.text();
		var lnk=obj.attr('href');
		if((tit=="" || typeof(tit)=="undefined") && lnk!='javascript:;'){
			tit=txt+"\r\n"+lnk;
			obj.attr('title',tit);
		}
	 });
}
//=============================================
function StartupPage_ShowItem(obj,sid)
{
	if($('#'+sid).is(":visible")){
		$(obj).attr('class','tree_close');
		$('#'+sid).hide();
	}else{
		$(obj).attr('class','tree_expand');
		$('#'+sid).show();
	}
	//setTimeout('StartupPage_Relayout();',500);
	//setTimeout('StartupPage_Relayout();',1000);
}
//=============================================
function left_ShowItem(obj,sid)
{
	if($('#'+sid).is(":visible")){
		$(obj).attr("src", "scripts/closed.gif");
		$('#'+sid).hide();
	}else{
		$(obj).attr("src", "scripts/opened.gif");
		$('#'+sid).show();
	}
	//setTimeout('StartupPage_Relayout();',500);
	//setTimeout('StartupPage_Relayout();',1000);
}
//=============================================
function StartupPage_GetWinWidth()
{
	var nWinWidth=$(window).width();
	if(nWinWidth==0){
		nWinWidth=document.body.clientWidth||document.documentElement.clientWidth;
	}
	return nWinWidth;
}
//=============================================
function StartupPage_GetWinHeight()
{
	var nWinHeight=$(window).height();
	if(nWinHeight==0){
		nWinHeight=document.body.clientHeight||document.documentElement.clientHeight;
	}
	return nWinHeight;
}