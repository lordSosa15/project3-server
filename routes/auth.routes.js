const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "20min",
  });
};

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(401).json({ message: "Please provide email and password." });

  const userExists = await User.findOne({ email });

  if (userExists) res.status(400).json({ message: "User already exists" });

  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ email, password: hashedPassword });
    const token = generateToken(user._id);
    res.status(200).json({ email, id: user._id, role: user.role, token });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(401).json({ message: "Please provide email and password." });

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user._id);
      res.status(200).json({ email, id: user._id, role: user.role, token });
    } else res.status(400).json({ message: "Invalid Credentials" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
