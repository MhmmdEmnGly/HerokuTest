const express = require('express');
const datalar = require('./sensorler,js');

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Now you are in Index Page")
    console.log("Kullanıcı Index sayfasında ");
})

app.get("/sensorler", (req, res) => {
    res.status(200).json(datalar)
})

app.get("/sensorler/:id", (req, res) => {
    var kullanicidanGelenId = req.params.id;
    var secilenVeri = datalar.find((secilenVeri) => secilenVeri.id === parseInt(kullanicidanGelenId))

    if (secilenVeri) {
        res.send(secilenVeri)
        console.log("Kullanici Sensorler " + kullanicidanGelenId + " sayfasinda")
    }
    else {
        res.send('Hatali arama yaptiniz lutfen arama id sini degistirin')
        console.log("KUllanici hatali arama yapti...\n sensorler " + kullanicidanGelenId + "sayfasına giris yapmayı denedi");
    }

})


app.listen(port);