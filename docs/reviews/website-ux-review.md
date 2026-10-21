# Website UX/UI Review

**Review date:** 2026-10-21  
**Scope:** Root static website (`index.html`, `styles.css`, and `script.js`)  
**Review type:** Senior UX/UI and accessibility review

## Method

The review examined the page structure, content hierarchy, interaction behavior, responsive CSS, accessibility attributes, and primary user journeys. This was a code and content review; browser-based visual QA at multiple viewport sizes remains to be completed.

## Findings

### High Priority

1. **The primary event directory requires JavaScript**
   - References: `index.html:114`, `script.js:21-39`
   - The event list starts empty and disappears if JavaScript fails or is disabled.
   - Render event cards in HTML first, then enhance them with search and filters.

2. **The event count is incorrect before JavaScript runs**
   - Reference: `index.html:51`
   - The page says `12 events listed`, while `script.js` contains 13 events.
   - Keep the static content accurate or generate the count from a shared source.

3. **Event status and chronology are unclear**
   - References: `index.html:100-115`, `script.js:1-14`
   - Current and future events are presented together without clear upcoming, past, or tentative grouping.
   - Default to upcoming events and clearly label past and tentative entries.

4. **Community cards promise action but provide none**
   - Reference: `index.html:165-168`
   - “Workshops,” “Local events,” and “Get involved” are non-clickable cards.
   - Convert them into actions such as finding local groups, submitting an event, volunteering, or contributing on GitHub.

### Medium Priority

5. **Filtering is too limited for a regional directory**
   - Reference: `index.html:100-115`
   - Filters only support year and free-text search.
   - Add country, event type, and upcoming/past filters, along with a visible result count.

6. **The PyCon APAC to PythonAsia transition requires repeated interpretation**
   - References: `index.html:68-72`, `index.html:119-126`, `README.md:5-10`
   - The explanation is useful, but the relationship is distributed across several sections.
   - Add a concise positioning statement near the hero: “PyCon.asia is the directory. PythonAsia is the regional conference. National and local PyCons remain community events.”

7. **Mobile navigation needs stronger keyboard behavior**
   - Reference: `script.js:51-60`
   - The menu updates `aria-expanded`, but does not handle Escape, focus placement, focus return, or outside clicks.
   - Add those behaviors for a complete mobile navigation experience.

8. **The directory appears after substantial promotional content**
   - References: `index.html:40-117`
   - The hero, transition banner, and featured event create a long path for users who only want to find an event.
   - Keep the storytelling, but strengthen the early “Explore events” shortcut and consider shortening the featured section on mobile.

9. **External event links should communicate their destination**
   - Reference: `script.js:30-35`
   - Event links open new tabs without telling users they are leaving the directory.
   - Add accessible context such as “opens external event website.”

10. **Responsive behavior needs intermediate-width testing**
    - References: `styles.css:148-150`
    - The main breakpoints are `800px` and `480px`.
    - Test at 320px, 375px, 480px, 768px, 820px, and 1024px, especially the event toolbar, navigation, featured event, and event card wrapping.

## Strengths

- Strong visual identity and consistent typography.
- Clear hero message and prominent event CTA.
- Good use of semantic headings, skip navigation, reduced-motion support, and button states.
- The transition banner helps explain the PyCon APAC rename.
- Event cards are visually scannable and link directly to official sites.
- The Code of Conduct is easy to find.

## Recommended Order

1. Make event content available without JavaScript and correct the static count.
2. Add upcoming, past, and tentative event status.
3. Make community cards actionable.
4. Improve mobile navigation accessibility.
5. Add richer event filtering and result feedback.
6. Validate the visual layout at intermediate viewport widths.
