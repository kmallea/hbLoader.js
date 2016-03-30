module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({

    jshint: {
      options : {
        force : true
      },
      all: ['src/*.js']
    },
    uglify: {
      options : {
        sourceMap : true,
        compress : true,
        mangle: false
      },
      my_target: {
        files: {
          'dist/hbLoader.min.js': ['src/hbLoader.js'],
        },
      }
    }
    

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  grunt.registerTask('default', ['jshint','uglify']);
  

};