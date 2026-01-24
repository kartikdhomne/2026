import { useEffect, useRef, useState } from "react";
import ChatBox from "./components/ChatBox";

function App() {
  const [messages, setMessages] = useState([]);
  const messageBoxRef = useRef(null);

  const getBotReply = (text) => {
    const message = text.toLowerCase();

    if (message.includes("hi") || message.includes("hello")) {
      return "Hello 😎";
    }

    if (message.includes("how are you")) {
      return "I'm doing great! 😊";
    }

    if (message.includes("bye")) {
      return "Bye 👋 Take care!";
    }

    return "Sorry, I didn't understand 🤔";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const botReply = getBotReply(text);

    // fake bot reply

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botReply,
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <ChatBox
        messages={messages}
        onSend={sendMessage}
        messageBoxRef={messageBoxRef}
      />
    </>
  );
}

export default App;
