module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    clean: {
			build: ["css/build", "css/release", "js/build", "js/release"]
    },
    cssmin: {
			release: {
				files: [{
					expand: true,
					cwd: "css/build",
					src: ["**/*.css"],
					dest: "css/release"
        }]
      }
    },
    sass: {
			build: {
				files: {
					"css/build/main.css": "_sass/main.scss"
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["_typescript/src/**/*.ts"]
      }
    },
    uglify: {
			options: {
				banner: "/**" +
					"* Copyright (c) Western Region, Order of the Arrow, Boys Scouts of America, Inc. <%= grunt.template.today('yyyy') %>" +
					"*/"
      },
			release: {
				options: {
					compress: {
						drop_console: true,
						unused: true
          },
					mangle: true,
					preserveComments: false,
					sourceMap: true
        },
				files:[{
					expand: true,
					cwd: "./js/build/",
					src: ["**/*.js"],
					dest: "./js/release"
				}]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      build: {
        files: ["_typescript/src/**/*.ts"],
        tasks: ["tslint", "webpack"]
      }
    },
    "webpack": {
      build: require("./webpack.config.js")
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.loadNpmTasks("grunt-webpack");

  grunt.registerTask("default", [
    "clean",
    "sass",
    "tslint",
    "webpack"
  ]);

  grunt.registerTask("release", [
    "clean",
    "sass",
    "cssmin",
    "tslint",
    "webpack",
    "uglify"
  ]);

};