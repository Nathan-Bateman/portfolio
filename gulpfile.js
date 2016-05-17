//////
//Required
////////////////
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	uncss = require('gulp-uncss'),
	cleancss = require('gulp-cleancss'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	htmlmin = require('gulp-htmlmin'),
	browserSync = require('browser-sync').create(),
	sass = require ('gulp-sass');

//////
//Scripts Task
//////////////// Grabs all .js files and pipes them out to a destination
gulp.task('concatscripts', function(){
	return gulp.src([ 'js/jQuery.js','js/knockout-3.3.0.js','js/bootstrap.js' ,'js/main.js'])
	.pipe(plumber())
    .pipe(concat('final.js'))
	.pipe(gulp.dest('js'))
});

gulp.task('scripts', function(){
	gulp.src(['js/**/*final.js', '!js/**/*.min.js'])
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('js'));
});

//////
//CSS Task
////////////////

/////
//Minify Task
/////////////
gulp.task('minifycss', function() {
	gulp.src(['css/final.css'])
	.pipe(plumber())
	.pipe(cleancss({keepBreaks: false}))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('css'));
});
/////
//Sass Compile Task
/////////////
gulp.task('sass', function () { 
	gulp.src(['scss/**/*.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({
      		stream: true
    	}));

});
/////
//Concat Styles Task
/////////////
gulp.task('concatcss', function() {
    gulp.src(['css/bootstrap.css','css/small.css','css/320.css','css/480.css','css/600.css','css/768.css','css/992.css','css/1280.css','css/big.css'])
        .pipe(plumber())
    	.pipe(concat('main.css'))
        .pipe(gulp.dest('css'));
});
//UNCSS Task
/////////////
gulp.task('uncss', function() {
    gulp.src('css/bootstrap.css')
        .pipe(uncss({
            html: ['http://localhost:8888/index.php', 'http://localhost:8888/about.php', 'http://localhost:8888/projects.php','http://localhost:8888/news.php','http://localhost:8888/donate.php','http://localhost:8888/news-archive.php','http://localhost:8888/sponsor.php','http://localhost:8888/emunah.php'],
            ignore:['.modal-open']
        }))
        .pipe(rename({suffix:'.clean'}))
        .pipe(gulp.dest('css'));
});
//////
//Markup Tasks - watch
////////////////
gulp.task('html', function() {
	gulp.src('*.html');
});
gulp.task('php', function() {
	gulp.src('*.php');
});
//////
//BROWSER-SYNC
////////////////
// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: '/Users/nathantoddbatemanjr/Documents/nbateman/portfolio'
//     },
//   })
// });
//////
//HTML Task - only right before deploy
////////////////
gulp.task('minifyhtml', function() {
  return gulp.src('minifyhtml/*.php')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('minifyhtml'));
});


//Watch Task
////////////////
//////

gulp.task('watch', function(){
	gulp.watch('js/**/*.js', ['concatscripts']);
	gulp.watch('scss/**/*.scss',['sass']);
	gulp.watch('css/**/*.css', ['concatcss']);
	gulp.watch('*.html', ['html']);
	gulp.watch('*.php', ['php']);

});


//Default Task
////////////////
gulp.task('default', ['watch']);