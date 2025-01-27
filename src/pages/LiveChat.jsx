import React, { useState } from "react"
import { Send } from "lucide-react"

const LiveChat = () => {
  const [messages, setMessages] = useState([{ id: 1, text: "Hello! How can I assist you today?", sender: "agent" }])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim() === "") return

    const userMessage = { id: messages.length + 1, text: newMessage, sender: "user" }
    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate agent response
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        text: "Thank you for your message. An agent will respond shortly.",
        sender: "agent",
      }
      setMessages((prevMessages) => [...prevMessages, agentMessage])
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Live Chat Support</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-96 overflow-y-auto p-4 bg-gray-100">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === "user" ? "bg-green-500 text-white" : "bg-white text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600 transition-colors duration-300"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LiveChat

