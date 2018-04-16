var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (html) {
      console.log('Chunk Received.');
      callback(html)



      var complete = [];
      for(i = 0; i < html.length; i++) {
        complete += html[i];
      }
        return complete;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
