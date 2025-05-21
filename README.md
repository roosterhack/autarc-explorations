This project consists of two parts:

1. A **responsive modal UI** for adding radiators using accordions and form inputs
2. A **chat-based AI assistant UI** with typing animations, dark mode, and thoughtful micro-interactions

---

## 🛠 How to Run It Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

## 📦 Tech Stack

- **React** + **TypeScript** – App structure and type safety
- **Tailwind CSS v4** – Utility-first styling with responsive design
- **Headless UI** – Accessible UI primitives (used for the dark mode toggle)
- **Heroicons** – Consistent, modern icon set
- **Framer Motion** – Smooth UI animations (used for typing dots, transitions)
- **Vite** – Fast local dev server and build tool

## 💡 Challenge 1 – Modal UI to Add Radiators

### ✅ What I Implemented

- Rebuilt the modal UI based on the provided screenshot design
- Enhanced visual hierarchy, spacing, font sizes, and field layout
- Accordion behavior: only one section can be expanded at a time
- Form fields remain disabled until the radiator type is selected, guiding users step-by-step
- Added clear spacing between form groups to make the layout easier to scan

### 💬 Suggested Improvements

- Add heading titles or dividers to visually separate the radiator workflow
- Use helper text and tooltips to guide users through required inputs
- Implement stronger inline validation and feedback messages
- Add a toast or confirmation message when a radiator is successfully added
- More user feedback, for example, when user clicks on the disabled button, there could be a subtle animation and a tooltip to explain why the button is disabled.

### 📝 Icon Note

The original design used a square-style info icon.
I chose Heroicons’ `InformationCircleIcon` to maintain stylistic consistency with the rest of the icon set and ensure accessibility. A square icon could easily be swapped in if needed.

## 🤖 Challenge 2 – AI Assistant UI

### ✅ What I Built

- A chat-style assistant UI prototype inspired by modern tools like ChatGPT and Claude
- Includes an animated intro screen to prompt users to interact
- Supports dark/light theme toggling using Headless UI `Switch` + Tailwind `dark:` variants
- Smooth micro-interactions:
  - Animated typing dots (Framer Motion)
  - Simulated AI “thinking” delay before responses appear
  - Text streaming effect for AI replies
  - Automatic scroll-to-bottom on new message
  - A “Stop” button to cancel AI typing mid-response

### 🧪 Notes

- AI responses are randomized from a mock response list (no API integration)
- This is a pure UI prototype to demonstrate interaction flow and user experience polish

## 🎥 Demo Video

Here’s a quick walkthrough showing the UI animations and interactions:

[Watch the video](https://vimeo.com/1086411435)
