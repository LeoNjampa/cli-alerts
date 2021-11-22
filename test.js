const alert = require('./index.js');

alert();
alert({type: `success`, msg: `All done!`, name: `DONE`});
alert({type: `warning`, msg: `Watch that code!`});
alert({type: `info`, msg: `This is Only a playpen!`, name: `REMEMBER`});
alert({type: `error`, msg: `Something has gone wrong`, name: `OOPS`});
