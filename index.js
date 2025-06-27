import express from "express";
import path from "path";
import url from "url";
const PORT = 5000;

const app = express();
const notes = [];
const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
// EJS CONFIG 
app.set('view engine', 'ejs');
app.set('views', "note-app");

// Body Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// RENDER NOTE APP
app.get('/notes', (req, res)=>{
    res.render('notes', {notes, error:null});
})
// ADD NOTE 
app.post('/add', (req, res)=>{
    const { topic, note } = req.body;
    if(note){
        notes.push({topic, note});
    }else{
        return res.render('notes', {notes, error: 'Please add your note!'})
    }
    res.redirect('/notes');
})


app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})
