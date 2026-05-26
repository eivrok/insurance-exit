# Project conventions

<things specific to this codebase that aren't in the global rules>
<examples:>
- Database migrations live in `db/migrations/` and use `<tool>`.
- All HTTP responses go through `core/responses.py` for consistent error shape.
- Don't touch `legacy/` — scheduled for removal in Q3.
