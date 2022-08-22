---
title: Pillar 2 - Customer Schedule
---

The Customer Schedule is the single list of plans that a Customer
has subscribed to, with start and (optionally) end dates for
each.  Each item in this list is a **phase**, which can be
appended to the Customer schedule.

Each plan named in the schedule is a reference to one of the
plans listed in the [Pricing Model](./1-model.md).

The plans in effect at the time of [feature
consumption](./3-metering.md) determines the amount that a
customer is billed.

[PriceOps tooling](./5-tooling.md) is used to append a new phase
to a customer schedule any time it is appropriate:

- On initial sign-up.
- When the user selects a new plan during upgrade or downgrade.
- When Sales finalizes a contract with a VIP customer.

New phases can be added to the customer schedule that take effect
at any time in the past or future.  For example, a special trial
plan granting access to all application features may be scheduled
to begin immediately and terminate after some fixed period, or a
deprecated plan may be scheduled to be removed at some point in
the future, after the customer has been given adequate
forewarning.

In addition to determining billing, a clear format for the
customer schedule enables support teams to answer questions
regarding a customer's bill, feature access, and expected future
charges.

## Values Provided By This Pillar

1. A record of customer plan changes is extremely useful for
   analyzing the effectiveness of product and packaging changes.
2. A historical or prospective bill can be calculated at any
   point, based on the plans in effect at a given time.
3. PriceOps tooling prevents out-of-band changes to customer
   access or pricing, so everything is deterministic and aligned
   with the single source of truth.

## Using This Pillar in Isolation

Modeling customer plans and plan transitions as a schedule of
changes is far superior to simply assigning customers to a single
mutable plan identifier.

However, without the constraint that _all_ plans referenced in
the customer schedule are fully identified in the
[model](./1-model.md), it is impossible to ensure that all
customer plans are catalogued and accounted for, and that no
untracked pricing adjustments have been made.
