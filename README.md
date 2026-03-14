# Simon Arcade (Backbone.js Experiment)

A small retro **Simon memory game** built with **Backbone.js** and classic frontend architecture.

This repository is a **learning and exploration project**, not a production application.

The goal is to revisit and understand the tools, patterns, and architectural ideas that shaped modern frontend development.

---

## Purpose of this project

Modern frontend frameworks such as React, Vue, and Angular abstract many concepts behind tooling and build systems.

This project intentionally goes in the opposite direction.

It explores the **historical ecosystem of frontend engineering**, using technologies that were widely used during the early single-page application era.

The idea is to better understand:

* MVC patterns in the browser
* event-driven UI architecture
* state separation between logic and DOM
* how frontend applications were structured before modern bundlers

Understanding these foundations helps build stronger architectural intuition for modern frameworks.

---

## Tech Stack

This project intentionally uses a **classic frontend stack**:

* Backbone.js
* jQuery
* Underscore.js
* Vanilla CSS
* HTML5 Audio API
* LocalStorage for persistence

The code uses `var` instead of modern `let/const` in order to stay consistent with the historical ecosystem in which Backbone applications were originally written.

This is a deliberate decision for **educational and historical exploration purposes**.

---

## Features

* Simon memory game mechanics
* animated color buttons
* sound feedback
* score tracking
* persistent ranking using browser localStorage

No backend is required.

---

## Project structure

```
assets/
css/
js/
  models/
  views/
  collections/
index.html
```

Architecture follows a simplified **MVC pattern** inspired by Backbone conventions.

---

## Version history

```
v0.1.0
Original nostalgic commit recovered from an old repository.

v1.0.0
Playable Simon game with MVC structure and local score persistence.
```

---

## Why Backbone?

Backbone.js was one of the earliest frameworks used to structure large JavaScript applications before modern frameworks emerged.

Studying it helps reveal the **architectural roots** of many concepts used today.

Many modern frameworks evolved from similar ideas:

* state-driven interfaces
* component/event patterns
* separation of logic and UI

---

## Future improvements

* distinct sound per color
* stronger visual feedback for active buttons
* better arcade-style styling
* optional difficulty levels
* mobile support

---

## Personal note

This repository is part nostalgia, part curiosity, and part engineering practice.

Revisiting older tools can reveal valuable insights about how frontend architecture evolved, and why modern frameworks work the way they do.

Sometimes looking backward helps you design better systems moving forward.
