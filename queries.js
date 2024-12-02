//1 "bird"
db.animals.json.find({ "type": "Bird" });

//2 Lists all animals found in "Australia".
db.animals.json.find({"found_in_countries":"Australia"});

//3 Recover animals with a conservation status of "Critically Endangered".
db.animals.json.find({"conservation_status": "Critically Endangered"});

//4 Select the animals that are "Herbivores" and have a "Forest" habitat.
db.animals.json.find({ "$and": [{"diet": "Herbivore"} , {"habitat": "Forest"}] });

//5 Obtain all animals weighing more than 400 kg.
db.animals.find({ "physical_characteristics.weight": { "$gt": 400000 } });

//6 Find all animals less than 1 meter tall.
db.animals.find({"physical_characteristics.height": {"lt": 100}});

//7 Look up animals that have "China" in their list of countries_where_they_are_found.
db.animals.find({"found_in_countries": "China"});

//8 Find animals with a diet of "Omnivore" and a conservation status of "Endangered".
db.animals.find({"$and": [{"diet": "Omnivore"}, {"conservation_status": "Endangered"}] });

//9 Shows all animals that have "Lion" in their common_name.
db.animals.find({"common_name": "Lion"});

//10 Extract all entries that are longer than 2 meters.
db.animals.find({"physical_characteristics.length": {"$gt": 200}});

//11 Find the animals that have "Africa" ​​in their countries_where_they_are_found list.
db.animals.find({"found_in_countries": {"$regex" : "Africa"} });

//12 List all animals whose scientific name begins with the letter "A".
db.animals.find({"scientific_name": {"$regex": "^A"}});

//13 Look for animals that are "Carnivores" and weigh less than 50 kg.
db.animals.find({"$and": [{"diet": "Carnivore"}, {"physical_characteristics.weight": { "$ltne": 50000 }}]});

//14 Recovers all animals that have a conservation status of "Vulnerable" and a habitat of "Desert".
db.animals.find({"$and": [{"conservation_status": "Vulnerable"}, {"habitat": "Desert"}]});

//15 Find the animals whose common_name contains the word "Tiger".
db.animals.find({"common_name": {"$regex": "Tiger"}});

