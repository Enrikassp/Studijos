import sequelize from "./config/sequelize.js";
import Address from "./models/Adress.model.js";
import User from "./models/User.model.js";

// const usersResponse = await User.findAll({
//   include: [{ model: Address }],
// });

// const users = usersResponse.map((user) => user.toJSON());
// console.log(users);

// const addressResponse = await Address.findAll({ include: [User] });
// const addresses = addressResponse.map((address) => address.toJSON());
// console.log(addresses);
