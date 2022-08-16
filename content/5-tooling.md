---
title: Pillar 5 - PriceOps Tooling
---

A comprehensive PriceOps methodology eliminates as much human
error from the process as possible, so that we can focus on what
we're good at: creatively designing our product and applying
insights gained from observing customer behavior.

A full PriceOps toolchain contains at minimum the following
components:

1. Add new plans to the [pricing model](./1-model.md).  Common
   mistakes and inconsistencies are checked, and immutability of
   plans is enforced.
2. Append a phase to a [customer schedule](./2-schedule.md).
   Verifies that the plan named in the phase exists in the model,
   and that the start and end date are valid.
3. Report feature [usage](./3-metering.md).  This is used by
   application code to indicate that a feature has been used by a
   customer.
4. A feature flag system to determine
   [entitlements](./4-entitlement.md).  This is used by the
   application code to enable or disable features.
5. An automatic system for enabling [feature
   flags](./4-entitlement.md) as determined by [customer
   usage](./3-metering.md), the current [customer
   plans](./2-schedule.md), and the limits set in the [pricing
   model](./1-model.md).

The following optional components may provide additional value,
and reduce the potential for human error further:

1. A method for programmatically generating a signup or pricing
   page based on plans in the model marked "active" or "public".
2. A reporting system providing high-level metrics about the
   performance of various plans, customers using legacy versions
   of plans, and so on.

Each component of the PriceOps toolchain operate directly on the
single source of truth for their domain: the [pricing
model](./1-model.md), [customer schedule](./2-schedule.md),
[usage log](./3-metering.md), and [feature flagging
service](./4-entitlement.md).  They are provided as manual tools
(e.g., for sales and support to make adjustments to customer
schedule as needed, and for product teams to define and iterate
on plan definitions) and as APIs for programmatic access.

No out of band manual adjustments may be made to the system.
Every change is done through the provided PriceOps toolchain, to
reduce the potential for untracked modifications and human
errors.

## Values Provided By This Pillar

1. Human error removed from the process to the greatest degree
   possible.
2. All changes are tracked and can be reverted if necessary.
3. A clear separation of concerns is enforced, with each
   component prohibited from causing unforeseen changes.

## Using This Pillar in Isolation

It is of course not possible to use "PriceOps tooling" without
some other concept of "PriceOps".  Each component of the PriceOps
methodology that is implemented, can only reach its full value by
integration with tooling to provide consistency and reduce the
likelihood of errors.

Thus, there is significant value in adopting PriceOps tooling for
each pillar of the PriceOps methodology.
