// Here we creating a connection between our MongoDB and node/express server
/* old stuff
const mongoURL = 'mongodb+srv://mongoviope:ug9pszLmcRsKLhNa@cluster0.rcsfm.mongodb.net/lootPusher?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useFindAndModify: false, useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

db.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// Code is used to access the todo list data in json format
todoRoutes.route('/').get(function(req,res) {
    cTodo.find(function(err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    })
});

// URL parameter id which can be accessed via req.params.id. This id is passed into the call of Tood.findById to retrieve an issue item based on it’s ID.
todoRoutes.route("/:id").get(function(req, res) {
    let id = req.params.id;
    cTodo.findById(id, function(err, todo) {
        res.json(todo);
    });
});


// Code is used to update the using if there is any present data
todoRoutes.route("/edit").post(function(req, res) {
    cTodo.findById(req.params._id, function(err, todo) {
        if (!cTodo)
            res.status(404).send("data is not found");
        else
            let obj = {
                name:req.body.todo_name,
                account:req.body.todo_account,
                league:req.body.todo_league,
                level:req.body.todo_level,
                class:req.body.todo_class,
                ascendancy:req.body.todo_ascendancy
            }
            let todo = new cTodo(obj);
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });

});

// with this post request, you will be able to add a new item in your todo list
todoRoutes.route("/add").post(function(req, res) {
    let obj = {
        name:req.body.todo_name,
        account:req.body.todo_account,
        league:req.body.todo_league,
        level:req.body.todo_level,
        class:req.body.todo_class,
        ascendancy:req.body.todo_ascendancy
    }
    let todo = new cTodo(obj);
    todo.save()
    .then(todo => {
        res.status(200).json({'todo': 'todo added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new todo failed');
    });
});

todoRoutes.route("/delete").delete(function(req,todo) { 
    todo.findByIdAndDelete(todo)
        .then(todo => {
            res.status(200).json({'todo': 'todo deleted successfully'});
        })
        .catch(err => {
            res.status(400).send('deleting todo failed');
        });
});

app.use("/todos", todoRoutes);

*/

app.listen(serverPort);

console.log('Server listening on '+corsOptions);