import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachments: [
      {
        url: String,
        fileName: String,
        fileSize: Number,
      },
    ],
    reactions: [
      {
        emoji: String,
        users: [mongoose.Schema.Types.ObjectId],
      },
    ],
    isEdited: {
      type: Boolean,
      default: false,
    },
    editedAt: Date,
  },
  { timestamps: true }
);

export const Message = mongoose.model('Message', messageSchema);