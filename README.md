# 🎉 ToyUI

<div align="center">

![ToyUI Example](/public/images/logo_320x320.png)

</div>

<div align="center">

[![📦 Packing](https://github.com/bytesbeats/CuteToy/actions/workflows/push-image.yml/badge.svg)](https://github.com/bytesbeats/CuteToy/actions/workflows/push-image.yml)

</div>
A fun and practical UI library built for developers who love simplicity and flexibility.

## 🌟 Features

- Fun & Useful: Designed to make building user interfaces enjoyable while delivering robust functionality.
- Modern Tech Stack: Powered by TailwindCSS, React, and Zustand for a seamless development experience.
- Highly Customizable: Tailored to fit your project’s unique style and needs.
- Lightweight & Fast: Minimal dependencies with optimized performance.

## 🛠️ Installation

Install ToyUI using pnpm or yarn:

```bash

pnpm install @bytesbeats/toyui

# or
yarn add @bytesbeats/toyui

```

## 🚀 Getting Started

Here’s how to set up ToyUI in your project:

1. Import ToyUI Styles

Ensure that TailwindCSS is properly configured in your project. Import ToyUI’s base styles in your main CSS file:

```ts

 @import 'toyui/styles.css';

```

2. Use Components

```ts
import { Button } from "toyui";

export default function App() {
  return (
    <div className="p-4">
      <Button variant="primary">Click Me!</Button>
    </div>
  );
}
```

## 📚 Documentation

> coming soon

## 🔧 Tech Stack

ToyUI is built with:

- TailwindCSS: For utility-first styling.
- React: For building reusable UI components.
- Zustand: For state management where necessary.

## 📦 Roadmap

- Core components (Button, Input, Card)
- Customizable themes
- Advanced components (Modal, Dropdown, Table)
- Accessibility improvements
- TypeScript support
