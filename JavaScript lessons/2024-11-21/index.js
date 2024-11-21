import Post from "./models/Post.model.js";
import User from "./models/User.model.js";
Post.sync({ alter: true });
User.sync({ alter: true });
// Perskaitymas visu Useriu
// const usersResponse = await User.findAll();
// const users = usersResponse.map((user) => user.toJSON());
// console.log(users);
// Sukurimas naujo userio
// const newUserResponse = await User.create({
//   name: "Agnė",
//   lastName: "Agnė",
//   email: "agne@agne.lt",
//   age: 27,
// });
// const newUser = newUserResponse.toJSON();

// console.log(newUser);

// Trynimas userio
// await usersResponse[0].destroy();
// await User.destroy({
//   where: {
//     id: 5,
//   },
// });

// Atnaujinimas userio
// usersResponse[1].lastName = "BASD";
// usersResponse[1].name = "Asds";
// await usersResponse[1].save();

// await User.update({name: 'Agne'}, {where: {id:6}})

// const postResponse = await Post.findAll();
// const posts = postResponse.map((post) => post.toJSON());
// console.log(posts);

const newPost = await Post.create({
  title: "JS is awesome",
  description: "But theres so many things to learn...",
  userId: 1,
});
console.log(newPost.toJSON());
