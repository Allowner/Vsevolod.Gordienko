const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.listen(3000, function () {
    console.log("app is listening to port 3000");
});
app.post('/add', (req, res) => {
    posts.push(req.body);
    res.status(200).end();
})