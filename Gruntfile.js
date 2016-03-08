//包装函数
module.exports = function(grunt){

	//任务配置,所有的插件配置信息
	grunt.initConfig({

		//获取 package.json信息
		pkg:grunt.file.readJSON('package.json'),

		//uglify插件的配置信息
		uglify:{
			options:{
				stripBanners:true,
				banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src: 'src/js/<%=pkg.file %>.js',
				dest:'dest/js/<%= pkg.file %>.min.js'
			}
		}

	});

	//告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//告诉grunt当我们在终端输入gurnt时候需要做些什么(注意先后顺序)
	grunt.registerTask('default',['uglify']);
}