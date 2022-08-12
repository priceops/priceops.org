---
title: Pricing as Code Manifesto
---

- The problem
    - multiple interdependent pieces
    - all speaking different languages
    - Increases friction in supporting customers
    - Changes in any area require changes in multiple areas
    - factionalizing concerns
    - organizational tensions
    - Iteration on pricing model quickly becomes impossible

- Shape of solution
    - Separation of ownership: changes in one area do not require
      tighly-coupled changes/updates in another, with
      clear/consistent interface boundaries.
        - pricing model definition owned by
          product/marketing/sales teams
        - code owned by engineering
        - customer operations owned by sales/support teams
        - consistent data provided to finance
        - Pricing model can be iterated without changing application
          or impacting existing users.
        - User plans can be changed or updated without changing
          application code or "standard" pricing model.
    - Everything is driven by writing to or reading from single
      source of truth.
    - Tools built API/CLI first, so that they are extensible,
      repurposable, and easily used either in parts or together,
      serving the ideals of the Single Source of Truth PriceOps
      methodology.
    - Data objects (plans, customers, features, etc.) are
      identified and referenced by names familiar to those
      working with them, rather than arbitrary opaque identifiers
      defined by a payment processor.  Makes it trivial for all
      PriceOps to speak the same language.  (Product, finance,
      eng, support, sales, etc.)
    - Many organizations have come to some/all of this approach
      independently, and far many more cannot make the leap, and
      fail as a result.
- Solution: single source of truth code-driven PriceOps methodology
    - plan/feature definition
    - user/account management
    - feature metering
    - billing consistency

- 5 Pillars of PriceOps Excellence
    - for each piece:
        - identify "use alone" value, as well as value provided
          to the rest of the system.
        - why don't people do this?  what are the obstacles?
        - what are the downsides of not doing this?  What suffers
          if it's skipped?
    - 1 Pricing model definition
        - tier.push(), tier.pull()
        - "terraform stripe"
        - Pricing model is an append-only collection of versioned
          plans.  Specific plan versions must be immutable.
        - easy to add or update plan definitions without
          inadvertently affecting existing users.
        - Basic logical consistency checks can prevent common errors.
        - Adding a new plan (including a new version of an
          existing plan) must be *cheap*, *easy*, and *safe*
        - **If used alone** does not enforce full
          separation of concerns between Product and Engineering.
          Feature checking must be implemented somehow.
    - 2 Customer Scheduling
        - tier.appendPhase()
        - Concept of the schedule with overlapping phases
        - a "customer" in this architecture is a schedule and a
          collection of feature usage amounts, for which they are
          billed.
        - The plans available to a customer must be driven
          programmatically by the pricing model definition.
    - 3 Metering
        - tier.report()
        - Customer feature usage is tracked in a central system
        - Usage can be reported at the moment of use, or rolled
          up later.
        - Whether seats, downloads, disk size, etc., use of the
          product is reported to a central system.
        - Anything that *potentially* can be monetized someday,
          should be reported, even if it is free/unlimited by
          default.
    - 4 Entitlements
        - tier.can()
        - Feature usage may have limits imposed by the plan (to
          incentivize upgrading), and some features are not
          available to users who are not on a given plan.
        - Entitlement must be *checked* in the application, but
          never *decided* in the application logic.
        - Thus, feature availability determined by an API call to
          a local or remote store that is driven by the plan
          definition and customer feature usage.
    - 5 PriceOps
        - This encompasses everything from sales, support, and
          the selection of plans to showcase in a pricing page.
        - Every action on a customer (modifying their plan or
          billing, creating a new plan for them, switching them
          to a different available plan) should be done by
          leveraging the other 4 pieces of this architecture (no
          out of band mutations).
        - All actions should be exposed via tools that work
          directly with the single source of truth, and prevent
          deviations from the architectural goals.

