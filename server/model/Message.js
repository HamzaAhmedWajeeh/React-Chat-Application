import mongoose, { Mongoose } from "mongoose";

const MessageSchema = new mongoose.Schema({
    conversationID: {
        type: String
    },
    senderID: {
        type: String
    },
    recieverID: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
{
    timestamps: true
});

const message = mongoose.model('Message', MessageSchema);

export default message;