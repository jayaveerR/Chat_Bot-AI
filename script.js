
  import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
  Chatbot.init({
    "n8nChatUrl": "https://jayaveer1837.app.n8n.cloud/webhook/f7edd085-2c16-450d-9822-2680c17048ba/chat",
    "metadata": {}, // Include any custom data to send with each message to your n8n workflow
    "theme": {
      "button": {
        "backgroundColor": "#ede502",
        "right": 20,
        "bottom": 20,
        "size": 50,
        "iconColor": "#b82828",
        "customIconSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
        "customIconSize": 49,
        "customIconBorderRadius": 15,
        "autoWindowOpen": {
          "autoOpen": false,
          "openDelay": 2
        },
        "borderRadius": "circle"
      },
      
      "chatWindow": {
        "borderRadiusStyle": "rounded",
        "avatarBorderRadius": 25,
        "messageBorderRadius": 6,
        "showTitle": true,
        "title": "N8N Chat UI Bot",
        "titleAvatarSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
        "avatarSize": 40,
        "welcomeMessage": "Hello! This is the default welcome message",
        "errorMessage": "Please connect me to n8n first",
        "backgroundColor": "#ffffff",
        "height": 600,
        "width": 400,
        "fontSize": 16,
        "starterPrompts": [
          "Who are you?",
          "What do you do?"
        ],
        "starterPromptFontSize": 15,
        "renderHTML": false,
        "clearChatOnReload": false,
        "showScrollbar": false,
        "botMessage": {
          "backgroundColor": "#f36539",
          "textColor": "#fafafa",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/334455/bot.svg",
          "showCopyToClipboardIcon": false
        },
        "userMessage": {
          "backgroundColor": "#fff6f3",
          "textColor": "#050505",
          "showAvatar": true,
          "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
        },
        "textInput": {
          "placeholder": "Type your query",
          "backgroundColor": "#ffffff",
          "textColor": "#1e1e1f",
          "sendButtonColor": "#f36539",
          "maxChars": 50,
          "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 50 characters.",
          "autoFocus": false,
          "borderRadius": 6,
          "sendButtonBorderRadius": 50
        },
        "uploadsConfig": {
          "enabled": true,
          "acceptFileTypes": [
            "jpeg",
            "jpg",
            "png",
            "pdf"
          ],
          "maxFiles": 5,
          "maxSizeInMB": 10
        },
        "voiceInputConfig": {
          "enabled": true,
          "maxRecordingTime": 15,
          "recordingNotSupportedMessage": "To record audio, use modern browsers like Chrome or Firefox that support audio recording"
        }
      }
    }
    });
