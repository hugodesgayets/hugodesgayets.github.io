module.exports = function(grunt) {
	// Load
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-ejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');



	// Config
	grunt.initConfig({

		clean: ['dist'],

	    copy: {
		    all: {
		        files: [{
		        	expand:true,
		        	cwd:'src/static/images',
		        	src: '**',
		        	dest: 'dist/static/images',
		        	filter: 'isFile'
		     	}, {
		        	expand:true,
		        	cwd:'src/static/videos',
		        	src: '**',
		        	dest: 'dist/static/videos',
		        	filter: 'isFile'
		     	}, {
		     		expand:true,
		        	cwd:'src/static/js',
		        	src: '**',
		        	dest: 'dist/static/js',
		        	filter: 'isFile'
		     	}, {
		     		expand:true,
		        	cwd:'src/static/vendor',
		        	src: '**',
		        	dest: 'dist/static/js',
		        	filter: 'isFile'
		     	}, {
		     		expand:true,
		        	cwd:'src/static/css/fonts',
		        	src: '**',
		        	dest: 'dist/static/css/fonts',
		        	filter: 'isFile'
		     	}]
		    }
	    },

		watch: {
			sass: {
				files: ['src/static/css/*.scss', 'src/static/css/partials/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			html: {
				files: ['src/*.ejs'],
				tasks: ['ejs']
			}
    	},

		sass: {
			dist: {
				files: {
					'dist/static/css/styles.css' : 'src/static/css/main.scss'
				}
			}
		},

    	cssmin: {
    		all: {
    			files: [{
    				expand: true,
    				cwd: 'dist/static/css/',
    				src: ['*.css', '!*.min.css'],
    				dest: 'dist/static/css/',
    				ext: '.min.css'
    			}]
    		}
    	},
		ejs: {
			all: {
				files: {
					'dist/index.html' : ['src/index.ejs'],
					'dist/mapstr.html' : ['src/mapstr.ejs'],
					'dist/return.html' : ['src/return.ejs'],
					// 'dist/support.html' : ['src/support.ejs'],
					// 'dist/press.html' : ['src/press.ejs'],
					// 'dist/legal.html' : ['src/legal.ejs'],
					// 'dist/terms.html' : ['src/terms.ejs'],
				},
				ext: '.html',
			}
		}
	})

	// Tasks
	grunt.registerTask('build', ['clean', 'copy', 'sass', 'cssmin', 'ejs']);
	grunt.registerTask('default', ['build', 'watch']);

}
