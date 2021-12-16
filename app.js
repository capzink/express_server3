import  express  from "express";
const app = express()
import router from './routes/tareas.js'
import notFound from "./middleware/notfound.js";

// import routes
const { pathname: publicFolder}=new URL('./public', import.meta.url)


//middleware
app.use(express.urlencoded())
app.use(express.static(publicFolder))
app.use('/',router)
app.use(notFound);


//settings
app.set('view engine', 'ejs')
app.set('views', 'views')
const port = process.env.PORT || 3000;







app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})