---
title: How It All Connects
description: "See how sales orders, invoices, payments, stock arrivals and expenses flow into stock, receivables, payables and accounting books in Distribution App."
nav_order: 2
---

# How It All Connects

Distribution App is one system, not separate modules. Every document you save — an order, a payment, a stock arrival — updates stock, balances, statements and your books **at the same moment**, so nothing is typed twice and nothing goes out of step.

## The Whole App at a Glance

<!-- Live map: drag a bubble and the rest follows; click opens its page. Drawn by assets/js/app-map.js (data format explained at its top). Without JavaScript the outline shows as a plain list. -->
<div class="app-map" data-label="Map of Distribution App: Selling, Collecting, Buying and Stock, Money and Books, Reports, People and Settings">
<pre class="app-map-data">
Distribution App | {{ '/how-it-connects/' | relative_url }}
  Selling | {{ '/selling/' | relative_url }}
    Customers | {{ '/selling/customers/' | relative_url }}
    Sales Orders | {{ '/selling/sales-orders/' | relative_url }}
    Approvals | {{ '/selling/approvals/' | relative_url }}
    Invoices | {{ '/selling/invoices-delivery/' | relative_url }}
    Delivery | {{ '/selling/invoices-delivery/' | relative_url }}
    Returns and Credit Memos | {{ '/selling/returns/' | relative_url }}
  Collecting | {{ '/collecting/' | relative_url }}
    Payments | {{ '/collecting/payments/' | relative_url }}
    Deductions and Debit Memos | {{ '/collecting/deductions/' | relative_url }}
    Post-Dated Checks | {{ '/collecting/checks/' | relative_url }}
    Deposits | {{ '/collecting/deposits/' | relative_url }}
    Statement of Account | {{ '/collecting/statements/' | relative_url }}
    Customer Ledger | {{ '/collecting/statements/' | relative_url }}
  Buying and Stock | {{ '/buying/' | relative_url }}
    Products | {{ '/buying/products/' | relative_url }}
    Purchase Orders | {{ '/buying/purchase-orders/' | relative_url }}
    Stock Arrivals | {{ '/buying/stock-arrivals/' | relative_url }}
    Stock Count | {{ '/buying/stock-count/' | relative_url }}
    Suppliers and Supplier Ledger | {{ '/buying/suppliers/' | relative_url }}
  Money and Books | {{ '/money/' | relative_url }}
    Expenses | {{ '/money/expenses/' | relative_url }}
    Payroll | {{ '/money/payroll/' | relative_url }}
    BIR Taxes | {{ '/money/books/' | relative_url }}
    Accounting Books | {{ '/money/books/' | relative_url }}
  Reports | {{ '/money/reports/' | relative_url }}
    Sales | {{ '/money/reports/' | relative_url }}
    Receivables and Payables | {{ '/money/reports/' | relative_url }}
    Inventory | {{ '/money/reports/' | relative_url }}
    Income Statement and Balance Sheet | {{ '/money/reports/' | relative_url }}
  People and Settings | {{ '/settings/' | relative_url }}
    Users and Permissions | {{ '/settings/users/' | relative_url }}
    Salesmen and Visits | {{ '/settings/features/' | relative_url }}
    Backups and Updates | {{ '/settings/backups-updates/' | relative_url }}
    Staff Access | {{ '/getting-started/staff-access/' | relative_url }}
</pre>
</div>

Drag any bubble — everything connected follows, and it springs back when you let go. Click a bubble to open its page.
{: .app-map-hint }

---

## From Order to Cash

<div class="app-map" data-kind="steps" data-label="From order to cash: customer, sales order, approval, invoice, packed, for delivery, delivered, then payment or deduction until paid; returned goods become a credit memo">
<pre class="app-map-data">
Customer -> Sales Order
Sales Order -> Approval : Submit
Approval -> Invoice : Credit and stock OK
Approval -> Sales Order : Return for changes
Invoice -> Packed
Packed -> For Delivery
For Delivery -> Delivered
Delivered -> Payment
Delivered -> Deduction
Payment -> Paid
Deduction -> Paid
Delivered ..> Credit Memo : Goods come back
Credit Memo ..> Paid
</pre>
</div>

Drag any step and let go — it springs back.
{: .app-map-hint }

What happens along the way:

- **Approval** checks the customer's **credit** (overdue invoices, credit limit, bounced checks) and the **stock**. Approving creates the **invoice** and takes the stock out — all at once.
- **Delivered** starts the payment terms: the due date is the delivery date plus the customer's terms (for example 30 days).
- **Payments** can come in cash, bank transfer, GCash, Maya, MariBank, Atome or checks. Post-dated checks wait until you mark them cleared.
- **Deductions** — withholding tax (BIR 2307), support or wrong pricing — close the part of an invoice the customer won't pay, with a reference and a reason.
- Every step shows up on the customer's **Statement of Account** and **Customer Ledger**, and in **Accounts Receivable**.

---

## From Purchase to Payment

<div class="app-map" data-kind="steps" data-label="From purchase to payment: purchase order, approval, sent to supplier, stock arrival, count what came, receive stock, supplier bill, pay supplier; lines can be held">
<pre class="app-map-data">
Suggested or Manual PO -> Approval : Submit
Approval -> Sent to Supplier
Sent to Supplier -> Stock Arrival
Stock Arrival -> Count What Came
Count What Came -> Pay only what arrived : Short
Count What Came -> Free goods or billed overage : Extra
Count What Came -> Receive Stock : As ordered
Pay only what arrived -> Receive Stock
Free goods or billed overage -> Receive Stock
Receive Stock -> Supplier Bill
Supplier Bill -> Pay Supplier
Supplier Bill ..> On Hold : Hold a line
On Hold ..> Pay Supplier : Release
</pre>
</div>

Drag any step and let go — it springs back.
{: .app-map-hint }

What happens along the way:

- **Suggested POs** are worked out from what you sold in the last 30 days, the supplier's lead time and how many days of stock you want to keep.
- **Receive Stock** adds what you **counted** to inventory and updates each product's cost to the weighted average.
- The **supplier bill** is for what you counted — never more than the delivery receipt — unless you mark extras as a billed overage.
- Lines you don't want to pay yet (for example, items that weren't on the PO) can be **held**; they stay owed but can't be paid by mistake.
- Every step shows up on the **Supplier Ledger** and in **Accounts Payable**.

---

## Where the Money Goes

Each document feeds the right reports and your accounting books by itself — no journal entries to type.

<div class="app-map" data-kind="flow" data-label="Where the money goes: each document feeds receivables, sales and VAT, inventory, payables, cash, tax credits and the income statement">
<pre class="app-map-data">
# Documents
Invoice
Customer Payment
Deduction
Credit Memo
Stock Arrival
Supplier Payment
Expense and Payroll
BIR Payment
# Books and Reports
Accounts Receivable
Sales and VAT
Inventory
Accounts Payable
Cash, Bank and E-Wallets
Withholding Tax Credit
Income Statement
Invoice -> Accounts Receivable
Invoice -> Sales and VAT
Invoice -> Inventory
Customer Payment -> Cash, Bank and E-Wallets
Customer Payment -> Accounts Receivable
Deduction -> Accounts Receivable
Deduction -> Withholding Tax Credit
Deduction -> Income Statement
Credit Memo -> Sales and VAT
Credit Memo -> Inventory
Stock Arrival -> Inventory
Stock Arrival -> Accounts Payable
Supplier Payment -> Accounts Payable
Supplier Payment -> Cash, Bank and E-Wallets
Expense and Payroll -> Income Statement
Expense and Payroll -> Cash, Bank and E-Wallets
BIR Payment -> Cash, Bank and E-Wallets
Sales and VAT -> Income Statement
</pre>
</div>

Point at a document to see where it goes. Drag any bubble and let go — it springs back.
{: .app-map-hint }

### What Each Document Does

- **Invoice** — the customer owes you (receivables), the sale and its VAT are recorded, and the cost of the goods leaves inventory.
- **Customer payment** — money into cash, bank or e-wallets; receivables go down.
- **Deduction** — withholding tax becomes a tax credit you claim from BIR; wrong pricing lowers sales; support is an expense.
- **Stock arrival** — inventory goes up and you owe the supplier (payables).
- **Expenses and payroll** — on the Income Statement and out of cash.

The **General Ledger, Trial Balance, Balance Sheet and Income Statement** are all built from these documents, so they always agree with what you see on each page.
