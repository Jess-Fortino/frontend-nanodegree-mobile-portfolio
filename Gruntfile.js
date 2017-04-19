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
      'dist/project-webperf.html':'project-webperf.html',
      'dist/views/pizza.html':'views/pizza.html'
      // 'destination': 'source'
    }
  }
},

watch:{
  html:{
    files: ['index.html', 'project-2048.html', 'project-mobile.html', 'project-webperf.html'],
    tasks: ['htmlmin', 'compress']
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
},
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['css/out.css'],
      dest: 'dist/',
      ext: '.min.css'
    }]
  }
},
  penthouse: {
    extract : {
        outfile : 'dist/css/out.css',
        css : 'css/style.css',
        url : 'index.html',
        width : 1300,
        height : 900,
        skipErrors : false // this is the default
    }
  },
  uglify: {
  my_target: {
    files: {
      'dist/views/js/main.min.js': ['views/js/main.js'],
      'dist/js/perfmatters.min.js': ['js/perfmatters.js']
    }
  }
}


});


grunt.registerTask('default', ['htmlmin']);
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compress');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-penthouse');
grunt.loadNpmTasks('grunt-contrib-uglify');
}
