$("#tran").click(tran);
$("#up").click(function () {
    $("#txt").val($("#result").val());
    $("#result").val('');
});

function tran () {
    var txt = $('#txt').val();
    var func = $('#slt').val();
    $("#result").val(run[func](txt));
}

var run = {    
    html10: function (str) {
        var ret = '';
        for (var i = 0; i < str.length; i++) {
            ret += '&#'+str[i].charCodeAt().toString(10)+';';
        };
        return ret;
    },

    html16: function (str) {
        var ret = '';
        for (var i = 0; i < str.length; i++) {
            ret += '&#x'+str[i].charCodeAt().toString(16)+';';
        };
        return ret;
    },

    htmlencode: function (str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/, "&quot;");
    },

    jsunicode: function (str) {
        var ret = '';
        for (var i = 0; i < str.length; i++) {
            var ltr = str[i].charCodeAt().toString(16);
            while (ltr.length<4) {ltr = "0"+ltr};
            ret += '\\u'+ltr;
        };
        return ret;
    },

    js8: function (str) {
        var ret = '';
        for (var i = 0; i < str.length; i++) {
            ret += '\\'+str[i].charCodeAt().toString(8);
        };
        return ret;
    },

    js16: function (str) {
        var ret = '';
        for (var i = 0; i < str.length; i++) {
            ret += '\\x'+str[i].charCodeAt().toString(16);
        };
        return ret;
    },

    string_fromcharcode: function (str) {
        var ret = 'String.fromCharCode(';
        for (var i = 0; i < str.length; i++) {
            ret += str[i].charCodeAt().toString(10)+',';
        };
        ret = ret.substr(0, ret.length-1);
        ret += ')';
        return ret;
    },

    urlencode: function (str) {
        return encodeURIComponent(str);
    },

    base64: function (str) {
        return $.base64({data: str});
    }
};