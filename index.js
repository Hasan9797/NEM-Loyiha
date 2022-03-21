const express = require("express");
// const path = require("path");
const expresEdege = require("express-edge");
const mongoose = require("mongoose");
// const Post = require("./Modules/Post");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const mongoStore = require("connect-mongo");

//Controllers import
const HomePageCantroller = require("./Controllers/HomePage");
const getPostController = require("./Controllers/getPost");
const postNewController = require("./Controllers/postNew");
const createdController = require("./Controllers/created");
const createUserController = require("./Controllers/createUser");
const storeUserCotroller = require("./Controllers/userStore");
const LogInController = require("./Controllers/login");
const LoginStoreController = require("./Controllers/loginStore"); 

//Validations
const ValidationsMedliwear = require("./middleware/ValidationMedliwear");
// const ValidationsRegister = require("./middleware/validationRegistr"); // shartemas ekan
// osonroq yolibor storeUserni o'zida halqilib ketamiz

const app = express();
const mongoUrl = "mongodb+srv://hasan:lGv4pJh14SLM9Qqh@cluster0.yroge.mongodb.net/MEN-project"

mongoose.connect(mongoUrl);
app.use(expressSession({
    secret: "hasan",
    store: mongoStore.create({mongoUrl: mongoUrl})
}))

app.use(fileUpload()); // file (rasim vahokozolar..) yuklash uchun
app.use(express.static("public"));
app.use(expresEdege.engine);
app.set("views", `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// bosh sahifa, createPost va Mongoodb yordamida post qo'shgan Userni id si orqali o'zining posMenyusiga o'tish
app.get("/", HomePageCantroller);
app.get("/post/:id", getPostController);
app.get("/postnew", postNewController);
app.post("/postnew/created", ValidationsMedliwear, createdController);

//register qismi va Userni databazaga joylash
app.get("/reg", createUserController);
app.post("/auth/reg", storeUserCotroller);

//Login qismi
app.get("/login", LogInController);
app.post("/auth/log", LoginStoreController);

app.listen(5000, () => {console.log("Server has been on PORT 5000...")});

