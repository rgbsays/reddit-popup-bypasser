# Reddit Popup Bypasser

A lightweight Chrome Extension designed to improve the Reddit browsing experience by automatically removing intrusive "Join Reddit" / "Upsell" popups and restoring page scrolling.

## 🚀 Features

- **Instant Removal**: Automatically detects and deletes the "Join the most real place on the internet" popup the moment it appears.
- **Scroll Unlocking**: Fixes the "Scroll Lock" bug where Reddit freezes the page scroll when a dialog is triggered.
- **Shadow DOM Support**: Specifically engineered to bypass Reddit's modern web component architecture.
- **Privacy Focused**: No data collection, no tracking, and no external dependencies.

## 🛠 Installation (Developer Mode)

Since this is a custom bypasser, you can install it manually in Chrome:

1. **Download the code**: Clone this repository or download the ZIP file and extract it.
2. **Open Extensions**: In your Chrome browser, go to `chrome://extensions/`.
3. **Enable Developer Mode**: Toggle the switch in the top-right corner.
4. **Load Unpacked**: Click the **"Load unpacked"** button.
5. **Select Folder**: Choose the folder containing the `manifest.json` and `content.js` files.

## 📂 Project Structure

- `manifest.json`: Extension metadata and permission settings.
- `content.js`: The logic that monitors the DOM and removes the popup/unlocks scrolling.

## ⚖️ License

MIT License - feel free to use and modify for personal use.
