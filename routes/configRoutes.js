const indexR = require("./index");
const usersR = require("./users");
const gamesR = require("./games");
const playersR = require("./players");
// שיעורי בית לעופר 
const vipsR = require("./vips");
const showsR = require("./shows");


exports.routesInit = (app) => {
// הגדרת ראוטים לאיזה ראוטר הם שייכים
    app.use("/", indexR);
    app.use("/users", usersR);
    app.use("/games", gamesR);
    app.use("/players", playersR);

// שיעורי בית לעופר 
    app.use("/vips", vipsR);
    app.use("/shows", showsR);
}