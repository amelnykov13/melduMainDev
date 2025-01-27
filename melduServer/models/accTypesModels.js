const mongoose = require('mongoose');

import {
    EducationSchema,
    TestSchema,
    CertificationSchema,
    SkillSchema,
    InterestSchema,
    ExperienceSchema,
    ServiceSchema,
} from './subSchemas';

const StudentSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 400,
    },

    picture: {},

    education: {
        educationData: [EducationSchema],
        required: true
    },
    
    interests: {
        interestsData: [InterestSchema],
        required: true,
    },
    
    testScore: {
        testsData: [TestSchema],
    },

})

const TutorSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250,
    },

    picture: {},
    
    education: {
        educationData: [EducationSchema],
        required: true,
    },
    
    experience: {
        experienceData: [ExperienceSchema],
        required: true,
    },

    skills: {
        skillsData: [SkillSchema],
        required: true,
    },

    services: {
        servicesData: [ServiceSchema],
    },

    certificaiton: {
        certificaitonsData: [CertificationSchema],
    },

})

module.exports = {
    StudentSchema,
    TutorSchema
}