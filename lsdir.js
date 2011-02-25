var fs = require('fs');
var _ = require('underscore');

var withEachDirectory = function (callback) {
    fs.readdir('.', function (err, files) {
        _(files).each(function (file) {
            fs.stat(file, function (err, fileStat) {
                if (fileStat.isDirectory()) {
                    callback(file);
                }
            });
        });
    });
}

withEachDirectory(function (dir) {
    console.log(dir);
});
