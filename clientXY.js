<script>
 	function clientXY(ev){
 		var oEv=ev||event;
 		var scrollTop=oDiv.documentElement.scrollTop||oDiv.body.scrollTop;
 		var scrollLeft=oDiv.documentElement.scrollLeft||oDiv.body.scrollLeft;
 		return {x:scrollLeft+ev.clientX, y:scrollTop+ev.clientY};
 	}
</script>