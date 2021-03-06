const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recursos
 * 
 * 
 /*
 Métodos HTTP:
 *
 *GET: Buscar/Listar uma informação do back-end
 *POST: Criar uma informação no back-end
 *PUT: Alterar uma informação no back-end
 *DELETE: Deletar uma informação no back-end
 */

 /**
 *Tipos de parâmetros:
 *
 * Query Params: Parametros nomeados enviados na rota após o "?" servem para (filtros, paginação)
 * Route Params: Paraemtros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

  /**
  * SQL: MYSQL, SQLITE, POSTGRESQL, ORACLE, MICROSOFT SQL SERVER
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * QUERY BUILDER: table('users').select('*').where( )
   */
