const User = require("../models/user");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(200).json({
        msg: `Created user ${newUser.name}`,
        user: newUser,
    });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
        res.status(404).json({ msg: `No user with email ${email}` });
    }

    const passwordCorrect = await foundUser.verifyPassword(password);
    if (!passwordCorrect) {
        res.status(401).json({ msg: `Password is incorrect` });
    }

    res.status(200).json({
        msg: `Welcome back, ${foundUser.name}`,
        user: foundUser,
    });
};

module.exports = { loginUser, registerUser };
