<script>
function getByClass(oParent, sClass) {
    var aRusult = [];
    var aEle = oParent.getElementsByTagName('*');
    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className== sClass) {
            aRusult.push(aEle[i]);
        }
    }
    return aRusult;
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        //IE获取obj元素的最终使用的CSS属性值，返回的是字符串类型
        return obj.currentStyle[attr];
    } else {
        //兼容FF的写法
        return getComputedStyle(obj, null)[attr];
    }
}

function Move(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        Attr=attr=='opacity'?parseFloat(getStyle(obj, attr))*100:parseInt(getStyle(obj, attr));
        /*if(attr=='opacity'){
        var Attr = parseInt(getStyle(obj, attr));
        }
        //增加代码重用性，"parseInt"用于解析一个字符串，并返回一个整数
        var Attr = parseInt(getStyle(obj, attr));*/
        var speed = (iTarget - Attr) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (Attr == iTarget) {
            clearInterval(obj.timer);
        } else {
        if(attr=='opacity'){
            obj.style[attr]=parseFloat(Attr+speed)/100;
            oDiv.style.filter='alpha(opacity:'+attr+')';
        }
            obj.style[attr] = Attr + speed + 'px';
        }
    }, 20);
}
</script>