const express = require("express");
const Fingerprint = require("express-fingerprint");
const app = express();

app.use(
  Fingerprint({
    parameters: [
      Fingerprint.useragent,
      Fingerprint.acceptHeaders,
      Fingerprint.geoip,
      // Additional parameters
      function (next) {
        // ...do something...
        next(null, {
          param1: "value1",
        });
      },
      function (next) {
        // ...do something...
        next(null, {
          param2: "value2",
        });
      },
    ],
  })
);

app.get("/", (req, res) => {
  console.log(req.fingerprint);

  res.send(req.fingerprint);
});

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
