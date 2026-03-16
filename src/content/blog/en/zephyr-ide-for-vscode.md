---
title: "Zephyr IDE for Visual Studio Code"
description: "Zephyr IDE is a VS Code extension for embedded development with Zephyr RTOS. Learn how to easily create and share embedded projects with clients."
author: "Rijesh Augustine"
authorImage: "@/images/blog/mylonics-author.png"
authorImageAlt: "Mylonics logo"
pubDate: 2024-05-05
cardImage: "@/images/blog/zephyr-ide.png"
cardImageAlt: "Zephyr IDE for Visual Studio Code"
readTime: 5
tags: ["zephyr", "visual studio code", "rtos", "vscode extension", "embedded systems"]
---

Zephyr IDE is a VS Code extension that streamlines embedded development with Zephyr RTOS. It allows you to easily create and share embedded projects with clients.

## Get Zephyr IDE

Available on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=mylonics.zephyr-ide) and [Open VSX Registry](https://open-vsx.org/extension/mylonics/zephyr-ide).

## Documentation & Source Code

- **Documentation:** [https://zephyr-ide.mylonics.com/](https://zephyr-ide.mylonics.com/)
- **GitHub Repository:** [https://github.com/mylonics/zephyr-ide](https://github.com/mylonics/zephyr-ide)

## Motivation

I switched from Mbed to Zephyr as my primary RTOS. I chose Mbed as a framework for my previous company because at the time it was one of the more fully featured RTOS with a HAL. In recent years the Zephyr Project has become more popular and now supports the microcontroller lines that I primarily use in my embedded systems contracting work.

An important part of embedded systems work is the ability to easily distribute, setup and build projects. As there is no direct IDE-style support for Visual Studio Code with Zephyr, I set about creating an extension that would suit my needs. I wanted an IDE that could create multiple projects and builds, and be able to easily save/share the workspace via git. These features would allow me to easily share projects in a mono repository with clients.

## Key Features

- Create and manage multiple Zephyr projects within a single workspace
- Automated west environment setup and Zephyr SDK management
- Build, flash, and debug directly from VS Code
- Share workspaces easily with clients via git
- Support for multiple board configurations per project
