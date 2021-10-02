const express = require('express');
const app = express();
const dbConn = require('./config/db.connect');
const logger = require('./middleware/logger');
const customerRoutes = require('./routes/user');
const contactRoutes = require('./routes/contacts');
const cors = require('cors');



const port = process.env.PORT || 3000

const corsOption = {
    "origin":"*"
}
app.use(cors(corsOption));
app.use(logger)
app.use(express.json());
app.use('/api/customer',customerRoutes);
app.use('/api/contact',contactRoutes);

dbConn();

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})

