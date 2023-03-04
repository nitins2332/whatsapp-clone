import Conversation from "../Model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return res.status(200).json({ message: "Conversation already exists" });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return res.status(200).json({ message: "Conversation saved successfully" });
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
