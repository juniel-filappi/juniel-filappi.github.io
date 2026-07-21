# Napkin Runbook

## Curation Rules

- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)

1. **[2026-07-20] Validate portfolio UI in a real browser**
   Do instead: exercise every route at desktop and mobile widths, then run the automated test and production build commands.
2. **[2026-07-20] Scope page interaction assertions to their owning landmark**
   Do instead: when testing an interior page, query `main` or the page component so global header controls do not produce false failures.

## Shell & Command Reliability

1. **[2026-07-20] Browser QA media emulation may be unavailable**
   Do instead: inspect browser capabilities before reduced-motion QA; if unsupported, record the limitation and verify the CSS fallback plus focused test.
2. **[2026-07-20] Impeccable is installed globally for this repository**
   Do instead: run its scripts from `/Users/junielfilappi/.agents/skills/impeccable/` while keeping the repository as the working directory.

## Domain Behavior Guardrails

1. **[2026-07-20] Portfolio is a brand surface**
   Do instead: optimize the design for recruiter and client confidence, distinctiveness, readable proof of work, and direct contact paths.

## User Directives

1. **[2026-07-20] Keep Git operations outside chat**
   Do instead: never run Git commands; provide one compliant suggested commit message after making changes.
