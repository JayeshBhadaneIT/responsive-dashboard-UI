🌐 Responsive Dashboard UI

A modern, fully responsive, and interactive dashboard interface built using HTML, CSS, and Vanilla JavaScript.
Designed as a front-end assessment to demonstrate UI/UX skills, clean component architecture, accessibility, and real-world dashboard behaviors.

🚀 Overview

This project replicates a professional dashboard layout featuring:

A responsive top navigation bar

Interactive popup menus (Search, Notifications, Profile)

Mobile slide-out navigation drawer

Hero section with CTA

Expandable feature cards

Right panel with tabs (Overview / Activity)

Animated circular progress indicator

Quick action buttons

All functionality is implemented using fast, lightweight Vanilla JavaScript — no frameworks required.

✨ Features
1. Responsive Navigation

Desktop navigation with quick-action icons

Mobile hamburger menu

Slide-over drawer with overlay

Accessible keyboard interactions (ESC closes menus)

2. Popup Panels

Search panel with autofocus

Notification center

Profile menu with account options

Auto close when clicking outside

3. Hero Section

Clean title/subtitle hierarchy

CTA button with animation

Visual placeholder image

4. Feature Cards

Click to expand for extra details

Smooth height animation

Keyboard accessible (Enter / Space)

Useful metrics displayed

5. Right Panel (Side Panel)

Tab system: Overview and Activity

SVG progress ring animation

Status summary

Recent activities list

6. Quick Actions

Export

Share

Early access CTA

All buttons include temporary feedback states.

🛠 Tech Stack
Component	Technology
Structure	HTML5
Styling	CSS3 (Grid, Flexbox, Variables, Transitions)
Interactivity	Vanilla JavaScript (ES6+)
Icons	Emoji-based
Font	Inter (Google Fonts)
📂 Project Structure
responsive-dashboard-ui/
│
├── index.html      # UI layout & component structure
├── styles.css      # All styling + responsiveness + animations
├── app.js          # Functionality, interactions, state management
└── README.md       # Project documentation

📱 Responsive Behavior
Device	Layout
Desktop	Two-column layout with dedicated side panel
Tablet	Stacked layout with preserved spacing
Mobile	Full-width content + slide navigation drawer

The UI uses CSS Grid, Flexbox, and media queries for adaptive behavior.

🧠 Core Interactive Logic
Navigation Drawer

Opens with hamburger tap

Closes via overlay, close button, or ESC

Popups

Only one popup visible at a time

Toggle logic built with reusable functions

Tabs

Controlled via data-tab attributes

Updates heading dynamically

Progress ring animates only once

Progress Ring Animation

SVG circle

Animated via stroke-dashoffset

requestAnimationFrame() + ease-out cubic curve

Feature Cards

Expand/collapse with animated max-height

ARIA attributes for accessibility

🔧 Setup Instructions
1. Clone the repository
git clone https://github.com/JayeshBhadaneIT/responsive-dashboard-ui.git

2. Navigate into the project
cd responsive-dashboard-ui

3. Run the project

Simply open:

index.html


No build tools or backend required.

📸 Screenshots

(Add your UI screenshots here)

![](assets/dashboard-mobile.png)
![](assets/dashboard-desktop.png)

📜 License

This project is open-source and free to use.

👨‍💻 Author

Jayesh Bhadane
Frontend Developer

GitHub: @JayeshBhadaneIT

⭐ Support

If this project helped you, please star the repository.
