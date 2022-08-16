---
title: Pillar 3 - Metering
---

In order to bill customers for feature access, their use of the
product is tracked in an append-only log.

Each increase or decrease of use of a feature (whether a measure
feature such as "disk space" or "bandwidth", or a countable
quantity such as "seats") is tracked in the log.

Each entry contains:

- The unique identifier of the customer.
- The feature identifier (as referenced in the [Model](./1-model.md))
- The increase or decrease amount.
- The time that the increase or decrease was made.

There is no requirement that every _metered_ feature is a
_monetized_ feature.  Typically, a product's major features and
metrics of usage must be known well in advance of discovering the
optimal pricing scheme to communicate and capture value.
Gathering high-quality metrics about real-world feature usage can
be central to understanding how a product should be priced.

Thus, anything that can _potentially_ be a restricted or
monetized feature is tracked in the metering system, even if the
current price is 0.

Metering can be done in a variety of points in time, as
appropriate. The two common modes are:

- **At the time of feature usage.**  For example, every time the
  customer adds a new seat to their account, uploads a file,
  or runs a report, the application can emit a metering event.
  This is best for low-frequency events with low performance
  sensitivity.
- **In a regular roll-up.**  For example, on an hourly basis, the
  number of requests and bytes downloaded by customer is reported.
  This is best when performance is critical, and events are
  extremely frequent.

## Values Provided By This Pillar

1. Even in products with a flat base plan price, it is important
   to understand how customers interact with the product.
2. Prices and plans can be defined based on any combination of
   feature usage, making it easier to adapt in the future.
3. Because every metered feature is a reference to the same
   feature identifier in the [model](./1-model.md), it is
   easy to correlate usage to value generation, improving growth
   and user success processes.

## Using This Pillar in Isolation

It is extremely common for feature usage to be tracked without
ever attaching prices to usage, for all the obvious benefits of
visibility.

However, unless metering is integrated into a pricing scheme, it
is not properly a part of a company's PriceOps methodology.

If reported metrics are defined in an ad hoc manner, and not
connected to the pricing model, then it is likely that the data
will become difficult to interpret over time, even if it is
useful in the short-term for technical visibility.
