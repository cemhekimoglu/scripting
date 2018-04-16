var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received.', data);
      var complete = [];
      for(i = 0; i < data.length; i++) {
        complete += data[i];
      }
        return complete;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML();
