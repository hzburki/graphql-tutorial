const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use(cors());

mongoose.connect('mongodb://hzburki:nooray4@ds147734.mlab.com:47734/graphql-tut-db');
mongoose.connection.once('open', () => console.log('connection has been made'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => console.log("Listening on port 4000"));