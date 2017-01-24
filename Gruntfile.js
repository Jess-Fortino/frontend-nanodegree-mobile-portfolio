module.exports = function(grunt){

  grunt.initConfig({
    htmlmin: {                                     // Task
  dist: {                                      // Target
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: {
      'dist/index.html': 'index.html',
      'dist/project-2048.html':'project-2048.html',
      'dist/project-mobile.html':'project-mobile.html',
      'dist/project-webperf.html':'project-webperf.html'// 'destination': 'source'
    }
  }
},

watch:{
  html:{
    files: ['index.html', 'project-2048.html', 'project-mobile.html', 'project-webperf.html'],
    tasks: ['htmlmin', 'compress', 'uglify']
  }
},

compress: {
  main: {
    options: {
      mode: 'gzip'
    },
    // Each of the files in the src/ folder will be output to
    // the dist/ folder each with the extension .gz.js
    files: [{
      expand: true,
      src: ['css/style.css'],
      dest: 'dist/',
      ext: '.gz.css'
    },
    {
      expand: true,
      src: ['js/perfmatters.js', 'views/js/main.js'],
      dest: 'dist/',
      ext: '.gz.js'
    }]
  }
}



});


grunt.registerTask('default', ['htmlmin']);
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compress');
//grunt.loadNpmTasks('grunt-contrib-uglify');
}
