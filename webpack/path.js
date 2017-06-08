/**
 * Created by lenovo on 2017/5/8.
 */
var path = require('path');
var path1 = 'path1',
    path2 = 'path2//pp\\',
    path3 = '../path3';

var myPath = path.resolve('./index');
console.log(__dirname + '/index');
console.log(path.delimiter); //path1\path2\path3;
