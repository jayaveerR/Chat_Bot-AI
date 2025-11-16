
## 🧠 ChatGPT + n8n Automated Chatbot
AI-Powered Chatbot Workflow with n8n, Chat Trigger & Persistent Memory


## 🚀 Overview


- This project is an AI-powered chatbot built using:

- n8n — workflow automation

- Chat Trigger — to receive user messages

- OpenAI (ChatGPT) — to generate intelligent responses

- Memory Storage (KV Store / Database) — to save user context

- Netlify Frontend — simple UI for interacting with the bot

The bot remembers conversations, processes user queries, and replies using a customizable n8n workflow.



##  📌 Features
- 🟢 Real-time conversational chatbot

- 🔁 Chat Trigger → AI Agent → Memory → Response flow

- 🧠 Long-term memory support

- ⚙️ Fully automated using n8n

- 🌐 Frontend deployed on Netlify

- 💬 AI-generated responses (OpenAI GPT)

- 🔌 Easy to extend and modify workflow


  
## 🧩 Architecture (Flow)

User Message

↓

Chat Trigger (n8n)

↓

Get Memory (KV Store / DB)

↓

OpenAI ChatGPT (AI Agent)

↓

Save Updated Memory

↓

Return Response to Frontend


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.


---

## ⚙️ Tech Stack

| Layer | Technology |
|------|------------|
| Automation | n8n |
| AI Engine | OpenAI GPT |
| Frontend | HTML, JS, Netlify |
| Backend Trigger | n8n Webhook |
| Storage | KV Store / Database |

---


## Demo

https://chatgptn8n.netlify.app/

