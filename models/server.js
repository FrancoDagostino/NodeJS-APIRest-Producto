require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { dbConnection } = require('../database/config');


class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.path = '/api/productos';
        
        this.conectarDB();
        
        this.middlewares();
        
        this.routes();

        // this.middlewar();
        //router
        //middlewar
        //conexion bd

    }


    async conectarDB(){
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use(this.path,require('../routes/producto'));
    }


    
    listen(){
    
        this.app.listen(this.port,()=>{
           console.log(`El servidor esta corriendo en el puerto ${this.port}`) 
        });
    }

}

module.exports = Server;