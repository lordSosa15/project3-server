const app = require("./app");
// const http = require("http");
// // const stripe = require('stripe')('sk_test_51L31GjGELAzBcvSqVFQpJmuGCE3Bkte6hd4369sDc8oy5c7xjT6Oq4wIJafyxwF1OZ0PcaZd4GnFAV5hhho1Vuo4003CfCFIcU');
// const express = require("express");
// // const app = express();
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
//   next();
// });

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;
//const server = http.createServer(app);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
