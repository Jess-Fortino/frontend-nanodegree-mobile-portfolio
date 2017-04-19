## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

1.) The biggest optimization issue was the images. Using grunt, I compressed each image - additionally using TinyPng
2.) JavaScript files/code within the HTML and print.css files needed to become async/print as they were not important for initial page load.
3.) WebFont loading was impeding proper process. Commented out.
4.) CSS could be inlined, save an extra fetch from the server. I used the penthouse gruntfile/node to create an additional
file that gave me a minified version of inline CSS-- applied to index.html in the head element.
5.) HTML needed to be minified -- used gruntfile/node htmlmin to minify all HTML files within this project.

####Part 2: Optimize Frames per Second in pizza.html

1.) Changed querySelector to getElementById in several places-- meaning the code looks for a more specific item and doesn't have to loop through unnecessary things.
2.) The variable "movingPizzas" needed to be declared outside of the loop to avoid the DOM from being called on each iteration.
3.) The variable "items" should be global so there is not an extra step to fetch position of the pizzas.
4.) Math to scroll was simplified
5.) Slider was updated with significantly less passing and recalculating
6.) Saving randomPizzas.length outside of the function allows the loop to run without taking the extra step of checking the length of randomPizzas over and over again
7.) Placing position of screen in constArray allows the for loop to push information without having the loop run constantly.
8.) Images placed inside pizza.html are compressed and have two different sizes for two different placements.




To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
