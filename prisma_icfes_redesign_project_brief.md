# Project Brief: PRISMA ICFES Redesign

## 1. Project Overview
**Product:** PRISMA (Official portal of the ICFES - Instituto Colombiano para la Evaluación de la Educación).
**Objective:** Redesign the transactional portal used by Colombian citizens to register for and manage state exams (Saber 11, Saber Pro, TyT, etc.).
**Core Challenge:** Replace a high-friction, legacy interface with a modern, accessible, and citizen-centric experience that meets GOV.CO standards and WCAG AA accessibility requirements.

---

## 2. Target Audience
- **Primary Users:** Colombian citizens aged 15–35 (students and graduates).
- **Secondary Users:** Adult learners seeking high school validation and professional exam candidates.
- **Context:** High-stakes transactional environment; users access from diverse devices and varying levels of digital literacy.

---

## 3. Design System & Brand Identity (Institutional Integrity System)
The redesign adheres to a strict visual hierarchy to build trust and clarity.

### Color Palette
| Token | Value | Primary Usage |
|---|---|---|
| Primary Blue | `#003366` | Branding, module headers, H1/H2 titles. |
| GOV.CO Blue | `#004884` | Top administrative bar and institutional footer. |
| Focus Blue | `#0066CC` | Interactive states, links, and focused inputs. |
| CTA Yellow | `#FFCC00` | **Reserved exclusively** for the single primary action per screen. |
| Surface/BG | `#FFFFFF` / `#F8F9FA` | Cards and general application background. |
| Success/Error | `#2E7D32` / `#C62828` | State indicators and validation feedback. |

### Typography
- **Headings (Montserrat):** Used for structural hierarchy (Bold for H1/H2).
- **Body & Controls (Open Sans):** Optimized for readability at 16px minimum for labels and inputs.

---

## 4. UX Principles & Heuristics
1. **Visibility of System Status:** Continuous progress indicators (steppers) in all multi-step flows.
2. **Reduced Cognitive Load:** Fragmenting long forms into logical, sequential steps (Wizards).
3. **Consistency & Standards:** Unified navigation system replacing the legacy double-bar architecture.
4. **Error Prevention & Recovery:** Real-time validation and descriptive, actionable error messaging.
5. **Accessibility (WCAG AA):** 4.5:1 contrast ratios, explicit labels, and 44x44px minimum touch targets.

---

## 5. Key User Flows
### A. Authentication & Onboarding
- Split-screen login layout with clear, tabbed authentication methods (User vs. ID).
- Personalized dashboard with quick-access "task-based" cards.

### B. Exam Pre-Registration (5-Step Wizard)
1. **Exam Selection:** Categorized catalog (Media vs. Superior) with status badges.
2. **Personal Data:** Structured contact and residence grouping.
3. **Academic Info:** Educational history with SNES verification cues.
4. **Location Selection:** Sede and municipality selection with map-based context.
5. **Payment & Confirmation:** Summary of data + integrated payment options (PSE / Printed Voucher).

### C. Post-Registration Management
- **Movement Tracking:** Clean financial history with payment status chips.
- **Citation Retrieval:** High-hierarchy card layout for exam date, time, and location.
- **Help Center:** Visual resource library replacing legacy data tables.

---

## 6. Technical & Institutional Constraints
- **GOV.CO Compliance:** Mandatory inclusion of the official government header and footer.
- **Responsive Design:** Optimized for Desktop (1280px) and Mobile (375px) viewports.
- **Language:** All UI content must be in Colombian Spanish.