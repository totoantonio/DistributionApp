---
title: Troubleshooting
description: "Fixes for common Distribution App problems: trial and activation, staff who can't connect, missing alerts, backups and stock that doesn't match."
nav_order: 9
---

# Troubleshooting

## The App Won't Open on My Mac

- Make sure the app is in **Applications** — not in Documents, Desktop or Downloads. macOS blocks it from starting in those folders.
- After an update, the first start can take about 10 seconds while macOS checks it.
- There's no Dock icon — it runs in the background. Double-click DistributionApp in Applications to open the window again.

## Staff Can't Connect

1. Is the main computer **on, awake** and the app **running**? See [Keep It Running]({{ '/getting-started/keep-running/' | relative_url }}).
2. Are they on the **same Wi-Fi** as the main computer?
3. The address may have changed after a router restart — use the **.local** address on Staff Access, or reserve the main computer's address in your router.
4. On Windows, allow the app through the firewall for **Private networks**.

## It Doesn't Work Outside the Office

- Is **Tailscale** on, on both the phone and the main computer?
- The secure (https) address needs **MagicDNS** and **HTTPS Certificates** turned on in Tailscale — Settings → Remote Access shows how.
- A DNS or ad-blocking profile on the phone can block the address. Try the number address under it, or remove the profile.

## "Read-only — Activate the App"

The free trial has ended, or the license couldn't be checked. Paste your license key or activation code in **License**. If you renamed your company, an old activation code won't match — ask for a new one.

## I Can't Approve an Order

- The customer may be **on credit hold** (overdue invoice, bounced check or over the credit limit) — the order page says why.
- There may not be enough stock — another order may have been approved first.
- You may not have permission to approve — ask your admin.

## No Sound for New Approvals

Open **My Account → Notifications → "Not hearing new approvals?"** for the steps for your browser, or turn on **Desktop Notifications**.

## I Deleted or Changed Something by Mistake

Check the **Activity Log** to see what changed. If needed, the admin can **restore** a backup from before it happened — remember that work done after that backup is lost.

## Still Stuck?

Email **alfiesuperhalk@<!-- -->gmail.com** with a screenshot and what you were doing. We reply within one business day.

### See Also

- [Connect Your Staff]({{ '/getting-started/staff-access/' | relative_url }})
- [Keep It Running]({{ '/getting-started/keep-running/' | relative_url }})
- [Backups and Updates]({{ '/settings/backups-updates/' | relative_url }})
{: .see-also }
