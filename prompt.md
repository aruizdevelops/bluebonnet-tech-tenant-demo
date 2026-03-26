You are working as a Claude Team to create a brand-new tenant app built on top of our `-core` app foundation.

This tenant app should be inspired by the structure, product offering, and overall feel of:
https://banyanandbamboo.com

This is NOT a literal copy. Do not copy branding, logos, colors, imagery, text, or proprietary assets. Instead, understand:
- what the business is,
- how the site is structured,
- what services/products they offer,
- how booking appears to work,
- what a polished version of this type of business app should include,
and then build an original tenant app with a very similar feel, product model, and customer journey.

Critical architecture rule:
This new tenant app must remain linked to our `-core` app and use it as the foundational structure, shared components, shared patterns, and design/engineering base. Do not build this tenant as a disconnected standalone app. The tenant app should extend the core patterns appropriately.

Tech/implementation constraints:
- Use the existing `-core` app as the foundation
- Follow the established shared patterns from core
- Keep architecture clean and extensible
- Ask clarifying questions if anything meaningful is unclear
- Emphasize security in every phase
- Keep the app demo-worthy and realistic
- Build with future `/admin` support in mind
- Capture data useful to the admin experience, such as visits, booking activity, service popularity, and other relevant metrics where feasible
- If analytics or backend persistence is not fully available yet, create well-labeled placeholders/mock plumbing that can be integrated later

Use Claude Teams with these agents:

1. Overseer
2. Researcher
3. Builder
4. Reviewer
5. Rebuilder
6. Final Reviewer

The Overseer is responsible for making sure the team is following the required patterns, communicating findings properly, and not skipping steps.

--------------------------------------------------
TEAM RESPONSIBILITIES
--------------------------------------------------

[Overseer]
Responsibilities:
- Ensure all agents are doing their jobs correctly
- Ensure agents communicate findings clearly to the next agent
- Ensure the `-core` app patterns are being followed
- Ensure the new tenant app stays aligned with core architecture
- Ensure security is treated as a first-class concern
- Ensure agents ask clarifying questions if needed
- Stop progress if there is critical ambiguity or architecture drift
- Validate that review feedback is actionable and that rebuild changes actually address it

Overseer deliverables:
- brief checkpoint summary after each phase
- note any blockers or ambiguity
- confirm whether the team should proceed
- final summary of team quality and compliance with requirements

[Researcher]
Responsibilities:
- Investigate https://banyanandbamboo.com
- Break down:
  - the site structure
  - the business model
  - the “product” or offering
  - service categories
  - memberships / gift cards / promos if relevant
  - how booking appears to work
  - likely customer journey
  - the emotional tone / premium feel / presentation style
- Identify what makes this business compelling from a digital experience perspective
- Translate those findings into a practical brief for the Builder
- Identify what analytics/admin data this type of business would likely care about
- Identify any gaps or ambiguity and ask clarifying questions if needed

Researcher deliverables:
- business understanding summary
- site structure summary
- service/product summary
- booking flow summary
- UX/customer journey summary
- recommended tenant app sections/features
- recommended admin capabilities
- recommended analytics/data capture ideas
- security considerations for this kind of app
- clarifying questions if needed

[Builder]
Responsibilities:
- Use the Researcher’s findings to build a new tenant app with a very similar feel and product model
- The app should feel premium, calm, polished, and service-oriented
- It should reflect the experience of a med spa / day spa / consultation + booking business
- Build it as an original implementation, not a clone
- Reuse and respect the `-core` app foundation
- Build the customer-facing experience and structure it so it can support admin functionality

The Builder should include app areas such as:
- premium landing/home page
- service/category discovery
- individual service detail presentation
- consultation-first calls to action
- booking-oriented user flow
- testimonials / trust / FAQ
- about / philosophy / approach content
- memberships / gift cards / offers placeholders if appropriate
- location/contact/hours details
- any other sections needed to make the app feel complete for this type of business

The Builder should also make sure the app is structured to support `/admin` data and management for items such as:
- services
- service descriptions
- pricing placeholders
- categories
- promotions/offers
- memberships
- gift cards
- booking requests / appointments
- customer leads / inquiries
- content sections
- analytics signals

Builder deliverables:
- implemented tenant app structure
- explanation of how it maps to Researcher findings
- explanation of how it remains linked to `-core`
- explanation of what data is being prepared for `/admin`
- security notes
- any blockers/questions

[Reviewer]
Responsibilities:
- Review the Builder’s work critically
- Verify the app meets the requirements
- Verify it feels aligned to the researched business model and customer journey
- Verify it follows core app patterns
- Verify security expectations are respected
- Identify bugs, weak UX, poor structure, missing data/admin considerations, and architecture drift
- Produce a clear remediation list for the Rebuilder

Reviewer deliverables:
- category-by-category review
- issues grouped by severity
- security findings
- architecture findings
- UX/design findings
- core-pattern compliance findings
- data/admin readiness findings
- exact fixes required

[Rebuilder]
Responsibilities:
- Fix the issues identified by the Reviewer
- Preserve the intended premium med-spa/day-spa service feel
- Keep alignment with `-core`
- Improve any weak data/admin hooks
- Tighten security and implementation quality
- Do not introduce unnecessary complexity

Rebuilder deliverables:
- list of fixes applied
- summary of changes
- unresolved issues if any
- updated security notes

[Final Reviewer]
Responsibilities:
- Review the Rebuilder’s updated work
- Confirm whether issues were actually fixed
- Confirm whether the app is ready as a strong tenant demo
- Confirm whether the app is ready for future `/admin` integration and operational usage
- Confirm whether the build still respects `-core` patterns and security expectations

Final Reviewer deliverables:
- final verdict
- readiness assessment
- remaining risks
- remaining follow-ups
- security summary

--------------------------------------------------
APP DIRECTION
--------------------------------------------------

The new tenant app should feel like an upscale service business app for a med spa / day spa / wellness studio.

The experience should likely include:
- a premium hero section
- service category sections
- consultation-first positioning
- trust-building sections
- testimonials/reviews placeholders
- FAQ
- personalized-care messaging
- booking/consultation calls to action
- memberships/offers/gift cards placeholders if relevant
- location/contact information
- polished, calming, premium visual rhythm

It should NOT feel like:
- a generic SaaS dashboard
- a random ecommerce storefront
- a literal copy of Banyan & Bamboo
- a disconnected one-off app with no core alignment

--------------------------------------------------
ADMIN REQUIREMENTS
--------------------------------------------------

The `/admin` side should be planned for from the start.

The app should be set up to provide useful data to `/admin`, such as:
- page visits / top viewed pages if feasible
- service page views
- booking starts / completed bookings
- consultation requests
- popular services
- category performance
- promo/membership/gift-card interest
- lead/inquiry submissions
- appointment trend data
- any other relevant operational/business metrics

The `/admin` page should be designed to eventually control:
- services
- service titles
- service descriptions
- service categories
- service imagery
- pricing placeholders
- active/inactive services
- featured services
- promotions/offers
- membership info
- gift card content
- business info
- contact details
- FAQ content
- homepage featured content
- testimonial content placeholders
- scheduling settings placeholders
- booking settings placeholders

Also include other admin capabilities that make sense for this business type, such as:
- staff/provider management placeholders
- business hours/location editing
- lead management
- content management
- media/image library
- analytics dashboard
- appointment overview
- inquiry/contact overview
- promo scheduling
- service visibility toggles
- activity log placeholder
- roles/permissions placeholder
- settings placeholder

--------------------------------------------------
SECURITY REQUIREMENTS
--------------------------------------------------

Security must be emphasized in every phase.

At minimum:
- ask clarifying questions if auth/roles/data ownership are unclear
- avoid unsafe assumptions about admin access
- avoid hardcoding secrets
- think about safe media upload patterns
- think about input validation for service/content editing
- think about role/access boundaries for admin
- flag gaps if backend/auth/analytics are still placeholder-only
- do not introduce unnecessary packages or risky shortcuts

--------------------------------------------------
WORKFLOW
--------------------------------------------------

Phase 1 — Research
- Researcher investigates the site and business thoroughly
- Overseer validates findings and identifies ambiguity
- Ask clarifying questions if needed before build begins

Phase 2 — Build
- Builder creates the tenant app based on Researcher findings
- Builder ensures app remains tied to `-core`
- Builder prepares the app for future `/admin` data/control needs
- Overseer validates architecture and pattern compliance

Phase 3 — Review
- Reviewer inspects Builder work for quality, security, UX, core alignment, and requirements match
- Overseer validates review quality

Phase 4 — Rebuild
- Rebuilder fixes the reviewer’s findings
- Overseer validates that fixes were actually applied

Phase 5 — Final Review
- Final Reviewer verifies the rebuild
- Overseer gives final quality summary

--------------------------------------------------
NON-NEGOTIABLE RULES
--------------------------------------------------

- Ask clarifying questions if meaningful uncertainty exists
- Do not copy Banyan & Bamboo assets, branding, imagery, or exact text
- Keep the app aligned with `-core`
- Keep it premium, polished, and demo-worthy
- Build it in a way that supports future admin operations
- Treat security as first-class
- Be honest about placeholders vs real functionality
- Do not rubber-stamp weak work

--------------------------------------------------
OUTPUT FORMAT
--------------------------------------------------

At the end, provide:
1. Research summary
2. Proposed tenant app direction
3. Core alignment summary
4. Admin/data strategy
5. Build summary
6. Reviewer findings
7. Rebuilder fixes
8. Final review verdict
9. Overseer summary
10. Clarifying questions / risks / next steps

Start with the Researcher analyzing the Banyan & Bamboo site and business first. Do not build until the research summary and app direction are clearly established.