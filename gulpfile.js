var gulp = require("gulp");

gulp.task("copy-html",async ()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html")
		.pipe(gulp.dest("F:\\phpstudy\\WWW\\Armani"));
});
gulp.task("copy-css",async ()=>{
	gulp.src("css/*.css")
		.pipe(gulp.dest("F:\\phpstudy\\WWW\\Armani\\css"));
});
gulp.task("copy-js",async ()=>{
	gulp.src("js/*.js")
		.pipe(gulp.dest("F:\\phpstudy\\WWW\\Armani\\js"));
});
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html").pipe(gulp.dest("F:\\phpstudy\\WWW\\Armani"));
	});
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css").pipe(gulp.dest("F:\\phpstudy\\WWW\\Armani\\css"));
	});

	// //合并
	// gulp.watch(["js/index.js","js/goodslist.js"],async ()=>{
	// 	gulp.src(["js/index.js","js/goodslist.js"])
	// 	.pipe(concat("tools.js"))
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1811\\day31\\js"));
	// });

	// //压缩
	// gulp.watch(["js/index.js"],async ()=>{
	// 	gulp.src(["js/index.js"])
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1811\\day31\\js"));
	// });

	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js").pipe(gulp.dest("F:\\phpstudy\\WWW\\Armani\\js"));
	});
});