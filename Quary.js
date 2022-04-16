db.Skill_Stud.find({ "Bike": { $eq: "Activa" }, "City": { $eq: "Surat" } })

db.Skill_Stud.find({ $or: [{ "City": "Surat" }, { "Bike": "Activa" }] })

db.Skill_Stud.find({ "Marks": { $gt: "50" }, "Bike": { $eq: "passion" } })

// db.Skill_Stud.find({ "Marks": { $gt: 50 }, "Bike": { $eq: "passion" }})

db.Skill_Stud.find({ "Marks": { $gt: 50 }, "Bike": { $eq: "FZ" } })

db.Skill_Stud.find({ "Marks": { $gt: 80 }, "City": { $eq: "Surat" } })


// db.Skill_Stud.find({"Bike":{$not :splender},{"Marks":{$not:{$gte:100}}}})

// db.Skill_Stud.find({"Bike":{$not :splender},
// {"Marks":{$not:100}}})

db.Skill_Stud.find({ "Bike": { $not: { $eq: "splender" } }, "Marks": { $not: { $gte: 80 } } })

    // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-||-03/02/2022-||-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    // Show Records Of Hobbies 
    > db.CLIENT_MASTER.find({ hobbie: { $exists: true } })

db.CLIENT_MASTER.find({ $or: [{ city: { $eq: "Manglore" } }, { buldue: { $gt: 0 } }] })

db.CLIENT_MASTER.find({ $nor: [{ CITY: { $eq: "Manglore" } }, { BALDUE: { $gt: 0 } }] })

db.CLIENT_MASTER.find({ $or: [{ CITY: { $eq: "Manglore" } }, { BALDUE: { $gt: 0 } }] }).count() //Count THe Rwecord


    > db.CLIENT_MASTER.find().limit(2)

    > db.CLIENT_MASTER.find().skip(1).limit(2) //Limit

    > db.CLIENT_MASTER.find().sort({ NAME: -1 }) //Desc

    > db.CLIENT_MASTER.find().sort({ NAME: 1 }) //Acding


