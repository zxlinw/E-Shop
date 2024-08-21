import bcrypt from 'bcryptjs';

//  name, email, password, isAdmin --> as per user model

const users = [
    {
        name: "Admin User",
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: "User 1",
        email: 'user1@email.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
    {
        name: "User 2",
        email: 'user2@email.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
];

export default users;