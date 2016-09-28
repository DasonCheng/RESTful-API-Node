/**
 * Created by Origin on 2016/9/28.
 */
"use strict"
//查看密码
function changePwdType(el) {
    if (el.attr('type') == 'text') {
        el.attr('type', 'password')
    } else {
        el.attr('type', 'text')
    }
}

//用户名校验
function checkoutName(el) {
    var regEx = /^[a-zA-Z0-9_.]{6,16}$/;
    var bool = regEx.test($.trim(el.val()));
    if (!bool) {
        el.parent().parent().find('.err').text('用户名必须由[字母 数字 下划线 点号]组成')
    } else {
        el.parent().parent().find('.err').text('')
    }
    return bool;
}

//邮箱校验
function checkoutEmail(el) {
    var regEx = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9]+.)+[a-zA-Z]{2,4}$/;
    var bool = regEx.test($.trim(el.val()));
    if (!bool) {
        el.parent().parent().find('.err').text('邮箱格式不合法')
    } else {
        el.parent().parent().find('.err').text('')
    }
    return bool;
}

//密码校验
function checkoutPwd(el) {
    var count = $.trim(el.val()).length;
    var bool = count >= 6 && count <= 20;
    if (!bool) {
        el.parent().parent().find('.err').text('密码长度为6-20位')
    } else {
        el.parent().parent().find('.err').text('')
    }
    return bool;
}

//密码重复校验
function checkoutPwdd(el, elp) {
    var bool = checkoutPwd(el);
    if (bool) {
        if ($.trim(el.val()) === $.trim(elp.val())) {
            el.parent().parent().find('.err').text('')
        } else {
            el.parent().parent().find('.err').text('输入的密码需一致');
            bool = false;
        }
    }
    return bool;
}

//将form转为AJAX提交
function ajaxSubmit(frm, fn1, fn2) {
    var dataPara = getFormJson(frm);
    $.ajax({
        url: frm.action,
        type: frm.method,
        data: dataPara,
        success: fn1,
        error: fn2
    });
}

//将form中的值转换为键值对。
function getFormJson(frm) {
    var o = {};
    var a = $(frm).serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });

    return o;
}

//调用
$(document).ready(function () {
    var bool = false;
    $('#view').bind('click', function () {
        changePwdType($('#pwd'));
    });
    $('#name').bind('blur', function () {
        checkoutName($(this));
    });
    $('#email').bind('blur', function () {
        checkoutEmail($(this));
    });
    $('#pwd').bind('blur', function () {
        checkoutPwd($(this));
    });
    $('#pwdd').bind('blur', function () {
        checkoutPwdd($(this), $('#pwd'));
    });
    $('#signUp').bind('submit', function () {
        if (checkoutName($('#name')) && checkoutEmail($('#email')) && checkoutPwd($('#pwd')) && checkoutPwdd($('#pwdd'), $('#pwd'))) {
            ajaxSubmit(this, function (data) {
                console.log(data);
            }, function (err) {
                var responseText = JSON.parse(err.responseText);
                console.log(responseText.message);
            });
        }
        return false;
    });
});