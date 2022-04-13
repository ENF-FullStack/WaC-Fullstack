// 1. Modify amd.html to load require.js on the page. Make sure we end up in this
//    file when the application is run.

requirejs.config({
    paths: {
		"jquery": "libs/jquery" // Fix this path to match your setup
    }
});

console.log("amd.js is loaded")

/* and finally you main code is below */
require([/* dependencies */],function(/* parameters pointing to dependencies */) {
    console.log("amd.js","all dependecies are loaded")
	// Actual functionality
});


