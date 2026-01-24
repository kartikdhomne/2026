import React from "react";

const MessageList = ({ messages, messageBoxRef }) => {
  return (
    <div ref={messageBoxRef} className="msglist-box">
      {messages.map((msg) => {
        return (
          <div
            key={msg.id}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "6px 0",
            }}
          >
            <span className="message">{msg.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
