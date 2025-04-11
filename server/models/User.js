const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    preferences: {
        language: {
            type: String,
            default: 'en'
        },
        notifications: {
            type: Boolean,
            default: true
        }
    },
    lastLogin: {
        type: Date
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

// Method to check if password reset token is valid
UserSchema.methods.isPasswordResetTokenValid = function() {
    return this.resetPasswordExpire && this.resetPasswordExpire > Date.now();
};

// Pre-save middleware to update lastLogin
UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.lastLogin = Date.now();
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);
