const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 4000;


let User = require('./users.model');






app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})




userRoutes.route('/').get(function(req, res){
    User.find(function(err, users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});

userRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    User.findById(id, function(err, user){
            res.json(users);
        });
});

userRoutes.route('/add').post(function(req, res){
    let user = new User(req.body);
    user.save()
    .then(user=>{
        res.status(200).json({'user': "user added successfully"})
    })
    .catch(err=>{
        res.status(400).send("failed")
    });
});

userRoutes.route('/update/:id').post(function(req, res){
    user.findById(req.params.id, function(err, user){
        if(!user)
        res.status(404).send('not found');
        else
            user.Course_id=req.body.Course_id;
            user.Course_name=req.body.Course_name;
            user.Provider=req.body.Provider;
            user.University=req.body.University;
            user.Parent_subject=req.body.Parent_subject;
            user.Child_subject=req.body.Child_subject;
            user.Url=req.body.Url
            user.Next_session=req.body.Next_session
            user.Length=req.body.Length
            user.Video_url=req.body.Video_url;
            user.save().then(user=>{
                res.json('updated');
            })
            .catch(err=>{
                res.status(400).send('not possible');
            })
    })
})


app.use('/users', userRoutes);

app.listen(PORT, function(){
    console.log("Server is running on PORT:" + PORT)
});