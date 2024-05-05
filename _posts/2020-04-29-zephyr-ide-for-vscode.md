---
title: "Zephyr IDE for Visual Studio Code"
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

Recently I switched from Mbed to Zephyr as my primary RTOS. I chose Mbed as a framework for my previous company because at the time it was one of the more fully featured RTOS with a HAL. In recent years the Zephyr Project has become more popular and now supports the microcontroller lines that I primarily use in my embedded systems contracting work. 

An important thing with embedded systems works is the ability to easily create and share projects with clients. Clients come in a wide range of skill levels and not everyone is comfortable working in the terminal. Issues can arise when you think you and your partner are running the same command, but are not.

As there is no direct IDE-style support for Visual Studio Code, I set about creating an extension that would suit my needs. To start I knew I wanted an IDE that could create multiple projects and builds, and be able to easily save/share the workspace via git. These features would allow me to easily share projects in a mono repository with clients. So from that motivation came the [Zephyr IDE for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=mylonics.zephyr-ide). 

[![Zephyr IDE for Visual Studio Code](/assets/images/zephyr-ide/zephyr-ide_branding.png)](https://marketplace.visualstudio.com/items?itemName=mylonics.zephyr-ide "Zephyr IDE for Visual Studio Code")

## What does the Zephyr IDE for VS Code Do
The extension boasts a handful of features:
  - Sets up a west environment
  - Downloads the Zephyr SDK
  - Provides west.yml templates to start with or you can provide your own
  - Allows you to add projects from scratch or from templates
  - Create multiple projects
  - For each project, you can create multiple builds
  - Each project may have its own kconfig files and overlay files
  - Each build may have a unique board, kconfig files, and overlay files and runner
  - Each build may be bound to a launch/debug configuration for debug, build and debug and attach.
  - GUI Panels to show the full project tree and active projects
  - Automatically changing active project based on the last viewed file in the editor
  - All commands that are available in the GUI are available in the command palette.
  - Provides useful functions to set up custom launch/debug configurations
  - Provides the user with a terminal to manually run west commands
  - Saves/loads project structure to workspace in a human readable and editable file    


## How to get started
Well there are a couple videos up on how to use the extension:

[![Getting Started with Zephyr IDE](/assets/images/zephyr-ide/getting_started_thumbnail.png)](https://www.youtube.com/watch?v=Asfolnh9kqM&t "Getting Started with Zephyr IDE")

[![STM32 Board Setup And Debugging with Zephyr IDE](/assets/images/zephyr-ide/board_setup_thumbnail.png)](https://www.youtube.com/watch?v=TXcTzyswBMQ)


