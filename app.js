import express from 'express';
import path from 'path';
import url from 'url';
const PORT = 8000;
const app = express();

// LOCATION 
const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// SETUP EJS 
app.set('view engine', 'ejs');
app.set('views', 'views');

// MiddleWare body 
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
