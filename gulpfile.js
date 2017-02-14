var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 8889
  });
});

gulp.task('default', ['connect']);

[{
	"Reference": "Registration",
	"key": "REG_LBL",
	"English": "Company Registration",
	"Japanese": "会社登録"
}, {
	"Reference": "Registration",
	"key": "INFO_LBL",
	"English": "Company Information",
	"Japanese": "会社情報"
}]

for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    for (var key in obj) {
        if (!isInArray(KeyArray,key)) {
            //console.log(key)
            objects[obj['Identification key']] = obj[key];
            fs.writeFileSync('lang/' + key + '.json', JSON.stringify(objects, null, 2), { encoding: 'utf8' }, function (err) {
                if (err)
                { throw err; }
                console.log("completed")

            });
            
        }
    }

}
