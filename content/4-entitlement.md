---
title: Pillar 4 - Entitlement Checking
---

Customer access to features is done by checking a feature flag at
run time, providing the customer and feature identifier.

Entitlement feature flags are set based on a customer's current
usage as reported by the [metering system](./3-metering.md) and
the limits set in the [model](./1-model.md) for the currently
active plans in the [customer schedule](./2-schedule.md).

This data can be either queried at run time, when
preventing overages is more important than performance, or by
checking a cache which is set periodically, when preventing
overage is less important than performance.

Entitlement checks in application code _must_ reference the
feature, and _never_ reference the plan, so that plans can be
adjusted or changed without requiring changes to the application
code

## Values Provided By This Pillar

1. The clear separation of concerns between application code and
   the [pricing model](./1-model.md) definition allows for
   changes to the pricing model over time, without changing
   application code.
2. Features can easily be enabled or disabled by adding them to
   plans in the [model](./1-model.md) and then adding a plan to a
   [customer schedule](./2-schedule.md).
3. Reduces the likelihood that a feature is provided to a
   customer who should not have access to it, or denied to a
   customer who should have access to it, by clear unambiguous
   reference to the single source of PriceOps truth.

## Using This Pillar in Isolation

Traditionally, feature flagging is used to schedule deployment of
features, which may be made available to beta users ahead of
time, so that they can be used in production prior to a public
launch.

When used as a gate for paid features, this can be very powerful
on its own, as it keeps application code focused on features,
rather than having to be aware of the details of a pricing model.

However, if feature flags are not automatically set based on
[usage](./3-metering.md) and set [automatically](./5-tooling.md),
then this can involve manual steps, which are prone to error.

Additionally, if feature flags are defined in an ad hoc manner,
rather than being [deterministically generated](./5-tooling.md)
by the feature definitions in the [model](./1-model.md), then
human error can cause problems.
