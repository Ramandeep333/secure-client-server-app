const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/roleMiddleware");

router.get("/protected-route", verifyToken, (req, res) => {
    res.json({ message: "You are authorized!" });
});

router.get("/admin-route", verifyToken, adminOnly, (req, res) => {
    res.json({ message: "Welcome Admin!" });
});

const { body, validationResult } = require("express-validator");

router.post(
    "/register",
    [
        body("username").notEmpty(),
        body("password").isLength({ min: 6 }),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.json({ message: "User validated & created" });
    }
);

module.exports = router;