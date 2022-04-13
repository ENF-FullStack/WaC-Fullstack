/*
1.  Display all properties (not functions) published by os-module object
*/

/*
2.  Display command-line parameters given to the application (process.argv)
*/

/*
3.  Display current working directory, change working directory
*/

/*
4.  Implement beforeExit -event handler, just display "Exiting".
    - Start a timer at the beginning of the code, show timer duration at event handler
*/


/*
5.  Experiment with EventEmitter as demonstrated in the material
*/

/*
6.  Study child-process -module.
    - implement child.js that just console.logs 'Child is executing'
    - From this file, call child_process.fork to launch the child.js
    - this file should catch child-processes exit-event
    - this file should catch child-processes message-event
    - in the child.js send couple of messages to the main-process
*/
