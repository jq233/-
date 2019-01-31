	function $D(id1){
		var h=id1.offsetHeight;
		var maxh=80;
		function dmove(){
		h+=5; //设置层展开的速度
		if(h>=maxh){
		id1.style.height='80px';
		clearInterval(iIntervalId);
		}else{
		id1.style.height=h+'px';
		id1.style.display='block';
		}
		}
		iIntervalId=setInterval(dmove,2);
	}
	function $D2(id1){
			var h=id1.offsetHeight;
			var maxh=80;
			function dmove(){
			h-=5;//设置层收缩的速度
			if(h<=0){
			id1.style.display='none';
			clearInterval(iIntervalId);
			}else{
			id1.style.height=h+'px';
			}
			}
			iIntervalId=setInterval(dmove,2);
		}
	function $use(id1){
		if(id1.style.display=='block'){
		$D2(id1);
		}
		else{
		$D(id1);
		}
	}