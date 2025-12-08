'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Send, Square, Bot, User, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

const SYSTEM_PROMPT = `You are Perfionix AI Assistant – a professional, knowledgeable AI assistant for Perfionix AI company.

**RESPONSE FORMAT RULES:**
- Always respond in a well-structured, organized format
- Use headers (##) for main sections
- Use bullet points (•) for lists
- Use numbered lists (1. 2. 3.) for step-by-step instructions
- Keep paragraphs short and scannable
- Use **bold** for important terms
- Add line breaks between sections for readability

**YOUR CAPABILITIES:**
• Answer questions about Perfionix AI services and products
• Provide information about the team
• Guide users through the website
• Explain our AI solutions and technologies

**COMPANY INFORMATION:**

## About Perfionix AI
Perfionix AI is a cutting-edge AI consulting company providing next-generation AI solutions for digital transformation.

## Our Services
• **AI Consulting** - Strategic AI implementation and roadmap planning
• **AgriTech AI** - Smart farming and agricultural intelligence solutions
• **HealthTech AI** - Healthcare automation and diagnostic AI
• **Renewable Energy AI** - Intelligent energy management systems
• **FoodTech AI** - Food industry optimization with AI
• **Banking AI** - Financial services automation and fraud detection

## Our Products
• **AXIO AI** - All-in-One Productivity Intelligence platform with Smart Chat, DocIQ, VizIQ, Smart Tasks, Quick Notes, and Reminders
• **DocNavigator AI** - Documentation Crawler & RAG System that turns any docs into an AI knowledge base

## Leadership Team
• **Shubham Rahangdale** - Founder & CEO
• **Malay Jain** - Co-founder
• **Aniket Kumar Mishra** - Co-founder

## Contact Information
• **Email:** connect@perfionixai.com
• **Phone:** +91 6261330148
• **LinkedIn:** https://www.linkedin.com/company/perfionix-ai-solutions
• **Instagram:** https://www.instagram.com/perfionix_ai.io

Always be helpful, professional, and provide structured responses. If asked about something you don't know, politely say so and suggest contacting the team directly.`

const GEMINI_API_KEY = 'AIzaSyCzwA_xaKNtIJrKB2wFaZG6U8zkybqdORs'
const GEMINI_MODEL = 'gemini-2.5-flash'
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse&key=${GEMINI_API_KEY}`

type ChatRole = 'system' | 'user' | 'assistant'

interface ChatMessage {
  role: ChatRole
  content: string
}


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([{
    role: 'assistant',
    content: '## Welcome to Perfionix AI! 👋\n\nI\'m your AI assistant. I can help you with:\n\n• **Services** - Learn about our AI solutions\n• **Products** - Explore AXIO AI & DocNavigator AI\n• **Team** - Meet our leadership\n• **Contact** - Get in touch with us\n\nHow can I assist you today?'
  }])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const controllerRef = useRef<AbortController | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const widgetRef = useRef<HTMLDivElement | null>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    return () => {
      controllerRef.current?.abort()
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [isOpen])

  const toggleWidget = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessage = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage, { role: 'assistant', content: '' }])
    setInput('')
    setIsLoading(true)

    const abortController = new AbortController()
    controllerRef.current = abortController

    try {
      // Build Gemini API request format
      const geminiContents = [
        // System instruction as first user message
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }]
        },
        {
          role: 'model',
          parts: [{ text: 'Understood. I am the Perfionix AI Assistant. I will provide well-structured, organized responses using headers, bullet points, and clear formatting to help users effectively.' }]
        },
        // Convert chat history to Gemini format
        ...messages.slice(1).map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        // Add current user message
        {
          role: 'user',
          parts: [{ text: userMessage.content }]
        }
      ]

      const payload = {
        contents: geminiContents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024
        }
      }

      const response = await fetch(GEMINI_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: abortController.signal
      })

      if (!response.ok || !response.body) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData?.error?.message || 'Unable to reach Gemini API.')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunkText = decoder.decode(value, { stream: true })
        const lines = chunkText.split('\n')
        lines.forEach((line) => {
          if (!line.trim() || !line.startsWith('data: ')) return
          try {
            const jsonStr = line.slice(6) // Remove 'data: ' prefix
            const parsed = JSON.parse(jsonStr)
            const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text
            if (text) {
              assistantContent += text
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: assistantContent }
                return updated
              })
            }
          } catch (error) {
            // swallow JSON parse errors for partial lines
          }
        })
      }
    } catch (error: any) {
      const errorMessage = error?.message ?? 'Unexpected error while connecting to Gemini API.'
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: `## ⚠️ Connection Error\n\n${errorMessage}\n\nPlease try again or contact us at **connect@perfionixai.com**`
        }
        return updated
      })
    } finally {
      setIsLoading(false)
      controllerRef.current = null
    }
  }

  const handleStop = () => {
    controllerRef.current?.abort()
    setIsLoading(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      const form = event.currentTarget.form
      if (form) form.requestSubmit()
    }
  }

  const renderStructuredContent = (content: string) => {
    // Split by double newlines for paragraphs/sections
    const blocks = content.split(/\n\n+/).map((block) => block.trim()).filter(Boolean)

    if (blocks.length === 0) {
      return <span>{content}</span>
    }

    return blocks.map((block, index) => {
      // Check for headers (## Header)
      if (block.startsWith('## ')) {
        return (
          <h3 key={`header-${index}`} className="text-base font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            {block.replace(/^##\s*/, '')}
          </h3>
        )
      }

      // Check for subheaders (### Header)
      if (block.startsWith('### ')) {
        return (
          <h4 key={`subheader-${index}`} className="text-sm font-semibold text-gray-200 mb-1">
            {block.replace(/^###\s*/, '')}
          </h4>
        )
      }

      const lines = block.split('\n')
      const isBulletList = lines.every((line) => /^[-•●]\s/.test(line.trim()) || line.trim() === '')
      const isNumberedList = lines.every((line) => /^\d+\.\s/.test(line.trim()) || line.trim() === '')

      if (isBulletList) {
        return (
          <ul key={`list-${index}`} className="space-y-1.5 mb-2">
            {lines.filter(line => line.trim()).map((line, lineIndex) => (
              <li key={`list-${index}-item-${lineIndex}`} className="flex items-start gap-2 text-gray-300">
                <span className="text-purple-400 mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineText(line.replace(/^[-•●]\s*/, '')) }} />
              </li>
            ))}
          </ul>
        )
      }

      if (isNumberedList) {
        return (
          <ol key={`list-${index}`} className="space-y-1.5 mb-2">
            {lines.filter(line => line.trim()).map((line, lineIndex) => (
              <li key={`list-${index}-item-${lineIndex}`} className="flex items-start gap-2 text-gray-300">
                <span className="text-cyan-400 font-semibold min-w-[20px]">{lineIndex + 1}.</span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineText(line.replace(/^\d+\.\s*/, '')) }} />
              </li>
            ))}
          </ol>
        )
      }

      return (
        <p key={`paragraph-${index}`} className="leading-relaxed text-gray-300 mb-2">
          {lines.map((line, lineIndex) => (
            <span key={`paragraph-${index}-line-${lineIndex}`}>
              <span dangerouslySetInnerHTML={{ __html: formatInlineText(line) }} />
              {lineIndex !== lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      )
    })
  }

  // Format bold text and links
  const formatInlineText = (text: string): string => {
    return text
      // Bold text **text**
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      // Links [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 underline">$1</a>')
      // Inline code `code`
      .replace(/`([^`]+)`/g, '<code class="bg-slate-700/50 px-1.5 py-0.5 rounded text-cyan-400 text-xs">$1</code>')
  }

  if (!isOpen) {
    return (
      <button
        onClick={toggleWidget}
        className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Open Perfionix AI Assistant"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-cyan-500 to-pink-500 animate-gradient" />

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Inner Ring */}
        <div className="absolute inset-1 rounded-xl bg-[#0a0520]/40 backdrop-blur-sm" />

        {/* Bot Icon */}
        <Bot className="relative w-8 h-8 text-white drop-shadow-lg" />

        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping" />
      </button>
    )
  }

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[95vw] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      style={{ maxHeight: 'calc(100vh - 100px)' }}
    >
      {/* Outer Glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-3xl opacity-70 blur-sm" />

      {/* Main Container */}
      <div className="relative bg-[#0a0520] rounded-3xl overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 100px)' }}>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 p-[1px]">
          <div className="bg-[#0a0520]/95 backdrop-blur-xl px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl opacity-50 blur-sm" />
                <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-purple-500/30">
                  <Image
                    src="/PerfioNix logo.png"
                    alt="Perfionix AI"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white font-space flex items-center gap-2">
                  Perfionix AI
                  <Zap className="w-4 h-4 text-yellow-400" />
                </h3>
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  AI Assistant Online
                </p>
              </div>
            </div>
            <button
              onClick={toggleWidget}
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 rounded-xl flex items-center justify-center transition-all"
              aria-label="Close assistant"
            >
              <X size={18} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#030014] min-h-[300px] max-h-[400px]">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                message.role === 'user'
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                  : 'bg-gradient-to-br from-cyan-500 to-purple-500'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[80%] ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block rounded-2xl px-4 py-3 text-sm text-left ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-purple-500/80 to-pink-500/80 text-white rounded-tr-sm'
                      : 'bg-[#120a30] border border-purple-500/20 text-gray-200 rounded-tl-sm'
                  }`}
                >
                  {renderStructuredContent(message.content)}
                </div>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-[#120a30] border border-purple-500/20 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="border-t border-purple-500/20 bg-[#0a0520] p-4">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="w-full resize-none rounded-xl bg-[#120a30] border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 pl-4 pr-24 py-3.5 text-sm transition-all"
                placeholder="Ask me anything..."
                disabled={isLoading}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {isLoading && (
                  <button
                    type="button"
                    onClick={handleStop}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    title="Stop generating"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-400 hover:to-cyan-400 transition-all"
                  title="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
          <p className="text-[10px] text-gray-600 text-center mt-2">
            Powered by Perfionix AI • Press Enter to send
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatWidget
