function resumelist()
{
	var key=$('#key').val();
	if (key)
	{
		key_arr=key.split(" ");
		for (x in key_arr)
		{
		if (key_arr[x]) $('.striking').highlight(key_arr[x]);
		}
	}
	$(".list:odd").css("background-color","#F4F5FB");
	$(".titsub").hover(	function()	{$(this).addClass("titsub_h");},function(){$(this).removeClass("titsub_h");});
	function setlistbg()
	{
			$(".li_left_check input[type='checkbox']").each(function(i){
				if ($(this).attr("checked"))
				{
					$(this).parent().parent().addClass("seclect");
				}
				else
				{
					$(this).parent().parent().removeClass("seclect");
				}
			}); 
	 }
 	//ȫѡ��ѡ
	$("input[name='selectall']").unbind().click(function(){$("#formresumelist :checkbox").attr('checked',$(this).attr('checked'))});
	//���ѡ������¼���ʽ
	$("#formresumelist input[type='checkbox']").click(function(){setlistbg();});
}
function recommend_resume(ajaxurl)
{
	$(".recommend").unbind().click(function()
	{
		dialog("�Ƽ�������","url:get?"+ajaxurl+"plus/ajax_recommend.php?resume="+$(this).attr("url")+"&act=recommendresume","400px","auto","");
	});
}
function favorites(ajaxurl)
{
	$(".add_favorites").unbind().click(function(){	
	var url=ajaxurl+"user/user_favorites_resume.php?id="+$(this).attr("id")+"&act=add";
	dialog("��ӵ��˲ſ�","url:get?"+url,"500px","auto","");	
	});	
	
	$(".allfavorites").click(function()
	{
		var sltlength=$("#formresumelist input:checked").length;
		if ($("#formresumelist .list input:checked").length==0)
			{
			dialog("ϵͳ��ʾ","text:��ѡ�����","300px","auto");
			}
			else
			{
				var jidArr=new Array();
				 $("#formresumelist .list :checkbox[checked]").each(function(index){jidArr[index]=$(this).val();});
				dialog("�����ղ�","url:get?"+ajaxurl+"user/user_favorites_resume.php?id="+jidArr.join("-")+"&act=add","500px","auto","");
			}
	});
}