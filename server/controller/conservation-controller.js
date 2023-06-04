import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  try {
    const senderID = request.body.senderID;
    const recieverID = request.body.recieverID;

    const exist = await Conversation.findOne({
      members: { $all: [recieverID, senderID] },
    });

    if (exist){
        return response.status(200).json('Conversation already exists')
    }
    const newConversation = new Conversation({
        members: [senderID, recieverID]
    })
    await newConversation.save();
    return response.status(200).json('Conversation saved succesfully');

  } catch (error) {
    return response.status(500).json(error.message);
  }
}

export const getConversation = async (request, response) => {
    try{

        const senderID = request.body.senderID;
        const recieverID = request.body.recieverID;

        let conversation = await Conversation.findOne({ members: { $all: [recieverID, senderID] }})
        return response.status(200).json(conversation);
    } catch(error){
        return response.status(500).json(error.message)
    }
}
