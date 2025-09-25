# Pigeon IRCTC Automation Software

## Overview
Pigeon IRCTC Automation Software is a Chrome extension designed to automate the process of ticket booking on the IRCTC website. It provides a user-friendly interface for managing IRCTC accounts, automating ticket booking, handling payments, and managing proxies, all from a single panel.

## Features
- **Automated IRCTC Ticket Booking**: Automates the process of booking tickets on the IRCTC website, including captcha solving and autofill.
- **Multi-Account Management**: Manage multiple IRCTC accounts and payment options.
- **Proxy Authentication**: Supports proxy configuration and authentication for secure and distributed booking.
- **Payment Automation**: Handles payments via PhonePe, Paytm, Razorpay, Mobikwik, and more.
- **Status Monitoring**: Real-time booking status and notifications.
- **Bulk Password Change**: Change passwords for multiple IRCTC accounts in bulk.
- **Panel Interface**: Centralized panel for managing tickets, data, settings, and backups.

## Folder Structure
- `js/` - All JavaScript files for background scripts, automation logic, UI, and payment handling.
- `css/` - Stylesheets for different UI components and pages.
- `pages/` - HTML pages for popup, panel, booking, payments, and more.
- `images/` - Extension icons and logos.
- `manifest.json` - Chrome extension manifest (v3).

## Installation
1. Download or clone the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project folder (`Pigeon Software Demo v2.4`).
5. The extension icon should appear in your browser.

## Usage Instructions
- **Open the Extension**: Click the Pigeon icon in the Chrome toolbar. Use the popup to open the main panel.
- **Configure Accounts**: Add IRCTC accounts and payment options in the panel.
- **Proxy Setup**: Configure proxies if required for distributed booking.
- **Start Booking**: Use the panel to initiate ticket booking. The extension will automate the process, including captcha solving and payment.
- **Monitor Status**: Check booking status and logs in the panel.

## Permissions
The extension requires the following permissions:
- `proxy`, `identity`, `scripting`, `tabs`, `activeTab`, `storage`, `nativeMessaging`, `webRequest`, `webRequestAuthProvider`, `declarativeNetRequest`
- Host permissions for IRCTC, payment gateways, and related domains.

## Security & Privacy
- All sensitive data is stored locally in Chrome storage.
- Captcha solving may use third-party APIs.
- No data is sent to external servers except for required automation APIs.

## Support
For issues or feature requests, please contact the developer or open an issue in the repository.

---
**Disclaimer:** This software is intended for educational and personal use only. Use at your own risk. IRCTC may update their website or block automation tools at any time.