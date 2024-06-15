import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";

// Swagger: Configuracion
// Definir la ruta de los endpoints "apis"
const options= {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Inventario API-Rest",
            version: "2.0.0",
            description: "API REST para la gestion de Inventario"},        
    },
    apis:['./index.js']
}

//Swagger: Invocar la funcion swaggerSpec
const swaggerSpec = swaggerJSDoc(options);

//Swagger: Crear aplicacion
const swaggerDocs = (app,port)=>{
    app.use('/api/v1/documentacion',swaggerui.serve,swaggerui.setup(swaggerSpec));
}

//Swagger: Exportar la ruta que genera la documentacion
export default swaggerDocs;