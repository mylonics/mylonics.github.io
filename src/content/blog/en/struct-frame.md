---
title: "Struct Frame"
description: "Struct Frame is a Python library for frame-based data parsing and serialization. Easily define structured data formats for embedded systems communication."
author: "Rijesh Augustine"
authorImage: "@/images/blog/mylonics-author.png"
authorImageAlt: "Mylonics logo"
pubDate: 2024-12-06
cardImage: "@/images/blog/struct-frame.jpg"
cardImageAlt: "Circuit board representing embedded systems"
readTime: 4
tags: ["python", "data parsing", "serialization", "embedded systems", "c++"]
---

Struct Frame is a Python library for frame-based data parsing and serialization, designed specifically for embedded systems communication with a matching C++ implementation.

## Get Struct Frame

Available on [PyPI](https://pypi.org/project/struct-frame/).

## Documentation & Source Code

- **Documentation:** [https://struct-frame.mylonics.com](https://struct-frame.mylonics.com)
- **GitHub Repository:** [https://github.com/mylonics/struct-frame](https://github.com/mylonics/struct-frame)

## Motivation

I wanted something lightweight and cross-platform for message serialization - a C++ implementation that works for embedded systems. Existing solutions like Embedded Proto and Cap'n Proto are not lightweight; they have a huge encoding burden.

I wanted to be able to create and parse messages directly in a buffer to reduce an extra copy step. MAVLink was the best option available, but sometimes a smaller header is important for low bandwidth links, and MAVLink doesn't have the direct buffer feature mentioned above.

Struct Frame addresses these needs with a minimal footprint design optimized for embedded systems communication.

## Key Features

- Minimal footprint design for resource-constrained embedded systems
- Direct buffer manipulation to avoid extra copy steps
- Cross-platform Python library with matching C++ implementation
- Simple frame definition using Python dataclasses
- Support for variable-length data and nested structures
