const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
    const { username, password } = req.body;

    // dummy user check (replace with DB later)
    const user = {
        _id: "123",
        username,
        role: "user" // or "admin"
    };

    if (username !== "testuser" || password !== "123456") {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { userId: user._id, role: user.role },
        "secretKey",
        { expiresIn: "1h" }
    );

    res.json({ token });
};

module.exports = { loginUser };