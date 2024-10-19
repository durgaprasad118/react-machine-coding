# Components

-   [x] Accordion
-   [x] theme switcher
-   [x] CountDown Timer
-   [x] Search Type Ahead
    <details>
      <summary>Features</summary>

    -   [x] **Debounced Search**
    -   [x] **Auto Suggestions**
    -   [x] **Dynamic and static data support**
    -   [x] **Loading indicator**
    -   [x] **Highlights the matched text**
    -   [x] **Completely responsive**

    </details>

-   [x] Link preview
      <details>
    <summary>How</summary>

    -   if the imageLink is given as static one just render it using `Image` tag
    -   if it is a url then encode it using qss

        ```javascript
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: 'screenshot.url',
            colorScheme: 'dark',
            'viewport.isMobile': true,
            'viewport.deviceScaleFactor': 1
        });
        src = `https://api.microlink.io/?${params}`;
        ```
        - and use this `src` in image's src to get a snapshot of link
        </details>
