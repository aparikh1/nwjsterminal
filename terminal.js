/**********************************************************************
 *
 *  Hello, brave warrior. It is time to begin your nw.js journey.
 *
 *  In your travels, remember that this file is both a browser AND a
 *  node.js file.
 *
 *  For example we have:
 **********************************************************************/

console.log($); // jQuery at the ready.

$(document).ready(function () {

    /**********************************************************************
     *
     *  But, in addition to DOM interaction, we also have the ability to
     *  include node libraries that interact with our machine as well.
     *
     **********************************************************************/

    console.log(typeof require('fs').readFile); // "function"

    /**********************************************************************
     *
     *  How to build a terminal in your browser then? Think about how node
     *  is able to run shell commands on a machine. nw.js can do what
     *  node can do.
     *
     *  It is dangerous to go alone. Take this:
     *
     **********************************************************************/

    var $prompt = $('#prompt'); // Our terminal <input> element.
    var $output = $('#output'); // A <pre> container for our terminal output.

    
    $prompt.on('keydown', function (event) {

        if (event.keyCode !== 13) {
            // This isn't the enter key (13), so we're not interested!
            return;
        }

        event.preventDefault(); // Override default behavior.

        var executeCommand = require('child_process').exec;

        var command = $prompt.val();

        var options = {
            cwd : "/Users/apurv/Desktop/"
        };

        if ($prompt.val().substring(0, 2) === 'cd') {
            console.log('changing dir');
            options.cwd += $prompt.val().substring(3) + '/';
            console.log('options', options);
        }

        executeCommand(command, options, function (err, stdout, stderr) {

            // console.log('prompt', $prompt.val().substring(0, 2));

            if (stderr) $output.text(stderr);
            else $output.text(stdout);
            
            $prompt.val("");
        });

    });

    // Good luck!
    // ---------------------------------------------------------------------

});