const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(https://erdapa.github.io/mp4age, () => {
    console.log('Server Works !!!');
});

app.get('/download', (req,res) => {
    var URL = req.query.URL;
    
    
res.header('Content-Disposition', 'attachment; filename="video.mp3"');
ytdl(URL, {
    format: 'mp3'
    }).pipe(res);
});
