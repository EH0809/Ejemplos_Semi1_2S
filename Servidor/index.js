var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const cors = require('cors');

var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

var AWS = require('aws-sdk');


var port = 9000;
app.listen(port);
console.log("Escuchando en el puerto", port)


/*
app.get('/', function (req, res ) {
	res.json({messaje: 'Hola Seminario'})
});
*/

app.post('/subirfoto', function (req, res){

    var id = req.body.id;
    var foto = req.body.foto;
    //carpeta y nombre que quieran darle a la imagen
  
    var nombrei = "fotos/" + id + ".jpg"; // fotos -> se llama la carpeta 
    //se convierte la base64 a bytes
    let buff = new Buffer.from(foto, 'base64');
  


    AWS.config.update({
        region: 'us-east-1', // se coloca la region del bucket 
        accessKeyId: 'AKIAX6565FGQSGH4LP5W',
        secretAccessKey: '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'
    });

    var s3 = new AWS.S3(); // se crea una variable que pueda tener acceso a las caracteristicas de S3
    // metodo 1
    const params = {
      Bucket: "ejemplo2s",
      Key: nombrei,
      Body: buff,
      ContentType: "image"
    };
    const putResult = s3.putObject(params).promise();
    res.json({ mensaje: putResult })

});

app.post('/obtenerfoto', function (req, res) {
    var id = req.body.id;
    var nombrei = "fotos/"+id+".jpg";

    AWS.config.update({
        region: 'us-east-1', // se coloca la region del bucket 
        accessKeyId: 'AKIAX6565FGQSGH4LP5W',
        secretAccessKey: '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'
    });

    var S3 = new AWS.S3();

    var getParams = 
    {
        Bucket: "ejemplo2s",
        Key: nombrei
    }

    S3.getObject(getParams, function(err, data){
        if (err)
        {
            res.json(err)
        }else
        {
            var dataBase64 = Buffer.from(data.Body).toString('base64'); //resgresar de byte a base
            res.json({mensaje: dataBase64})
        }

    })

});




			