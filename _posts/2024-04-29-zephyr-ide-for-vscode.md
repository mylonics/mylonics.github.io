---
title: "Zephyr IDE for Visual Studio Code"
description: "Zephyr IDE is a VS Code extension for embedded development with Zephyr RTOS. Learn how to easily create and share embedded projects with clients."
date: 2024-05-05
categories:
  - blog
layout: single

classes: wide
tags:
  - zephyr
  - visual studio code
  - rtos
  - vs code extension
---

[![Zephyr IDE for Visual Studio Code](/assets/images/zephyr-ide/zephyr-ide_branding.png)](https://marketplace.visualstudio.com/items?itemName=mylonics.zephyr-ide "Zephyr IDE for Visual Studio Code")

## Get Zephyr IDE

<a href="https://marketplace.visualstudio.com/items?itemName=mylonics.zephyr-ide" class="btn btn--primary btn--large">VS Code Marketplace</a>
<a href="https://open-vsx.org/extension/mylonics/zephyr-ide" class="btn btn--primary btn--large">Open VSX Registry</a>

## Documentation & Source Code

- **Documentation:** [https://zephyr-ide.mylonics.com/](https://zephyr-ide.mylonics.com/)
- **GitHub Repository:** [https://github.com/mylonics/zephyr-ide](https://github.com/mylonics/zephyr-ide)

## Motivation

An important part of embedded systems work is the ability to easily create and share projects with clients. Clients come in a wide range of skill levels and not everyone is comfortable working in the terminal. Issues can arise when you think you and your partner are running the same command, but are not.

As there is no direct IDE-style support for Visual Studio Code with Zephyr, I set about creating an extension that would suit my needs. I wanted an IDE that could create multiple projects and builds, and be able to easily save/share the workspace via git. These features would allow me to easily share projects in a mono repository with clients.
