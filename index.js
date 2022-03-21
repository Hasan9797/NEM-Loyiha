const express = require("express");
const expresEdege = require("express-edge");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const mongoStore = require("connect-mongo");
const connectFlash = require("connect-flash");

//Controllers import
const HomePageCantroller = require("./Controllers/HomePage");
const getPostController = require("./Controllers/getPost");
const postNewController = require("./Controllers/postNew");
const createdController = require("./Controllers/created");
const createUserController = require("./Controllers/createUser");
const storeUserCotroller = require("./Controllers/userStore");
const loginController = require("./Controllers/login");
const loginStoreController = require("./Controllers/loginStore");
const logAutController = require("./Controllers/logaut");


const app = express();

//Validations
const ValidationsMedliwear = require("./middleware/ValidationMedliwear");
const authMiddlewear = require("./middleware/auth");
const redirectMiddlewear = require("./middleware/redirect");

const MongoUrl = "mongodb+srv://hasan:lGv4pJh14SLM9Qqh@cluster0.yroge.mongodb.net/MEN-project"
mongoose.connect(MongoUrl);

app.use(expressSession({
    secret: "hasan",
    store: mongoStore.create({mongoUrl: MongoUrl})
}))

app.use(fileUpload()); // file (rasim vahokozolar..) yuklash uchun
app.use(express.static("public"));
app.use(expresEdege.engine);
app.set("views", `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(connectFlash());

app.use((req, res, next) => {
    app.locals.auth = req.session.userId
    next();
})

// bosh sahifa, createPost va Mongoodb yordamida post qo'shgan Userni id si orqali o'zining posMenyusiga o'tish
app.get("/", HomePageCantroller);
app.get("/post/:id", getPostController);
app.get("/postnew", authMiddlewear, postNewController);
app.post("/postnew/created", ValidationsMedliwear, createdController);

//register qismi va Userni databazaga joylash
app.get("/reg", redirectMiddlewear, createUserController);
app.post("/auth/reg", storeUserCotroller);

//Login qismi
app.get("/login", loginController);
app.post("/auth/log", loginStoreController);

//logaut
app.get("/logaut", logAutController);

app.listen(5000, () => {console.log("Server has been on PORT 5000...")});
