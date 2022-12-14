---
title: Pillar 1 - Pricing Model Definition
---

The Pricing Model is an **append-only** collection of
**immutable** plan definitions.  New plan versions may be added
at any time.  However, once published for use, a plan cannot be
modified.

Plans within the pricing model indicate the prices and tiers of
all application features enabled for subscribed customers.

The pricing model may be canonically stored in a payment
processor's system, a database, or some other sort of
configuration, but there is _one_ representation which is
the authoritative single source of truth which can enforce
immutability guarantees.

Furthermore, the Pricing Model expresses _all_ variations of
pricing plans.  If a single customer is granted a unique pricing
scheme or discount, then this is reflected in the pricing model
as a custom (immutable) plan.

It is not important for any specific plan to be ideal.  New plans
can be added and tested at any time.

## Values Provided By This Pillar

1. It is impossible to inadvertently change a customer's [current
   plan](./2-schedule.md), making it safe to test new plan
   iterations.
2. The entirety of a pricing model for a product is retrievable
   as a single data source, with no chance to overlook
   out-of-band discounts and adjustments.
3. The authoritative pricing model definition can provide the
   data to drive a pricing page and other product marketing
   content, with no chance of divergence or contradiction.

## Using This Pillar in Isolation

Application code should _only_ be concerned with the names of
features and use run-time [PriceOps tooling](./5-tooling.md) to
[determine whether to deliver](./4-entitlement.md) a feature to a
customer. This allows Product and Marketing teams to iterate on
plan definitions freely.

However, without integration of [Customer Schedule
management](./2-schedule.md), [Metering](./3-metering.md), and
[Entitlement Checking](./4-entitlement.md), application code
cannot remain fully agnostic as to the plan that a customer is
currently on. Thus, it is tempting to hard-code plan names into
application code, preventing iterative experimentation.  Care
must be taken to ensure that application code remains properly
isolated from pricing model definition.
