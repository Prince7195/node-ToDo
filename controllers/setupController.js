var ToDos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('welcomepage');
    })

    app.get('/api/setupTodos', function(req, res) {

        // seed(starting default datas in the DB) database
        var starterToDos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feen Dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        ToDos.create(starterToDos, function(err, result) {
            res.send(result);
        });

    });

}