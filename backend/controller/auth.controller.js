import User from "../models/user.model.js";
import { formatDate } from "../utils/formatDate.utils.js";

export const Register = async (req, res) => {
  try {
    const { fullName, phoneNumber, personId, birthDate } = req.body;

    if (!personId) {
      return res.status(400).json({ error: "Persone  is required!" });
    }

    if (!phoneNumber) {
      return res.status(400).json({ error: "PhoneNumber  is required!" });
    }

    if (!birthDate) {
      return res.status(400).json({ error: "Birth date is required!" });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
      return res
        .status(400)
        .json({ error: "Invalid birth date format. Use YYYY-MM-DD." });
    }

    const fromatedDate = formatDate(birthDate);

    const newUser = await User.create({
      fullName,
      phoneNumber,
      personId,
      birthDate: fromatedDate,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const LogIn = async (req, res) => {
  try {
    const { phonenumber } = req.params;
    const user = await User.findOne({ phoneNumber: phonenumber });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User with this number not esixt!!" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const { fullName, phoneNumber } = req.body;
    const { personId } = req.params;

    // ✅ Find user by personId
    const user = await User.findOne({ personId: personId });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User Not Found!!" });
    }

    const isExistPhoneNumber = await User.findOne({ phoneNumber });

    if (isExistPhoneNumber && isExistPhoneNumber.personId !== personId) {
      return res.status(400).json({
        success: false,
        message: "Phone number is already used by another user!",
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { personId: personId },
      { fullName, phoneNumber },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      user: updatedUser,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
