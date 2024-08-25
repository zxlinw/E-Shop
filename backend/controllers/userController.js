import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
});

// logs user out and clears the cookie
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});

const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});

const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
});

const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
});

export {
    authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile, 
    getUsers, 
    getUserByID, 
    deleteUser, 
    updateUser
};