import mongoose from "mongoose";

export const EducationSchema = new mongoose.Schema({
    id: { type: String },
    schoolName: { type: String },
    degree: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    studyField: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    startDate: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 10,
    },
    endDate: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 10,
    },
});

export const TestSchema = new mongoose.Schema({
    id: { type: String },
    testName: { type: String },
    totalScore: { type: Number },
    testDate: { type: String },
});

export const CertificationSchema = new mongoose.Schema({
    certificationName: { type: String },
    organization: { type: String },
    issuedDate: { type: String },
    description: { type: String },
    credentialId: { type: String },
    photo: { type: String },
});

export const SkillSchema = new mongoose.Schema({
    id: { type: String },
    skillName: { type: String },
    description: { type: String },
});

export const InterestSchema = new mongoose.Schema({
    id: { type: String },
    interestName: { type: String },
    description: { type: String },
});

export const ExperienceSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    companyName: { type: String },
    location: { type: String },
    locationType: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
    active: { type: Boolean },
});

export const ServiceSchema = new mongoose.Schema({
    id: { type: String },
    serviceTitle: { type: String },
    hourlyRate: { type: Number },
    scheduleInfo: { type: String },
    description: { type: String },
});

