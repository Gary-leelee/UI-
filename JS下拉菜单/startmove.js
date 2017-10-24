    function getByClass(oParent, sClass) {
        var aEle = oParent.getElementsByTagName('*');
        var aResult = [];
        //'\\b'表示转义的\b
        var re = new RegExp('\\b' + sClass + '\\b', 'i');
        for (var i = 0; i < aEle.length; i++) {
            //if(aEle[i].className==sClass)
            //if(aEle[i].className.search(sClass)!=-1)
            if (re.test(aEle[i].className)) {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            //IE获取obj元素的最终使用的CSS属性值，返回的是字符串类型
            return this[attr];
        } else {
            //兼容FF的写法
            return getComputedStyle(obj, null)[attr];
        }
    }
    //运用Json形参json{name:key}
    function Move(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var bStop=true;
            for (var attr in json) {
                //Math.round表示四舍五入
                Attr = attr == 'opacity' ? Math.round(parseFloat(getStyle(obj, attr)) * 100) : parseInt(getStyle(obj, attr));
                /*if(attr=='opacity'){
                var Attr = parseInt(getStyle(obj, attr));
                }
                //增加代码重用性，"parseInt"用于解析一个字符串，并返回一个整数
                var Attr = parseInt(getStyle(obj, attr));*/
                var speed = (json[attr] - Attr) / 8;
                //"Math.ceil"向上取整，"Math.floor"向下取整，当保证speed永远大于等于1
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (Attr != json[attr]) {
                    bStop=false;
                    if (attr == 'opacity') {
                        obj.style[attr] = parseFloat(Attr + speed) / 100;
                        obj.style.filter = 'alpha(opacity:' + attr + speed + ')';
                    } else {
                        obj.style[attr] = Attr + speed + 'px';
                    }
                }
                }
                if(bStop){
                    clearInterval(obj.timer);
                    if (fn) fn();
                }
        }, 70);
    }

    function ChangeAttr(oParent, sClass, json) {
        var oDiv = document.getElementById('oParent');
        var oObj = this.getByClass(oDiv, 'sClass');
        for (var i = 0; i < oObj.length; i++) {
            this.Move(oObj[i], json);
        }
    }
