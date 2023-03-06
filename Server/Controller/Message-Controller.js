import message from "../Model/Message.js";
import Conversation from "../Model/Conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new message(req.body);

    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });

    return res.status(200).json("Message has been sent successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getMessages = async (req, res) => {
  try {
    const Messages = await message.find({ conversationId: req.params.id });
    return res.status(200).json(Messages);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
