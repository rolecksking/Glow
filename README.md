# Glow — AI-Integrated Wellness Ecosystem (Prototype)

## Executive Summary
This repository contains a high-fidelity functional prototype for Glow, a premium wellness and spa booking platform. The project serves as a technical demonstration of Agentic AI workflows can be utilized to bridge the gap between enterprise data systems (Zenoti) and a cinematic, user-centric interface.

## 🧠 Strategic Technical Pillars

### 1. Profile Hydration & State Management
The core architecture is designed to handle Profile Hydration the process of pulling real-time user history (loyalty points, preferred therapists, skin-type profiles) from the **Zenoti Enterprise API** to "hydrate" the local UI. 
- **The Logic:** Built to handle asynchronous data-syncing while maintaining a "fluid" user experience through optimistic UI updates and skeleton states.

### 2. Algorithmic Search Logic 
Leveraging my background, I’ve architected the search results to move beyond simple filters.
- **The Weighting Engine:** Results are ranked based on a weighted equation: `(User Preference x 0.6) + (Therapist Availability x 0.3) + (Loyalty Reward Potential x 0.1)`.
- **Explainable AI (XAI):** The UI includes "Reasoning Bubbles" that explain to the user *why* a specific treatment was recommended, increasing trust and conversion rates.

### 3. Search-Before-Create Onboarding
A logic gate designed to prevent database redundancy. The app cross-references the Zenoti database during the initial phone/email entry to identify returning users before they reach the registration phase, reducing friction and ensuring data integrity.

## 🛠 Tech Stack & Workflow
- **Frontend:** React / Next.js with Tailwind CSS for performance-led styling.
- **Micro-interactions:** Framer Motion for high-fidelity state transitions.
- **Architecture:** Component-driven design, utilizing a tokenized system for 100% parity with the Figma Design System.
- **Workflow:** Developed using an accelerated **Vibe Coding** stack (Antigravity Agentic IDE), demonstrating a 10x reduction in traditional development-to-deployment cycles.

## 🔗 Technical Assets
- **Live Functional Prototype:** https://glow-weld.vercel.app/

- **Figma Architecture & Prototype:** https://www.figma.com/design/XUCuoqGPksPmTdNmpVVu0A/Glow-app-2?node-id=0-1&p=f

Prototype Link - https://www.figma.com/proto/XUCuoqGPksPmTdNmpVVu0A/Glow-app-2?node-id=1-1294&p=f&t=sqVer0GkY8qjmFdl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1



## 🚀 Roadmap for Production
1. **Design Token Sync:** Automating the sync between Figma variables and Tailwind configuration for instant visual consistency.
2. **API Hardening:** Moving from mock JSON schemas to full OAuth2 integration with the Zenoti sandbox environment.
3. **Agentic Scheduling:** Implementing an AI agent to handle complex "Unhappy Path" booking conflicts (e.g., last-minute therapist cancellations).

---
**Architect:** Uzoma King
