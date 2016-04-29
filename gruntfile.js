module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      bootstrap: {
        files: [
          {
            expand: true,
            cwd: "bower_components/bootstrap/dist/js",
            src: "bootstrap.min.js",
            dest: "js/lib"
          }
        ]
      },
      jquery: {
        files: [
          {
            expand: true,
            cwd: "bower_components/jquery/dist",
            src: "jquery.min.js",
            dest: "js/lib"
          }
        ]
      }
    },
    exec: {
      jekyll: {
        cmd: "jekyll build --trace"
      }
    },
    ts: {
      app: {
        files: [{
          src: ["_typescript/src/**/*.ts", "!_typescript/src/.baseDir.ts", "!_typescript/src/_all.d.ts"],
          dest: "js/build"
        }],
        options: {
          module: "commonjs",
          noLib: true,
          target: "es6",
          sourceMap: false
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
    watch: {
      options: {
        livereload: true
      },
      ts: {
        files: ["_typescript/src/**/*.ts"],
        tasks: ["ts", "tslint"]
      },
      jekyll: {
        files: [
          "_drafts/**/*",
          "_includes/**/*",
          "_layouts/**/*",
          "_posts/**/*",
          "css/**/*",
          "js/**/*",
          "_config.yml",
          "*.html",
          "*.md"
        ],
        tasks: [
          "exec:jekyll"
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("build", [
    "copy",
    "exec:jekyll"
  ]);

  grunt.registerTask("default", [
    "copy",
    "ts",
    "tslint",
    "watch"
  ]);

};