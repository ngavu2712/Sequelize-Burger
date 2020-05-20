// Export borewell model
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        Burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue : false
        } 
    });

     

    return Burger;
}