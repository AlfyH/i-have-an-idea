const express = require('express'); //how to set up as env?
const routes = require('./routes/route');
const app = express();
const port = process.env.PORT || 3001;

app.use('/', routes);

app.listen(port, () => {
  console.log(`----App ready----`);
});
