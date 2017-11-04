module.exports = {
    getUser: (req, res) => {
        var query = "select * from user";
        executeQuery(res, query);
    },
    //POST API
    updateUser: (req, res) => {
        var query = "INSERT INTO user (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
        executeQuery(res, query);
    },
    //PUT API
    createUser: (req, res) => {
        var query = "select * from user";
        executeQuery(res, query);
    },
    //DELETE API
    deleteUser: (req, res) => {
        var query = "DELETE FROM user WHERE Id=" + req.params.id;
        executeQuery(res, query);
    },
    login: (req, res) => {
        //CODE
    },
    signup: (req, res) => {
        //CODE
    },
    addReview: (req, res) => {
        //CODE
    }
};
//# sourceMappingURL=user.js.map