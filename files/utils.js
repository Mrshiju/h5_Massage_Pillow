/**
 * Created by Administrator on 2017-2-26.
 */
function pop_tips(param) {
    var type = param.type;
    var msg = param.msg;
    var cb = param.callBack;
    //type : 1为成功，2为警告，3为错误
    if (type == 1) {
        type = 'suc';
    } else if (type == 2) {
        type = 'warn';
    } else if (type == 3) {
        type = 'err';
    }
    if ($('#pop_tips').length > 0) {
        //$('#pop_tips').remove();
        return false;
    } else {
        var pop_tips = document.createElement('div');
        pop_tips.id = 'pop_tips';
        pop_tips.className = 'pop_tip ' + type;
        pop_tips.innerHTML = '<p>' + msg + '</p>';
        $('body').append(pop_tips);
        setTimeout(function() {
            $('#pop_tips').stop().fadeOut(300, function() {
                $(this).remove();
                if (cb) {
                    cb();
                }
            });
        }, 2000);
    }
}

function count_price(count, price) {
    var sum = count * price;
    $('.js_selected span.num').html(count + '套');
    $('.js_price span').html(sum);
}

function GetRTime(now_time, time, container) {
    var EndTime = now_time + time * 60 * 1000;
    var NowTime = new Date().getTime();
    var t = EndTime - NowTime;
    var m = 0;
    var s = 0;
    if (t >= 0) {
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    container.html('<i>' + m + '</i> : <i>' + s + '</i>');
}

function captcha_countdown(t) {
    var e = null,
        n = 60;
    t.css("color", "#fff").html("重新获取(" + n + ")").removeClass("js_get_captcha"), e = setInterval(function() {
        return n <= 1 ? (clearInterval(e), t.css("color", "#fff").html("重新获取").addClass(
            "js_get_captcha"), !1) : (t.css("color", "#fff").html("重新获取(" + (n - 1) + ")"), void n--)
    }, 1000)
}