<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Molten Window Manager Tutorial</title>
</head>
<body>
    <h1>Molten Window Manager Tutorial</h1>
    <p>Welcome to the Molten Window Manager! This tutorial will guide you through the setup and usage of the Molten Window Manager to create draggable, resizable, and customizable windows within your web application.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#basic-usage">Basic Usage</a></li>
        <li><a href="#creating-a-new-window">Creating a New Window</a></li>
        <li><a href="#customizing-windows">Customizing Windows</a></li>
        <li><a href="#handling-window-minimization">Handling Window Minimization</a></li>
        <li><a href="#full-example">Full Example</a></li>
    </ul>

    <h2 id="introduction">Introduction</h2>
    <p>The Molten Window Manager allows you to create draggable, resizable windows in your web applications. You can easily add new windows with iframes, customize their appearance, and manage their behavior, including minimizing and restoring windows.</p>

    <h2 id="installation">Installation</h2>
    <p>To get started, include the Molten Window Manager script in your HTML file. You can do this by linking to the CDN:</p>
    <pre><code>&lt;script src="https://demonterminal.github.io/demon-moltenweb-window-manager/demonservice.js"&gt;&lt;/script&gt;</code></pre>

    <h2 id="basic-usage">Basic Usage</h2>
    <p>To create a basic window, use the <code>window.open</code> method provided by the Molten Window Manager:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Molten Window Manager&lt;/title&gt;
    &lt;script src="https://demonterminal.github.io/demon-moltenweb-window-manager/demonservice.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="desktop"&gt;&lt;/div&gt;
    &lt;div id="minimized-windows"&gt;&lt;/div&gt;
    &lt;script&gt;
        const newWindow = window.open('https://example.com', 'My Window', 'width=400,height=300,icon=icon.png,winid=minimized-windows,target=_blank');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <h2 id="creating-a-new-window">Creating a New Window</h2>
    <p>You can create a new window by calling the <code>window.open</code> function with the URL, name, and specifications:</p>
    <pre><code>const newWindow = window.open('https://example.com', 'My Window', 'width=400,height=300,icon=icon.png,winid=minimized-windows,target=_blank');</code></pre>

    <h2 id="customizing-windows">Customizing Windows</h2>
    <p>You can customize the window's appearance by specifying various parameters in the <code>window.open</code> function:</p>
    <ul>
        <li><strong>url</strong>: The URL to be loaded in the window.</li>
        <li><strong>name</strong>: The title of the window.</li>
        <li><strong>width</strong>: The initial width of the window.</li>
        <li><strong>height</strong>: The initial height of the window.</li>
        <li><strong>icon</strong>: The URL of the icon to be displayed in the window header.</li>
        <li><strong>winid</strong>: The ID of the element where the minimized window icons will be placed.</li>
        <li><strong>target</strong>: The target attribute (e.g., <code>_blank</code>, <code>_parent</code>).</li>
    </ul>

    <h2 id="handling-window-minimization">Handling Window Minimization</h2>
    <p>When a window is minimized, an icon representing the window will be placed in the element specified by the <code>winid</code> parameter. Clicking the icon will restore the window.</p>

    <h2 id="full-example">Full Example</h2>
    <p>Here is a complete example that demonstrates the creation of multiple windows with different properties:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Molten Window Manager&lt;/title&gt;
    &lt;script src="https://demonterminal.github.io/demon-moltenweb-window-manager/demonservice.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="desktop"&gt;&lt;/div&gt;
    &lt;div id="minimized-windows"&gt;&lt;/div&gt;
    &lt;script&gt;
        // Open first window
        window.open('https://example.com', 'First Window', 'width=400,height=300,icon=icon.png,winid=minimized-windows,target=_blank');

        // Open second window with a different size
        window.open('https://example.org', 'Second Window', 'width=600,height=400,icon=icon.png,winid=minimized-windows,target=_blank');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>This tutorial should help you get started with the Molten Window Manager and integrate it into your web projects effectively. Enjoy creating customizable and dynamic windows for your applications!</p>
</body>
</html>
