

## Plan: Add User Profile Search to Search Bar

### What
Add user profiles as searchable results in the search page. When typing a name, user profiles appear in the autocomplete suggestions and in the results grid, allowing navigation to `/user/:userId`.

### Changes

**File: `src/pages/Search.tsx`**

1. **Add a `user` type to the `Suggestion` interface** — include `userId`, `avatarUrl`, `location` fields in a new `userData` property.

2. **Fetch all profiles in the main query** — the query already fetches profiles for item owners. Extend it to also return profiles independently (or reuse the existing profile data) so we can search by `display_name`.

3. **Add user suggestions to the autocomplete dropdown** — in the `useEffect` that generates suggestions from `debouncedQuery`, query the already-fetched profiles list for `display_name` matches. Add them as `type: 'user'` suggestions with an avatar icon.

4. **Render user suggestions differently in the dropdown** — show avatar + display name + location instead of item thumbnail. Clicking navigates to `/user/:userId`.

5. **Add user profile cards to the filtered results section** — when search text matches a user's display_name, show a user card at the top of results that links to their profile.

6. **Handle suggestion click for users** — navigate to `/user/${suggestion.userData.userId}` instead of setting search query.

### Technical Detail

- Add a separate `useQuery` for profiles (or piggyback on the existing items query which already fetches profiles) to get all profiles with `display_name`, `avatar_url`, `location`, `user_id`, `is_verified`.
- Filter profiles client-side by `display_name.toLowerCase().includes(query)`, excluding the current user.
- User suggestions appear before item suggestions in the dropdown with a "Users" section header.
- User result cards in the main grid show avatar, name, location, and item count.

