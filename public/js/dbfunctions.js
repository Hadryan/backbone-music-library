
//dbfunctions

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('music', server, {safe: true});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'music' database");
        db.collection('albums', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'albums' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findById = function(req,res) {
    var id = req.params.id;
    console.log('Retrieving album: ' + id);
    db.collection('albums', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req,res) {
    db.collection('albums', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addAlbum = function(req,res) {
    var album = req.body;
    console.log('Adding album: ' + JSON.stringify(album));
    db.collection('albums', function(err, collection) {
        collection.insert(album, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateAlbum = function(req,res) {
    var id = req.params.id;
    var album = req.body;
    delete album._id;
    console.log('Updating album: ' + id);
    console.log(JSON.stringify(album));
    db.collection('albums', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, album, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating album: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(album);
            }
        });
    });
}

exports.deleteAlbum = function(req,res) {
    var id = req.params.id;
    console.log('Deleting album: ' + id);
    db.collection('albums', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate DB with data to boostrap it

var populateDB = function() {

    var albums = [
        {
            title: 'In the Nightside Eclipse'
        },
        {
            title: 'Anthems to the Welkin at Dusk'
        }
    ];

    db.collection('albums', function(err, collection) {
        collection.insert(albums, {safe:true}, function(err, result) {});
    });

};