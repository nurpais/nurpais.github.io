# Task Plan: Projects Database with Supabase

## Goal
Integrate Supabase as a database for portfolio projects so new projects can be added/edited via the Supabase web dashboard without touching code.

## Current Phase
Phase 2

## Phases

### Phase 1: Requirements & Discovery
- [x] Understand user intent — manage projects via external UI (no code edits)
- [x] Explore current project structure and data patterns
- [x] Identify all files to create/modify
- **Status:** complete

### Phase 2: Planning & Structure
- [x] Choose database: Supabase (PostgreSQL + dashboard UI, free tier)
- [x] Define table schema for `projects`
- [x] Map out all files to create/modify
- [x] Document decisions with rationale
- **Status:** complete

### Phase 3: Implementation
- [ ] Install `@supabase/supabase-js`
- [ ] Add `.env` + `.env.example` with Supabase credentials
- [ ] Update `nuxt.config.ts` with `runtimeConfig`
- [ ] Create `app/types/project.ts`
- [ ] Create `server/api/projects.get.ts`
- [ ] Update `ProjectsSection.vue` to use `useFetch('/api/projects')`
- [ ] Verify `.gitignore` has `.env`
- **Status:** pending

### Phase 4: Testing & Verification
- [ ] Run `pnpm dev` — confirm projects render
- [ ] Add test row in Supabase dashboard → verify it shows on site
- [ ] Confirm no hardcoded projects remain
- **Status:** pending

### Phase 5: Delivery
- [ ] Clean up placeholders in component
- [ ] Document Supabase setup steps for user
- **Status:** pending

## Key Questions
1. ~~What kind of database?~~ → Supabase (PostgreSQL)
2. ~~Does user want admin panel or external CMS?~~ → External UI (Supabase dashboard)
3. ~~What data fields per project?~~ → Basic: title, description, tags, href

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Supabase | Free tier, PostgreSQL, great web dashboard, easy REST/SDK integration |
| Server API route (`/api/projects`) | Keeps credentials server-side, SSR-compatible |
| `useFetch` in component | SSR-aware, Nuxt auto-import, matches project conventions |
| RLS policy "public read" | Portfolio is public, no auth needed for read |
| `sort_order` column (not index string) | Sortable integer; display "01"/"02" computed client-side |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| —     | —       | —          |

## Notes
- Update phase status as you progress: pending → in_progress → complete
- Re-read this plan before major decisions
- Log ALL errors — prevents repetition
