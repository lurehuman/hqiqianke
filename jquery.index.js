function index(dir,templatedir)
{
	$(".lazyload img").lazyload({ placeholder: templatedir+"images/84.gif", effect:"fadeIn" }); 
	$(".banner").KinSlideshow({
			moveStyle:"up",
			mouseEvent:"mouseover",
			isHasTitleFont:false,
			isHasTitleBar:false,
			btn:{btn_bgColor:"#FFFFFF",btn_bgHoverColor:"#1072aa",btn_fontColor:"#000000",btn_fontHoverColor:"#FFFFFF",btn_borderColor:"#cccccc",btn_borderHoverColor:"#1188c0",btn_borderWidth:0}
	});
	$("#selectjobscategory .center span").click(function()
	{
		$("#selectjobscategory .center  span").removeClass("select");
		$(this).addClass("select");
		$("#selectjobscategory .txt .loading").show().css('opacity',0.8);
		$.get(dir+"plus/ajax_common.php", {"act":"ajaxcomlist","comrow":"32","jobrow":"3","showtype":"category","categoryid":$(this).attr('id')},
			function (data,textStatus)
			{	
				$("#selectjobscategory .txt .loading").hide();
				$("#selectjobscategory .txt .infobox").html(data);
			}
		);		
	});	
	//统计数据
	$.get(dir+"plus/ajax_common.php", {"act":"countinfo"},
			function (data,textStatus)
			 {			
				$("#countinfo").html(data);
			 }
	);
	//最新简历下载记录
	$.get(dir+"plus/ajax_common.php", {"act":"company_down_resume"},
			function (data,textStatus)
			 {			
				$("#downinfo").html(data);
				$(function(){
				var _wrap=$('#downinfo');
				var _interval=2000;
				var _moving;
				_wrap.hover(function(){
				clearInterval(_moving);
				},function(){
				_moving=setInterval(function(){
				var _field=_wrap.find('li:first');
				var _h=_field.height();
				_field.animate({marginTop:-_h+'px'},600,function(){
				_field.css('marginTop',0).appendTo(_wrap);
				})
				},_interval)
				}).trigger('mouseleave');
				});
			 }
	);
				//紧急招聘
				$(function(){
				var _wrap=$('#emergencybox');
				var _interval=2000;
				var _moving;
				_wrap.hover(function(){
				clearInterval(_moving);
				},function(){
				_moving=setInterval(function(){
				var _field=_wrap.find('div:first');
				var _h=_field.height();
				_field.animate({marginTop:-_h+'px'},600,function(){
				_field.css('marginTop',0).appendTo(_wrap);
				})
				},_interval)
				}).trigger('mouseleave');
				});
	//
	$.joblisttip(".comtip",dir+"plus/ajax_common.php?act=joblisttip","载入中...",'comvtipshow');
	$.joblisttip(".adcomtip",dir+"plus/ajax_common.php?act=joblisttip","载入中...",'adcomvtipshow');
	//
	$("form[name=searcform]").submit( function () {
			if ($("#key").val()=="请输入职位名称、公司名称、技能特长、学校等关键字...")
			{
				$("#key").val('');
			}
	});
	$("#key").focus(function(){
	if ($("#key").val()=="请输入职位名称、公司名称、技能特长、学校等关键字...")
	{
	$("#key").css('color','').val('');
	}  
	});
	$("#tabs1 a").mouseover(function(){
		$("#tabs1 a").removeClass("select");
		$(this).addClass("select");
		$(".tabs1show").hide();	
		$("#show"+$(this).attr('id')).show();	
	});
}