import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatBox = ({ messages, onSend, messageBoxRef }) => {
  return (
    <div className="chat-container">
      <h2>Chat App</h2>

      <MessageList messages={messages} messageBoxRef={messageBoxRef} />

      <MessageInput onSend={onSend} />
    </div>
  );
};

export default ChatBox;
