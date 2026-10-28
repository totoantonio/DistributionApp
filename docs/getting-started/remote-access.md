---
title: Use It Outside the Office
description: "Turn on Remote Access with a free Tailscale account so salesmen and admins can use Distribution App on mobile data, away from the office Wi-Fi."
parent: Getting Started
nav_order: 6
---

# Use It Outside the Office

Out of the box, the app works on your office Wi-Fi. **Remote Access** lets salesmen and admins use it anywhere, even on mobile data. It uses **Tailscale**, a free private network. Your app is never open to the public internet. Only devices you allow can reach it.

You set this up once on the **main computer**. Each salesman then does two short steps on their phone.

## 1. Install Tailscale on the Main Computer

- **Mac:** get **Tailscale** from the Mac App Store.
- **Windows:** download it from **tailscale.com/download**.

Open it and **sign in** (a Google account is easiest). Keep this account. It becomes your office's Tailscale account.

{: .tip }
On a Mac, if signing in does nothing: open **System Settings → VPN**, turn Tailscale off and on again. Also check **System Settings → General → Login Items & Extensions → Network Extensions** and allow Tailscale.

## 2. Turn On Two Settings on the Tailscale Website

1. Go to **login.tailscale.com** and sign in with the same account.
2. Open **DNS**.
3. Turn on **MagicDNS**, then **HTTPS Certificates**.

This gives your app a secure address (it starts with **https://**). Phones need it for location sharing, lock-screen notifications and opening the app without a signal.

## 3. Turn On Remote Access in the App

In the app, go to **Settings → Remote Access** and click **Turn On**.

The page shows your secure address and a QR code. The same address now appears on **Staff Access** under **Outside the Office**.

![Settings → Remote Access, turned on]({{ '/assets/images/getting-started/remote-01-settings.png' | relative_url }})

## 4. Keep the Main Computer Reachable

On the Tailscale website, open **Machines**, click **⋯** beside the main computer and choose **Disable key expiry**. Otherwise Tailscale signs the computer out every few months and salesmen lose access.

Also make sure Tailscale starts when the computer starts (in Tailscale's settings), and follow [Keep It Running]({{ '/getting-started/keep-running/' | relative_url }}).

## 5. Connect Each Salesman

Each salesman uses **their own** free Tailscale account. You share only the main computer with them, so they can't see anything else on your network.

1. On the Tailscale website, open **Machines** → **⋯** beside the main computer → **Share**. Send the link to the salesman.
2. The salesman installs **Tailscale** from the App Store or Google Play, signs in, and opens the link to accept.
3. They open the **Outside the Office** address from **Staff Access** (scan its QR code) and sign in to the app.
4. On iPhone, add it to the Home Screen: see [Connect Your Staff]({{ '/getting-started/staff-access/' | relative_url }}).

Sharing is free, with no limit on the number of people.

## If It Won't Connect

- **Tailscale is off on the phone.** Open the Tailscale app and switch it on.
- **The secure address won't open.** Try the number address shown under it (it starts with **http://100.**).
- **A DNS or ad-blocking profile on the phone** can block the address. Remove it in the phone's settings (iPhone: **Settings → General → VPN & Device Management**).
- **The main computer is asleep or off.** It must be on with the app running.

{: .note }
The app shows each device's Tailscale address in the Activity Log, so you can see who connected from outside.

### See Also

- [Connect Your Staff]({{ '/getting-started/staff-access/' | relative_url }})
- [Keep It Running]({{ '/getting-started/keep-running/' | relative_url }})
- [Troubleshooting]({{ '/troubleshooting/' | relative_url }})
{: .see-also }
