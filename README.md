echobox
=======

Super simple node application for simply echoing a request parameter (echo) to logs.

Handy has an endpoint when debugging apps on the same network, I use it to log things from an iOS app without needing it to be connected to my development machine.

Simply start with `node index.js` and then make requests to http://<your ip>:5000/?echo=LogThis.
