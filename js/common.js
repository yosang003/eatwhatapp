//都是基于jquery的
var system={
	//ajax实现base64类型的上传
	upload:function(file,callback){
		var iurl=" ";
		$.ajax({
			type:"post",
			data:{
				uid:"",
				file:file
			},
			url:iurl,
			dataType:"json",
			success:callback,
			error:function(){
				plus.nativeUI.alert("上传出错！")
			}
		});
	}
}

var blog={
	add:function(context,photos,callback){
		var url="testjson/imgupload.json";
		$.ajax({
			url:url,
			type:"post",
			data:{
				context:context,
				photo:photos,
				uid:""
			},
			dataType:"json",
			success:callback,
			error:function(){
				plus.nativeUI.alert("上传出错");
			}
			
		})
	}
   
}
