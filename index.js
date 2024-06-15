import express from "express";
import swaggerDocs from "./swagger.js";

const data = [{
    id: 1,
    nombre: 'Producto 1',
    precio: 1000
},
{
    id: 2,
    nombre: 'Producto 2',
    precio: 2000
},
{
    id: 3,
    nombre: 'Producto 3',
    precio: 3000
},
{
    id: 4,
    nombre: 'Producto 4',
    precio: 4000
},
{
    id: 5,
    nombre: 'Producto 5',
    precio: 5000
},
{
    id: 6,
    nombre: 'Producto 6',
    precio: 6000
},
{
    id: 7,
    nombre: 'Producto 7',
    precio: 7000
},
{
    id: 8,
    nombre: 'Producto 8',
    precio: 8000
},
{
    id: 9,
    nombre: 'Producto 9',
    precio: 9000
},
{
    id: 10,
    nombre: 'Producto 10',
    precio: 10000

}]

const app = express();
const PORT = 3000;

  /**
  * @swagger
  * /productos:
  *  get:
  *     summary: Muestra la lista de productos
  *     description: Retorna un objeto con toda la lista de productos
  *     responses:
  *        200:
  *         description: La consulta se ejecuto correctamente
  *         content:
  *            application/json:
  *             schema:
  *              type: object    
  *              properties:
  *                id:
  *                  type: integer
  *                  description: Identificador del producto
  *                  example: 1
  *                nombre:
  *                  type: string
  *                  description: Nombre del producto
  *                  example: Laptop
  *                precio:
  *                  type: number
  *                  description: Precio del producto
  *                  example: 400
  *        500:
  *         description: Error en el servidor
  *         content:
  *          application/json:
  *             schema:
  *              type: object
  *              properties:
  *               error:
  *                 type: string     
  *                 example: Se ha presentado un error
  *  post:
  *     summary: Muestra la lista de productos
  *     description: Retorna un objeto con toda la lista de productos
  *     responses:
  *        200:
  *  put:
  *     summary: Muestra la lista de productos
  *     description: Retorna un objeto con toda la lista de productos
  *     responses:
  *        200:
  *  delete:
  *     summary: Muestra la lista de productos
  *     description: Retorna un objeto con toda la lista de productos
  *     responses:
  *        200:
*/
app.get('/productos', (req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        //Nunca, nunca devuelvan en "produccion" la descripcion del error
        res.status(500).send('Error:',error);
    }});

app.post('/productos', (req, res) => {
    const {nombre}= req.body;
    res.send(`Post ${nombre}`);
});

app.put('/productos/:id', (req, res) => {
    res.send('Update', req.params.id);
});

app.delete('/productos/:id', (req, res) => {
    res.send('Delete', req.params.id);
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
    swaggerDocs(app,PORT)
}
);