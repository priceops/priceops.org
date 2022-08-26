Many products today are delivered as a service, with a tiered
pricing model based on access to the service ("seats"), a measure
of consumption of the some aspect of the service ("metering"), or
some combination of these.

The 5 Pillars of PriceOps define a methodology for pricing model
definition and implementation that supports **iteration**,
**safety**, and **organizational alignment**.

## Who Should Read This Document

Everyone involved in the architecture and design of SaaS
applications would benefit from adopting this methodology, but
especially: engineering and product leaders, and founders of
companies starting or re-evaluating their monetization journey.

## What PriceOps Is (and Is Not)

PriceOps is a methodology that enables iteration and flexibility.
It describes a set of implementation properties that facilitate
pricing model exploration by effectively managing inherent
complexity.

It is _not_ a prescriptive guideline about how any particular
product should be priced, or how such a price should be
determined.  Rather, it is, a guideline for how a pricing model
must be implemented to maximize flexitility and stability.

**PriceOps is how to operate the pricing.**

## Background

Pricing is a critical component of a product, touching all parts
of the organization. The price incentivizes some user behavior
and expectations, and discourages others.  Support and sales
often need to adjust prices for specific customers. Engineering
must enable or disable features based on customer tiers and
current usage.  The pricing model positions a product among its
competitors, vital for product marketing.  Pricing models are
critical for tracking and forecasting the financial performance
of a company.

Like most aspects of a product, it is difficult to know in
advance the ideal price structure for a product.  Even friendly
potential customers will misjudge their own future behavior and
preferences, so the problem is low-information until engaging
with the market.  As the landscape evolves and the organization
learns from interactions with the market, the pricing structure
of a product must evolve.

It is unlikely that a product's optimal pricing will be arrived
at without direct contact with the market, and even more unlikely
that the optimal pricing today will remain so for long.
Therefor, a pricing implementation _must_ facilitate responsive
iteration.

Poorly managed pricing is a common and costly problem.  Once
implemented, a pricing model quickly comes to be enmeshed in
multiple interdependent aspects of the organization.  Pricing
changes introduce engineering instability, and distract
engineering teams from improvements to the product itself.
Product and marketing teams beg for resources and are unable to
use the single most powerful tool to reposition packaging.  Sales
and support end up with a sprawling list of out-of-band
adjustments to close deals and keep customers happy, which
introduces further instability.

Changes in any area require changes across the organization,
introducing instability.  Each change to the pricing model tends
to increase this instability, exponentially increasing the cost
of iteration.

## The Shape of a Solution

1. A single source of truth programmatically drives the customer
   purchase flow, billing, and feature delivery.
2. Separation of Ownership: changes in one area do not require
   tightly-coupled changes in any other area.
3. Pricing plans can be added without changing application code,
   or affecting existing customers.

Many organizations have come to solutions similar to the 5
Pillars of PriceOps, often at the end of a long and costly
process.  There are several tools available to address parts of
this problem, which can work well together.  If built from the
ground up according to the 5 Pillars of PriceOps, a SaaS product
has a much higher chance of success.

## The 5 Pillars

### [1. Pricing Model Definition](./1-model.md)

The pricing model is an append-only collection of versioned
plans.  Specific plan versions are immutable, so that adding new
plan definitions will not affect existing users.

### [2. Customer Schedule](./2-schedule.md)

A "Customer" in the PriceOps architecture has a schedule of plans
in effect at certain times, along with feature usage amounts. The
plan in effect at any given time determines the price applied to
the features used within that period.

### [3. Metering](./3-metering.md)

As customers use features within the application, their usage is
reported to a central data store.  Usage can be tracked at the
moment of consumption, or reported later, as appropriate.  All
features which might *potentially* be monetized are reported,
even if they are currently free or unlimited.

### [4. Entitlement Checking](./4-entitlement.md)

Entitlement to a given feature is always be determined by
reference to the single source of truth about the customer's
schedule and the pricing model.  Application code remains
agnostic as to the names or versions of plans within the pricing
model.

### [5. PriceOps Tooling](./5-tooling.md)

All actions to modify the pricing model, adjust a customer's plan
or billing, or select plans to display on a pricing page, are
done using tools that work directly with the single source of
truth in a disciplined manner.
