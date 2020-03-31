module.exports = (app, db) => {
    app.get( "/posts", (req, res) =>
      db.post.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/post/:id", (req, res) =>
      db.post.findByPk(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/post", (req, res) => 
      db.post.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/post/:id", (req, res) =>
      db.post.update({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/post/:id", (req, res) =>
      db.post.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }
//   name: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     category: DataTypes.STRING,
//     description: DataTypes.STRING,
//     image: DataTypes.STRING