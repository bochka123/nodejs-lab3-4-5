import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { ServerError } from "../errors/server.error";

import { IAdmin } from "../types/admin.type";

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
});

adminSchema.pre('save', function (next) {
    const admin = this;

    if (!admin.isModified('password')) return next();
    if (admin.isModified('password')) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(admin.password, salt, function (err, hash) {
                if (err) return next(err);
                admin.password = hash;
                next();
            })
        });
    }
});

// adminSchema.methods.comparePassword = function (
//     candidatePassword: string,
//     cb: (arg: any, isMatch?: boolean) => void
// ) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

adminSchema.methods.comparePassword = function (
    candidatePassword: string
) {
    return bcrypt.compareSync(candidatePassword, this.password);
}

const Admin = mongoose.model<IAdmin>('Admin', adminSchema);
export default Admin;
