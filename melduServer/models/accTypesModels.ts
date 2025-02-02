import mongoose from 'mongoose';

import {
    EducationSchema,
    TestSchema,
    CertificationSchema,
    SkillSchema,
    InterestSchema,
    ExperienceSchema,
    ServiceSchema,
} from './subSchemas.js';

export const StudentSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 400,
    },

    picture: { type: String },

    education: {
        type: [{ type: EducationSchema }],
        required: true
    },
    
    interests: {
        type: [{ type: InterestSchema }],
        required: true,
    },
    
    testScore: {
        type: [{ type: TestSchema }],
    },

})

export const TutorSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
    },

    picture: { type: String },
    
    education: {
        type: [{ type: EducationSchema }],
        required: true,
    },
    
    experience: {
        type: [{ type: ExperienceSchema }],
        required: true,
    },

    skills: {
        type: [{ type: SkillSchema}],
        required: true,
    },

    services: {
        type: [{ type: ServiceSchema}],
    },

    certificaiton: {
        type: [{ type: CertificationSchema}],
    },

})

