module.exports = function(app,path){

    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
};