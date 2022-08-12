---
title: Pillar 2 - Customer Schedule
---

The Customer Schedule is the list of the plans that a Customer
has subscribed to, with their start and end dates.

Each plan named in the schedule is a reference to one of the
plans listed in the [Pricing Model](./1-model.md).

The plan in effect at the time of feature consumption determines
the amount that a customer is billed.

PriceOps tooling is used to assign a plan to a customer whenever
their plan changes:

- On initial sign-up.
- When the user selects a new plan during upgrade or downgrade.
- When Sales finalizes a contract with a VIP customer.

New phases can be added to the customer schedule that take effect
at any time in the past or future.  For example, 

In addition to determining billing, a clear format for the
customer schedule enables support teams to answer questions
regarding a customer's bill, feature access, and expected future
charges.

## Values Provided By This Pillar

1. A historical record of customer plan changes is extremely
   useful for analyzing the effectiveness of product and
   packaging changes.
2. 
