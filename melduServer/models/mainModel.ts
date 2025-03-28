import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import {
    TutorSchema,
    StudentSchema
} from './accTypesModels.js'


mongoose.connect('mongodb://localhost:27017/melduDB')
    .then(() => {
        console.log('Fine');
    })
    .catch((err) => {
        console.log(err);
    })


const AccountSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: uuidv4,
    },
    username: {
        type: String,
        required: true,
        minlength: 3, // Minimum 3 characters
        maxlength: 20, // Maximum 20 characters
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
        minlength: 3, // Minimum 3 characters
        maxlength: 50, // Maximum 50 characters
    },
    email: {
        type: String,
        required: true,
        minlength: 5, // Minimum 5 characters
        maxlength: 100, // Maximum 100 characters
        unique: true,
        match: /.+\@.+\..+/, // Validate email format
    },
    password: {
        type: String,
        required: true,
        minlength: 8, // Minimum 8 characters for security
        maxlength: 128, // Maximum 128 characters (hashed passwords are usually long)
    },
    nationality: {
        type: String,
        required: true,
        minlength: 2, // Minimum 2 characters (e.g., US, UK)
        maxlength: 50, // Maximum 50 characters
    },
    languages: {
        type: [String],
        required: true,
        validate: {
            validator: (v:string[]) => v.length > 0, // Ensure at least one language is provided
            message: 'At least one language must be specified.',
        },
    },
    age: {
        type: Number,
        required: true,
        min: 1, // Minimum age is 1
        max: 120, // Maximum age is 120 (reasonable limit)
    },
    location: {
        type: String,
        required: true,
        minlength: 3, // Minimum 3 characters
        maxlength: 100, // Maximum 100 characters
    },
    initialType: {
        type: String,
        required: true,
        enum: ["student", "tutor"]
    },
    studentProfile: {
        type: StudentSchema, // Embeds the StudentSchema
        default: null,
    },
    tutorProfile: {
        type: TutorSchema, // Embeds the TutorSchema
        default: null,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Account = mongoose.model('Accounts', AccountSchema);

export default Account;

