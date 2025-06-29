"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Sparkles, Rocket, HelpCircle } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

type ChatSystemProps = {
  useRetroFont?: boolean
}

const EXAMPLE_QUESTIONS = [
  "Tell me about Jupiter's Great Red Spot",
  "What makes Saturn's rings so special?",
  "How hot is Venus?",
  "What's special about Mars?",
  "Which planet has the most moons?",
  "Tell me about space missions to other planets",
]

export function ChatSystem({ useRetroFont = false }: { useRetroFont?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "🚀 Hello, space explorer! I'm your AI guide to the solar system. Ask me anything about planets, moons, space missions, or cosmic phenomena!\n\n💡 Try asking: 'What makes Saturn's rings so special?' or 'Tell me about Mars exploration!'",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showExamples, setShowExamples] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input.trim()
    setInput("")
    setIsLoading(true)
    setShowExamples(false)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response")
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "🛸 Oops! My cosmic connection seems to be disrupted. Please try asking your question again!",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleClick = (question: string) => {
    setInput(question)
    setShowExamples(false)
  }

  return (
    <Card
      className={`w-96 h-[600px] border-2 shadow-2xl glass-card border-border/20 ${useRetroFont ? "cosmic-card" : ""}`}
    >
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-t-lg">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="h-6 w-6 text-blue-400" />
              <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-purple-400 animate-pulse" />
            </div>
            <div>
              <span className={`gradient-text ${useRetroFont ? "cosmic-font-small" : ""}`}>Solar System AI</span>
              <p
                className={`text-xs text-muted-foreground font-normal mt-1 ${useRetroFont ? "cosmic-font-small" : ""}`}
              >
                Your cosmic companion
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowExamples(!showExamples)}
            className={`h-8 w-8 ${useRetroFont ? "cosmic-button" : ""}`}
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-[520px]">
        {showExamples && (
          <div className="p-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-b border-border/10">
            <p className={`text-xs text-muted-foreground mb-2 ${useRetroFont ? "cosmic-font-small" : ""}`}>
              💡 Try these questions:
            </p>
            <div className="space-y-1">
              {EXAMPLE_QUESTIONS.slice(0, 4).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  className={`block w-full text-left text-xs p-2 transition-colors rounded glass-card hover:bg-accent/50 ${useRetroFont ? "cosmic-button" : ""}`}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-lg rounded-full ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : "bg-gradient-to-r from-purple-500 to-purple-600"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Rocket className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`p-4 shadow-lg rounded-2xl ${
                      message.role === "user" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "glass-card"
                    } ${useRetroFont ? "cosmic-card" : ""}`}
                  >
                    <p
                      className={`leading-relaxed whitespace-pre-line text-sm ${useRetroFont ? "cosmic-font-small" : ""}`}
                    >
                      {message.content}
                    </p>
                    <p className={`text-xs opacity-70 mt-2 ${useRetroFont ? "cosmic-font-small" : ""}`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg rounded-full">
                    <Rocket className="h-5 w-5 text-white animate-pulse" />
                  </div>
                  <div className={`glass-card rounded-2xl p-4 ${useRetroFont ? "cosmic-card" : ""}`}>
                    <div className="flex space-x-2 items-center">
                      <div className="w-2 h-2 bg-blue-400 animate-bounce rounded-full"></div>
                      <div
                        className="w-2 h-2 bg-purple-400 animate-bounce rounded-full"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-pink-400 animate-bounce rounded-full"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <span className={`text-xs text-muted-foreground ml-2 ${useRetroFont ? "cosmic-font-small" : ""}`}>
                        Exploring the cosmos...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t border-border/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about planets, moons, space missions..."
              disabled={isLoading}
              className={`border-border/20 focus:border-blue-400 glass-card ${useRetroFont ? "cosmic-card" : ""}`}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className={`w-12 h-12 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full ${useRetroFont ? "cosmic-button" : ""}`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className={`text-xs text-muted-foreground mt-2 text-center ${useRetroFont ? "cosmic-font-small" : ""}`}>
            🌟 Powered by Solar System AI • Ask anything about space!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
