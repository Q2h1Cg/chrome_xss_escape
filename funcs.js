document.getElementById('x').onclick=exec;

function exec () {
    var txt = document.getElementById('txt').value;
    var func = document.getElementById('s1').value;
    document.getElementById('result').value = run[func](txt);
}

var run = {};

run.html10 = function (str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        ret += '&#'+str[i].charCodeAt().toString(10)+';';
    };
    return ret;
};

run.html16 = function (str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        ret += '&#x'+str[i].charCodeAt().toString(16)+';';
    };
    return ret;
};

run.htmlencode = function (str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/, "&quot;");
};

run.jsunicode = function (str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        ret += '\\u00'+str[i].charCodeAt().toString(16);
    };
    return ret;
};

run.js8 = function (str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        ret += '\\'+str[i].charCodeAt().toString(8);
    };
    return ret;
};

run.js16 = function (str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        ret += '\\x'+str[i].charCodeAt().toString(16);
    };
    return ret;
};

run.string_fromcharcode = function (str) {
    var ret = 'String.fromCharCode(';
    for (var i = 0; i < str.length; i++) {
        ret += str[i].charCodeAt().toString(10)+',';
    };
    ret = ret.substr(0, ret.length-1);
    ret += ')';
    return ret;
};

run.urlencode = function (str) {
    return encodeURIComponent(str);
};