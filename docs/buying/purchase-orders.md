---
title: Purchase Orders
description: "Create purchase orders in Distribution App, including suggested POs worked out from your stock levels and sales, and send them to suppliers."
parent: Buying and Stock
nav_order: 3
---

# Purchase Orders

## Let the App Suggest

**Purchase Orders** → pick a supplier → **Generate Suggested PO**. For each product the app works out:

> sales of the last 30 days × (supplier lead time + ideal stock days) − stock on hand − already on order

It then raises the quantity to the MOQ if needed.

![A few lines of a suggested purchase order]({{ '/assets/images/buying/po-01-suggested.webp' | relative_url }})

You can change any quantity before sending. Each change needs a reason: **Promo**, **Special Discount** or **Accommodated Sales** (a big customer order to cover).

## Write One Yourself

**Manual PO** → pick the supplier or brand → type quantities next to the products you want → **Create PO**.

## From Draft to Arrival

**Draft → For Approval → Approved → Sent → Closed**

1. Submit it for approval.
2. The approver **approves** or **returns it for changes**.
3. Send it to the supplier and click **Mark as Sent**. Print it or save it as PDF first if you need to.
4. When the goods arrive, click **Create Stock Arrival** — the lines are copied over.

### See Also

- [Stock Arrivals]({{ '/buying/stock-arrivals/' | relative_url }})
- [Suppliers]({{ '/buying/suppliers/' | relative_url }})
- [Products]({{ '/buying/products/' | relative_url }})
{: .see-also }
