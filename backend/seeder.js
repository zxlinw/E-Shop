// script to seed dummy data from js files to mongodb database
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // inserts users from js file into the db
        const createdUsers = await User.insertMany(users);

        // extracts the only admin user from the returned array
        const adminUser = createdUsers[0]._id;

        // creates a new array with same products as in js file but with additional user field
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        // inserts the new products array
        await Product.insertMany(sampleProducts);

        console.log('Data imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);

    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
    
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}




