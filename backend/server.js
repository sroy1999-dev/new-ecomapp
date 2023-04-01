const app = require('./index');
const dotenv = require('dotenv');
const connectDatabase = require('./database/database');


//Handling unacuaght exception
process.on('uncaughtException', (err) => {
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server for handling uncaught exception");
})

//config
dotenv.config({path:"/backend/.env"});

//create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//DB
connectDatabase();

//API
app.get("/", (req, res) => {
    res.send("Hello");
})

//unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandle promise rejection`);
    server.close(() => {
        process.exit(1);
    });
});