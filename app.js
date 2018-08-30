var db = require('./db');
var mqtt = require('mqtt');
var server ='mqtt://m13.cloudmqtt.com';
var options = {
  port: 14919,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: "ystaukxs",
  password: "JFAKokLHQ0IV",
};

var client  = mqtt.connect( server, options)
 
client.on('connect', function() { // When connected
    // topico do cloudmqtt

    client.subscribe('t', function() {
        //salva a mensagem do topico t 
        client.on('message', function(topico, mensagem, packet) {
            console.log("mensagem '" + mensagem + "' topico '" + topico + "'");

            var valor = { valor: mensagem };
            db.query('insert into embarcado set ? ', valor, function(error) {
                if(!error) {
                    console.log('enviado para o banco de dados.');
                    client.publish('ok', 'ok');
                } else {
                    console.log(error);
                }
            });
                
        });
    });
    
   
});