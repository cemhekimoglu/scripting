var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');
    var complete = "";

    response.on('data', function (html) {
      console.log('Chunk Received.');

      // for(i = 0; i < html.length; i++) {
        complete += html;
      // }
    });

    response.on('end', function() {
      callback(complete)
      console.log('Response stream complete.');
    });

  });

}



