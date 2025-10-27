# Informe de accessibilidad - Taura Birra

## Asuntos actuales (priorizados)

### Críticos (WCAG Level A Failures)

1. **Hidden Text Without Proper Markup**
   - **Location:** `.card .card-text` 
   - **Issue:** `color: rgba(0,0,0,0.0)` invisible until hover
   - **Impact:** Screen readers read invisible text
   - **Fix:** Use `opacity: 0` + `aria-hidden="true"` initially

2. **No Focus Indicators**
   - **Location:** All interactive elements
   - **Issue:** No visible `:focus` styles
   - **Impact:** Keyboard users can't track position
   - **Fix:** Add global focus styles

3. **Form Labels Missing**
   - **Location:** Contact form
   - **Issue:** Labels not programmatically associated
   - **Impact:** Screen readers can't identify fields
   - **Fix:** Ensure `<label for="id">` matches `<input id="id">`

4. **Missing Alt Text Context**
   - **Location:** Beer card images
   - **Issue:** Alt text too generic ("Cerveza IPA")
   - **Fix:** Add descriptive context ("Taura Birra IPA artesanal con notas cítricas")

### 🟠 High Priority (WCAG Level AA)

5. **Color Contrast Issues**
   - **Location:** `.subtitulo` on header background
   - **Issue:** Contrast ratio 3.2:1 (needs 4.5:1)
   - **Fix:** Add text-shadow or darken background

6. **Navbar Toggle Missing Label**
   - **Location:** `.navbar-toggler`
   - **Issue:** No `aria-label` for screen readers
   - **Fix:** Add `aria-label="Menú de navegación"`

7. **Table Missing Headers**
   - **Location:** `.tablap`
   - **Issue:** No `<th scope="col">` for headers
   - **Fix:** Convert first row to proper `<thead>`

### 🟡 Medium Priority (Best Practices)

8. **Decorative SVGs Not Hidden**
   - **Location:** `.separador` barley graphics
   - **Issue:** Screen readers announce SVG
   - **Fix:** Add `aria-hidden="true"` + `role="presentation"`

9. **Language Not Declared**
   - **Location:** `<html>` tag
   - **Issue:** Missing `lang="es"`
   - **Fix:** Add language attribute

10. **Skip to Content Link Missing**
    - **Location:** Top of page
    - **Issue:** Keyboard users must tab through entire nav
    - **Fix:** Add skip link before navbar

## Contrast Analysis

| Element | Current Ratio | Required | Pass/Fail |
|---------|---------------|----------|-----------|
| Body text on #FFE4B5 | 8.2:1 | 4.5:1 | ✅ PASS |
| Nav links on #3f2b1d | 10.5:1 | 4.5:1 | ✅ PASS |
| Header subtitle | 3.2:1 | 4.5:1 | ❌ FAIL |
| Footer text | 9.1:1 | 4.5:1 | ✅ PASS |
| Button text | 7.8:1 | 4.5:1 | ✅ PASS |

## Keyboard Navigation Test Results

| Action | Works? | Notes |
|--------|--------|-------|
| Tab through nav | ✅ | But no focus indicator |
| Open mobile menu | ❌ | Can't activate with Enter key |
| Submit form | ✅ | |
| Activate card hover | ❌ | Needs `:focus-within` |
| Close age gate | ✅ | |

## Recommended Fixes for React Migration

```jsx
// 1. Focus management
useEffect(() => {
  if (modalOpen) {
    modalRef.current?.focus();
  }
}, [modalOpen]);

// 2. Keyboard handlers
<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>

// 3. Semantic HTML
<nav aria-label="Principal">
  <ul role="list">
    <li><a href="#inicio">Inicio</a></li>
  </ul>
</nav>

// 4. Live regions for dynamic content
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

## Lighthouse Scores (Current)

* Accessibility: 68/100
* Target after Stage 2: 95+/100