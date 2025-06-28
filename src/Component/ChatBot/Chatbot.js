import React, { useState } from "react";
import { Paperclip, Mic, CornerDownLeft } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "./Chatbubble";
import { ChatMessageList } from "./ChatMessageList";
import { ChatInput } from "./ChatInput";
import { Button } from "./Button";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, content: "Hello! How can I help you today?", sender: "ai" },
    { id: 2, content: "I have a question about the component library.", sender: "user" },
    { id: 3, content: "Sure! I'd be happy to help. What would you like to know?", sender: "ai" },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      content: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        content: "This is an AI response to your message.",
        sender: "ai",
      };
        
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className="h-[90vh] w-full max-w-2xl mx-auto border rounded-2xl flex flex-col shadow-2xl p-4"
      style={{
        backgroundImage: "url('/path-to-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex-1 overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/10 p-4">
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={
                  message.sender === "user"
                    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                }
                fallback={message.sender === "user" ? "US" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}
          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                fallback="AI"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </div>

      <div className="p-4 border-t border-white/10">
      <form
  onSubmit={handleSubmit}
  className="relative rounded-xl border bg-white/10 backdrop-blur-md p-2 shadow-inner"
>
  <div className="flex items-center justify-between gap-3">
    <ChatInput
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type your message..."
      onEnter={handleSubmit} // 👈 This triggers on Enter
      className="w-full min-h-[36px] resize-none rounded-lg bg-background border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/40"
    />
    <Button
      type="submit"
      size="sm"
      className="shrink-0 w-28 h-10 bg-white/20 border border-white/20 text-black hover:bg-black/30 transition"
    >
      Send
      <CornerDownLeft className="size-4 ml-2" />
    </Button>
  </div>
</form>

      </div>
    </div>
  );
}
