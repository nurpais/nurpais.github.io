de# Findings & Decisions

## Requirements
- User wants to add/edit projects via external UI (no code edits)
- Only basic project data needed: title, description, tags, href (link)
- Projects currently hardcoded as TypeScript array in `ProjectsSection.vue`

## Research Findings

### Current Project Data (hardcoded in ProjectsSection.vue)
```ts
type Project = {
  index: string       // "01", "02", etc
  title: string
  description: string
  tags: string[]
  href?: string
}
```
4 placeholder projects currently. No separation of data from component.

### Project Structure
```
app/
  components/
    ProjectsSection.vue   ← target for modification
    TheNav.vue
    HeroSection.vue
    AboutSection.vue
    StackSection.vue
    ContactSection.vue
    TheFooter.vue
  composables/
    useScrollReveal.ts
  plugins/               ← empty
  assets/css/main.css
  app.vue
nuxt.config.ts
package.json
```

### Installed Dependencies
- `nuxt@4.3.1`, `vue@3.5.28`, `tailwindcss@4.2.1`
- `gsap@3.14.2`, `lenis@1.3.17`
- `@vueuse/nuxt@14.2.1`, `@nuxt/fonts`, `@nuxt/image`
- **No database client yet** — need to add `@supabase/supabase-js`

### nuxt.config.ts — current modules
```ts
modules: ['@vueuse/nuxt', '@nuxt/fonts', '@nuxt/image', 'lenis/nuxt']
```
No `runtimeConfig` defined yet — needs to be added for Supabase credentials.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Supabase | PostgreSQL + free tier + excellent web dashboard for data management |
| `server/api/projects.get.ts` | Credentials stay server-side, SSR-safe, Nuxt convention |
| Public read RLS only | Portfolio is public, no write access needed |
| `sort_order: int2` column | Sortable, display index computed as padStart(2,'0') |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| — | — |

## Resources
- Supabase dashboard: https://supabase.com
- `@supabase/supabase-js` SDK: npm install @supabase/supabase-js
- Nuxt runtimeConfig docs: https://nuxt.com/docs/api/nuxt-config#runtimeconfig

## Database Schema (Supabase SQL)
```sql
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sort_order smallint NOT NULL DEFAULT 0,
  title text NOT NULL,
  description text,
  tags text[] DEFAULT '{}',
  href text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON projects
  FOR SELECT USING (true);
```

## Files to Create / Modify
| File | Action | Description |
|------|--------|-------------|
| `server/api/projects.get.ts` | CREATE | Fetches projects from Supabase |
| `app/types/project.ts` | CREATE | TypeScript type definition |
| `app/components/ProjectsSection.vue` | MODIFY | Replace hardcoded array with useFetch |
| `nuxt.config.ts` | MODIFY | Add runtimeConfig for Supabase credentials |
| `.env` | CREATE | Local env vars (git-ignored) |
| `.env.example` | CREATE | Template for env vars (committed to git) |
| `.gitignore` | VERIFY | Ensure .env is excluded |
