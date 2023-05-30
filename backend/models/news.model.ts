import mongoose from 'mongoose';
import { INews } from "../types/news.type";

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: String, required: true },
    category: { type: String, enum: ['politics', 'sports', 'celebrities', 'travel'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model<INews>('News', newsSchema);
