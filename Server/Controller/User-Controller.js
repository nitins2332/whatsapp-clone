import user from "../Model/User.js";

export const addUser = async (req, res) => {
  try {
    let exist = await user.findOne({ sub: req.body.sub });

    if (exist) {
      res.status(200).json({ message: "User already exist" });
      return;
    }

    const newUser = new user(req.body);
    await newUser.save();
    return res.status(200).json({ newUser });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const Users = await user.find({});
    return res.status(200).json(Users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
