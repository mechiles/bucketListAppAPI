bucketListAppAPI
================

This is the backend API for the Bucket List Todo App using MongoJs, Restify and Ionic. For the full tutorial, visit: http://thejackalofjavascript.com/an-end-to-end-hybrid-app/.

I used MongoLabs for the mongodb connection. Feel free to use any provider or local service you like.

For MongoLabs changes:

In server.js change line 4 to meet your crednetials, lab server and port:

var db = mongojs('mongodb://<mongolabusername>:<mongolabpassword>@<mongolabsrvid>.mongolab.com:<mongolabport>/bucketlistapp', ['appUsers','bucketLists']);
