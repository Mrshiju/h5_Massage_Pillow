//window.onerror = function(){return true;}
//function $(id){return document.getElementById(id);}  
//function getHeight(){$("fahuo").style.height=$("forml").offsetHeight-85+"px";}  
//window.onload = function(){getHeight();}  
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
// function postcheck() {
$("#btn").click(function() {


    try {
        var product = document.getElementsByName("product");
        if (product.length != 0) {
            var numa = 0;
            for (var i = 0; i < product.length; i++) {
                if (product[i].checked) {
                    numa++;
                }
            }
            if (numa == 0) {
                alert("请选择要购买的商品或者套餐");
                return false;
            }
        }
    } catch (ex) {}

    try {
        var yanse = document.getElementsByName("yanse");
        if (yanse.length != 0) {
            var numa = 0;
            for (var i = 0; i < yanse.length; i++) {
                if (yanse[i].checked) {
                    numa++;
                }
            }
            if (numa == 0) {
                alert("请选择要的购买颜色");
                return false;
            }
        }
    } catch (ex) {}

    try {
        var chicun = document.getElementsByName("chicun");
        if (chicun.length != 0) {
            var numb = 0;
            for (var i = 0; i < chicun.length; i++) {
                if (chicun[i].checked) {
                    numb++;
                }
            }
            if (numb == 0) {
                alert("请选择要的购买尺码");
                return false;
            }
        }
    } catch (ex) {}

    try {
        // alert($(".zengsong").css("display"));
        var productzp = document.getElementsByName("productzp");
        if (productzp.length != 0 && $(".zengsong").css("display") != "none") {
            var numa = 0;
            for (var i = 0; i < productzp.length; i++) {
                if (productzp[i].checked) {
                    numa++;
                }
            }
            if (numa == 0) {
                alert("请选择要的赠品");
                return false;
            }
        }
    } catch (ex) {}

    try {
        var yansezp = document.getElementsByName("yansezp");
        if (yansezp.length != 0 && $(".zengsong").css("display") != "none") {
            var numa = 0;
            for (var i = 0; i < yansezp.length; i++) {
                if (yansezp[i].checked) {
                    numa++;
                }
            }
            if (numa == 0) {
                alert("请选择要的赠品颜色");
                return false;
            }
        }
    } catch (ex) {}

    try {
        var chicunzp = document.getElementsByName("chicunzp");
        if (chicunzp.length != 0 && $(".zengsong").css("display") != "none") {
            var numb = 0;
            for (var i = 0; i < chicunzp.length; i++) {
                if (chicunzp[i].checked) {
                    numb++;
                }
            }
            if (numb == 0) {
                alert("请选择要的赠品尺码");
                return false;
            }
        }
    } catch (ex) {}
    try {
        if ((document.form.num1.value * 1 + document.form.num2.value * 1) < 10) {
            alert('购买数量不能小于10!');
            document.form.price.focus();
            return false;
        }
    } catch (ex) {}
    try {
        if (document.form.name.value == "") {
            alert('请填写姓名！');
            document.form.name.focus();
            return false;
        }
        var name = /^[\u4e00-\u9fa5]{2,6}$/;
        if (!name.test(document.form.name.value)) {
            alert('姓名格式不正确，请重新填写！');
            document.form.name.focus();
            return false;
        }
    } catch (ex) {}
    try {
        if (document.form.mob.value == "") {
            alert('请填写手机号码！');
            document.form.mob.focus();
            return false;
        }
        var form = /^1[3,4,5,6,7,8,9]\d{9}$/;
        if (!form.test(document.form.mob.value)) {
            alert('手机号码格式不正确，请重新填写！');
            document.form.mob.focus();
            return false;
        }
    } catch (ex) {}
    try {
        if (document.form.province.value == "") {
            alert('请选择所在地区！');
            document.form.province.focus();
            return false;
        }
    } catch (ex) {}
    try {
        if (document.form.address.value == "") {
            alert('请填写详细地址！');
            document.form.address.focus();
            return false;
        }
    } catch (ex) {}

    // var myForm = document.forms[0]; //获取表单,也可以通过id获取
    // myForm.setAttribute('action', encodeURI(`http://192.168.1.246:8021/order/saveOrder?userName=${document.form.name.value}&mobile=${document.form.mob.value}&address=${document.form.province.value}|${document.form.city.value}|${document.form.area.value}|${document.form.address.value}&money=99&comment=${document.form.guest.value}&source=1&goodsid=1&describe=论语一套&unit=2.5&num=1'`)); //或者 myForm.action='newurl';
    // myForm.setAttribute('action', encodeURI(`http://sms-yx-api-http.yunrongt.com/order/saveOrder?userName=${document.form.name.value}&mobile=${document.form.mob.value}&address=${document.form.province.value}|${document.form.city.value}|${document.form.area.value}|${document.form.address.value}&money=99&comment=${document.form.guest.value}&source=1&goodsid=1&describe=论语一套&unit=2.5&num=1'`)); //或者 myForm.action='newurl';

    // myForm.setAttribute('action', './price.html');
    // myForm.setAttribute('target', ''); //或者 myForm.target='_parent';
    // document.form.submit.disabled = true;
    // document.form.submit.value="正在提交，请稍等 >>";

    $.ajax({
        type: "post",
        url: "http://sms-yx-api-http.yunrongt.com/order/saveOrder",
        // url: 'http://192.168.1.246:8021/order/saveOrder',
        cache: false,
        async: false,
        // dataType: "",
        // processData: false,
        // contentType: false,
        data: `userName=${document.form.name.value}&mobile=${document.form.mob.value}&address=${document.form.province.value}|${document.form.city.value}|${document.form.area.value}|${document.form.address.value}&money=99&comm=${document.form.guest.value}&source=1&goodsid=1&des=论语一套&unit=2.5&num=1`,
        // data: $("#form").serialize(),
        success: function(res) {
            if (res.result == 'ok') {
                window.location.href = './price.html';

            } else {
                alert("购买失败,请重新购买")
            }

        },
    })

    // return true;
})

try {
    new PCAS("province", "city", "area");
} catch (ex) {}
try {
    var thissrc = document.getElementById("yzm").src;

    function refreshCode() {
        document.getElementById("yzm").src = thissrc + "?" + Math.random();
    }
} catch (ex) {}