const path = require('path');
const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('your voting friend: listening on 3000');
})