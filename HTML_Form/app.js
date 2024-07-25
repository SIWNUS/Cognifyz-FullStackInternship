const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/submit-form', (req, res)=>{
    const formData = req.body;
    console.log('Form Data: ', formData);
    res.render('result', {formData});
    res.on('finish', ()=>{
        console.log('Shutting down the server...');
        process.exit(0);
    })
} )

app.listen(port, ()=>{
    console.log('Server is running on http://localhost:%d', port);
})