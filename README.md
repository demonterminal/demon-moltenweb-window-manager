# Molten Window Manager

Welcome to the Molten Window Manager! This project provides a flexible and customizable window management system for web applications. With Molten Window Manager, you can create draggable, resizable, and interactive windows that integrate seamlessly into your web projects.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Creating a New Window](#creating-a-new-window)
- [Customizing Windows](#customizing-windows)
- [Handling Window Minimization](#handling-window-minimization)
- [Full Example](#full-example)

## Introduction

Molten Window Manager allows you to create draggable, resizable windows in your web applications. It offers functionality for managing window behavior, including minimizing, restoring, and customizing windows.

## Installation

To get started with Molten Window Manager, include the script in your HTML file. You can use the following CDN link:

```html
<script src="https://demonterminal.github.io/demon-moltenweb-window-manager/demonservice.js"></script>

## Basic Usage
You can create a basic window by using the window.open method provided by the Molten Window Manager. Here’s a simple example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Molten Window Manager</title>
    <script src="https://demonterminal.github.io/demon-moltenweb-window-manager/demonservice.js"></script>
</head>
<body>
    <div id="desktop"></div>
    <div id="minimized-windows"></div>
    <script>
        const newWindow = window.open('https://example.com', 'My Window', 'width=400,height=300,icon=icon.png,winid=minimized-windows,target=_blank');
    </script>
</body>
</html>
```

## Creating a New Window
Create a new window by calling the window.open function with the desired URL, window name, and specifications:

```html
const newWindow = window.open('https://example.com', 'My Window', 'width=400,height=300,icon=icon.png,winid=minimized-windows,target=_blank');
```

## Customizing Windows
Customize your windows by specifying the following parameters in the window.open function:
url: The URL to be loaded in the window.
name: The title of the window.
width: The initial width of the window.
height: The initial height of the window.
icon: The URL of the icon displayed in the window header.
winid: The ID of the element where minimized window icons will be placed.
target: The target attribute (e.g., _blank, _parent).

### Handling Window Minimization
When a window is minimized, an icon representing the window will be placed in the element specified by the winid parameter. Clicking this icon will restore the window.

## Full Example
Here’s a complete example demonstrating the creation of multiple windows with different properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Molten Window Manager</title>
    <script src="https://demonterminal.github.io/demon-moltenweb-window-manager/demonservice.js"></script>
</head>
<body>
    <div id="desktop"></div>
    <div id="minimized-windows"></div>
    <script>
        // Open the first window
        window.open('https://example.com', 'First Window', 'width=400,height=300,icon=icon.png,winid=minimized-windows,target=_blank');

        // Open the second window with different size
        window.open('https://example.org', 'Second Window', 'width=600,height=400,icon=icon.png,winid=minimized-windows,target=_blank');
    </script>
</body>
</html>
```

# LICENSE
This project is undet the MIT LICENSE. Please check the LICENSE file

# Contributing
If you would like to contribute to Molten Window Manager, please fork the repository and submit a pull request with your changes.

# Contact
For any questions or support, please open an issue on the GitHub repository.

Enjoy creating dynamic and interactive windows with Molten Window Manager!
