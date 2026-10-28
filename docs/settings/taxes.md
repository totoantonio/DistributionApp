---
title: Taxes
description: "Set your country, currency and tax once at company setup, and add a dated tax rate change when the law changes. Released invoices keep their rate."
parent: Settings
nav_order: 5
---

# Taxes

Your tax is set once, in **Settings → Company Profile**, when you set up the company. Every invoice and report uses it.

## Country, Currency and Tax

| Setting | What it does | Philippines (default) |
|---|---|---|
| **Country** | **Philippines** or **Other country** | Philippines |
| **Currency symbol** | Shown before every amount | ₱ |
| **Tax name** | VAT, GST or Sales Tax | VAT |
| **Tax rate %** | Your tax rate | 12 |
| **Tax ID name** | TIN, VAT No., ABN… | TIN |
| **VAT status** | Registered or not registered for the tax (locked after the first invoice) | — |

Prices always **include** the tax. The invoice shows the tax inside the total.

{: .important }
Set these before your first invoice. Once an invoice exists, the **Tax rate %** and **VAT status** are locked so released invoices can't change.

## When the Law Changes a Rate

Go to **Settings → Company Profile → Tax Rate Changes** (admins only). Fill in:

1. **Tax**: which rate changes. In the Philippines you can also change the **Percentage Tax** for Non-VAT businesses (3%) and the **Withholding Tax on Goods** (2307, 1%).
2. **New rate %**
3. **Starts**: the month the new rate begins. It starts on the 1st of that month.
4. **Reason**: for example, the BIR regulation number.
5. Tick **I checked the new rate and start month with my accountant**, then **Save Rate Change**.

![Tax Rate Changes]({{ '/assets/images/settings/tax-01-rate-changes.png' | relative_url }})

What happens:

- Invoices, payments and BIR quarters **before** the start month keep the old rate. Released invoices never change.
- From the start month on, new invoices and reports use the new rate.
- The start month can't be in the past. For VAT, it can't be a month that already has invoices.
- Every change is recorded in the **Activity Log**. You can remove a change only before it starts.

## When You Register for VAT

In the Philippines, a business must register for VAT once its sales go over ₱3 million in any 12 months. When you get your new **Certificate of Registration (Form 2303)**, go to **Settings → Company Profile → VAT Registration Change**:

1. **New status**: **VAT-registered** (or **Non-VAT** if you go the other way).
2. **Starts**: the month on your new Certificate of Registration.
3. **Reason**: for example, "New COR dated Mar 1, 2027".
4. Tick the accountant box, then **Save Registration Change**.

Invoices before that month stay **Non-VAT** and count toward the 3% percentage tax (Form 2551Q). From that month on, invoices show 12% VAT and count toward Form 2550Q. Your printed invoices show the right status for their date.

{: .warning }
Change a rate only when the law changes it. Always confirm the rate and start date with your accountant or BIR first.

## In the Philippines

The app follows the current rules: 12% VAT, quarterly returns (2550Q for VAT, 2551Q for Non-VAT) due the 25th day after the quarter, 3% percentage tax for Non-VAT businesses, and 1% withholding on goods (2307). Payroll uses the SSS, PhilHealth, Pag-IBIG and BIR tables, which you can update in **Payroll → Government Rates**.

Tax figures are **estimates** to help you prepare. For example, input VAT on purchases is not deducted. Your accountant files the returns. The app is not a BIR-registered accounting system.

## Outside the Philippines

Choose **Other country**. The app then hides the Philippine-only parts: BIR, 2307 withholding, the percentage tax, and SSS / PhilHealth / Pag-IBIG.

Not supported yet:

- **Tax added on top of the price** (like US sales tax). Prices must include the tax.
- **More than one tax rate**, or tax-free products.
- **Payroll deductions** for other countries. Payroll pays the full salary.

### See Also

- [Set Up Your Company]({{ '/getting-started/first-setup/' | relative_url }})
- [Reports]({{ '/money/reports/' | relative_url }})
- [Payroll]({{ '/money/payroll/' | relative_url }})
{: .see-also }
