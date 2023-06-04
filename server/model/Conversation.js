
import mongoose from "mongoose";

const CoversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
    timeStamps: true
    }
);

const conversation = mongoose.model('Conversation', CoversationSchema);

export default conversation;