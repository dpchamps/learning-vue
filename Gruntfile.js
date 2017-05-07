module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true,
        sourceMapEmbed: true,
        sourceMapContents: true,
        includePaths: ['.']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles',
          src: ['**/*.{scss, sass}'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    },
      concat: {
          options: {
              separator: "\n\n"
          },
          dist: {
              src: [
                  'src/head.js',
                  'src/namespace.js',
                  'src/util.js',
                  'src/events.js',
                  'src/imgCache.js',
                  'src/tail.js'
              ],
              dest: 'dist/<%= pkg.name.replace(".js", "") %>.js'
          }
      },

      postcss: {
      options: {
        map: {
          inline: false,
          prev: 'dist/'
        },
        processors: [
          require('autoprefixer')({browsers: [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 5',
            'Opera >= 12',
            'Safari >= 5'
          ]}),
          require('csswring')
        ]
      },
      dist: {
        src: "dist/*.css"
      }
    },
    browserSync: {
      options: {
        notify: false,
        background: true,
        watchOptions: {
          ignored: ''
        }
      },
      livereload: {
        options: {
          files: [
            '<./**/*.html',
            'dist/*.css',
            'dist/{,*/}*.js'
          ],
          port: 9000,
          server: {
            baseDir: ['.tmp', './'],
            routes: {
              '/bower_components': './bower_components',
              '/node_modules' : "./node_modules"
            }
          }
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name.replace(".js", "") %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: false,
        compress: {unused: false}
      },
      dist: {
        files: {
          'dist/<%= pkg.name.replace(".js", "") %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    qunit: {
      files: ['test/*.html']
    },

    jshint: {
      files: ['src/**/*.js'],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        },
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['src/**/*.js', 'src/style/**/*.scss', '**/*.html'],
      tasks: ['build']
    },

    browserify: {
      'dist/<%= pkg.name.replace(".js", "") %>.js': 'src/main.js',
      options : {
        alias : {

        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('hint', 'jshint');
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('serve', ['build', 'browserSync:livereload', 'watch']);
  grunt.registerTask('build', ['browserify','jshint', 'uglify', 'sass', 'postcss']);
};
