---
title: "Struct Frame"
description: "Struct Frame is a Python library for frame-based data parsing and serialization. Easily define structured data formats for embedded systems communication."
date: 2024-12-06
categories:
  - blog
layout: single

classes: wide
tags:
  - python
  - data parsing
  - serialization
  - embedded systems
---

## Get Struct Frame

<a href="https://pypi.org/project/struct-frame/" class="btn btn--primary btn--large">PyPI Package</a>

## Documentation & Source Code

- **Documentation:** [https://struct-frame.mylonics.com](https://struct-frame.mylonics.com)
- **GitHub Repository:** [https://github.com/mylonics/struct-frame](https://github.com/mylonics/struct-frame)

## Motivation

I wanted something lightweight and cross-platform for message serialization - a C++ implementation that works for embedded systems. Existing solutions like Embedded Proto and Cap'n Proto are not lightweight; they have a huge encoding burden.

I wanted to be able to create and parse messages directly in a buffer to reduce an extra copy step. MAVLink was the best option available, but sometimes a smaller header is important for low bandwidth links, and MAVLink doesn't have the direct buffer feature mentioned above.

Struct Frame addresses these needs with a minimal footprint design optimized for embedded systems communication.
