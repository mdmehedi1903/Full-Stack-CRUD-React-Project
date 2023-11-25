// Configuration Import
const app = require('./app');


// Application Running
const PORT = process.env.RUNNING_PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Application run at @${PORT}`);
})