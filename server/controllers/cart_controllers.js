const swag = require('../models/swag');

module.exports ={
    add: (req,res) => {
        let { id } = req.query;
        let { cart } = req.session.user
        let index = cart.indexOf(swag.id === id)
        if (index === -1){
            let selectedSwag = swag.find(swag => swag.id == id );

            cart.push(selectedSwag)
            req.session.user.total+= selectedSwag.price 
        }
        res.status(200).send(req.session.user);
    },

    delete: (req,res) => {
        let { id } = req.query;
        let { cart } = req.session.user;
        let index = cart.indexOf(swag.id === id)
        if (index === -1){
            let selectedSwag = swag.find(swag => swag.id == id );

            cart.splice(selectedSwag,1)
            req.session.user.total -= selectedSwag.price 
        }
        
        res.status(200).send(req.session.user);
    },

    checkout: (req,res,) => {
        let { user } = req.session;
        user.cart = [];
        user.total = 0;

        res.status(200).send(req.session.user)
        
    }
}