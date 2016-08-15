const gulp=require("gulp");
const sass=require("gulp-sass");
const webpack=require("gulp-webpack");
const livereload=require("gulp-livereload");
const gulpif = require('gulp-if');
const sprity=require("sprity");
const nodemon=require("gulp-nodemon");

gulp.task("default",["watch","reload:node"]);

gulp.task("watch",function(){
    livereload.listen();
    gulp.watch("dev/sass/**/*.scss",["sass:compile"]);
    gulp.watch(["dev/vue/**/*.js","dev/vue/**/*.vue"],["webpack:compipe"]);

});

gulp.task("reload:node",function(){
    nodemon({
        script:"app.js",
        ext:"js html",
        env:{ 'NODE_ENV':'development' }
    })
});


gulp.task("copy",function(){
    //img copy
    gulp.src("dev/img/**/*.*").pipe(gulp.dest("./build/img"));
    //lib copy
    gulp.src("dev/lib/**/*.*").pipe(gulp.dest("./build/lib"));
});

gulp.task("sass:compile",function(){
    gulp.src("dev/sass/main.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
        .pipe(livereload());
});

gulp.task("webpack:compipe",function() {
    gulp.src("dev/vue/main.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("build/js/"))
        .pipe(livereload())
});

gulp.task("spriter",function(cb){
    sprity.src({
        src:"./dev/slice/*.png",
        style:"./slice.scss",
        processor:"sass",
        "style-type":"scss"
    }).pipe(gulpif("*.png",gulp.dest("./build/img"),gulp.dest("./dev/sass/sprite-sass")));

});
