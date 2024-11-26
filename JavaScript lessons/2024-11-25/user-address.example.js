import Address from "./models/Address.model.js";
import User from "./models/User.model.js";

const newUser = await User.create(
	{
		firstName: "Tomas",
		lastName: "Tomass",
		address: {
			country: "Poland",
			city: "Warszaw",
		},
	},
	{ include: [Address] }
);

const usersResponse = await User.findAll({
	include: [{ model: Address }],
});
const users = usersResponse.map((user) => user.toJSON());
console.log(users);

const addressResponse = await Address.findAll({ include: [User] });
const addresses = addressResponse.map((address) => address.toJSON());
console.log(addresses);

export default users;
