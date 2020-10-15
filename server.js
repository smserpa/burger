const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req,res) => {
    connection.query("SELECT * FROM burgers", (err, data) => {
        if (err) {
            return err;
        }
        console.log(data);
        res.render("index", { burgers: data });
    })
})

app.listen(PORT, () => {

console.log(`Server listening on port ${PORT}`);
});
