use("ita");

db.res.findOne();

db.res.find({});

db.res.find({},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1});

db.res.find({},{"_id":0,"restaurant_id":1, "name":1, "borough":1, "cuisine":1});

db.res.find({},{"_id":0,"restaurant_id":1, "name":1, "borough":1, "address.zipcode":1});

db.res.find({"borough":"Bronx"});

db.res.find({"borough":"Bronx"}).limit(5);

db.res.find({"borough":"Bronx"}).skip(5).limit(5);

db.res.find({"grades.score":{"$gt":90}});

db.res.find({ "grades": { "$elemMatch":{ "score":{"$gt": 80, "$lt": 100} } } });

db.res.find(   { "address.coord.0": {"$lt": -95.754168 } });

db.res.find({"$and":[{"cuisine":{"$ne":"American "}},{"grades.score":{"$gt":70}},{"address.coord.0":{"$lt":-65.754168}}]});

db.res.aggregate([{"$match":{"cuisine":{"$ne":"American "},"grades.score":{"$gt":70},"address.coord.0":{"$lt":-65.754168}}}]);

db.res.find({"$and":[{"cuisine":{"$ne":"American "}},{"grades.grade":{"$eq":"A"}},{"borough":{"$ne":"Brooklyn"}}]}).sort({"cuisine":-1});

db.res.find({"name":{"$in":[ /^Wil/ ]}},{"restaurant_id":1,"name":1,"borough":1,    "cuisine":1,"_id":0});

db.res.find({"name":{"$in":[ /ces$/ ]}},{"restaurant_id":1,"name":1,"borough":1,    "cuisine":1,"_id":0});

db.res.find({"name":{"$in":[ /Reg/ ]}},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0});

db.res.aggregate([{"$match":{"$or":[{"cuisine":{"$eq":"American "}},{            "cuisine":{"$eq":"Chinese"}}],"borough":{"$eq":"Bronx"}}}]);

db.res.aggregate([{"$match":{"$or":[{"borough":{"$eq":"Staten Island"}},{"borough":{"$eq":"Queens"}},{"borough":{"$eq":"Bronx"}},{"borough":{"$eq":"Brooklyn"}}]}},{"$project":{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0}}]);

db.res.aggregate([{"$match": {"$and": [{"borough": { "$ne": "Staten Island" }},{"borough": { "$ne": "Queens" }},{"borough": { "$ne": "Bronx" }},{"borough": { "$ne": "Brooklyn" }}]}},{"$project":{"restaurant_id": 1,"name": 1,"borough": 1,"cuisine": 1,"_id": 0}}]);

db.res.aggregate([{"$match":{ "grades.score":{"$lte":10} }},{"$project":{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0}}]);

db.res.aggregate([ {"$match":{"$or": [{"$and":[{"cuisine":{"$ne":"American "}},{"cuisine":{"$ne":"Chinese"}}]},{"name":{"$in":[/^Wil/]}}]}},{"$project":{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0}}]);

db.res.find({  "grades":{"$elemMatch":  {      "grade":{"$eq":"A"},"score":{"$eq":11},"date":{"$eq": ISODate("2014-08-11T00:00:00Z")} }       }},    {"restaurant_id":1,"name":1,"grades":1,"_id":0});

db.res.find({"$and":[{"grades.1.date":{"$eq":ISODate     ("2014-08-11T00:00:00Z")}},{"grades.1.score":{"$eq":9}},{"grades.1.grade":{"$eq":"A"}}]},    {"restaurant_id":1,"name":1,"grades":1,"_id":0});

db.res.find({"$and":[{"address.coord.1":{"$gt":42}},{"address.coord.1":{"$lte":52}}]},   {"restaurant_id":1,"name":1,"address":1,"_id":0});

db.res.find({}).sort({"name":1});

db.res.find({}).sort({"name":-1});

db.res.find({},{"_id":0,"cuisine":1,"borough":1}).sort({"cuisine":1,"borough":-1});

db.res.find({"address.street":{"$exists": true}});

db.res.find({"address.street":{"$exists": false}});

db.res.find(         {"$and":[        { "address.coord.0" : { $type : "double" } },        { "address.coord.1" : { $type : "double" } }        ]}     );

db.res.find({  "grades.score": { "$mod": [ 7, 0 ] } },{"_id":0,"name":1,"grades.grade":1,"restaurant_id":1});

db.res.find(    {"name":{"$in":[ /mon/ ]}},    {"address.coord":1,    "name":1,    "borough":1,    "cuisine":1,    "_id":0});

db.res.find(    {"name":{"$in":[ /^Mad/ ]}},    {"address.coord":1,    "name":1,    "borough":1,    "cuisine":1,    "_id":0});