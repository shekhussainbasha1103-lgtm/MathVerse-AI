# MathVerse AI — Architecture

## Product goals
1. A single TypeScript product for web, Android and iOS.
2. A geometry-first visual learning experience.
3. A modular math engine so arithmetic, symbolic algebra, graphing and geometry can evolve independently.
4. Secure backend services for account data and AI integrations.

## Current Stage 1 architecture

- Client: Expo + React Native + TypeScript
- Cross-platform vector graphics: react-native-svg
- Client expression evaluation: Math.js
- Optional symbolic API: FastAPI + SymPy
- Local state: React state (Stage 1)
- Persistent storage/authentication: not yet implemented

## Target production architecture

```text
Web / Android / iOS
        |
        v
Expo Client + Design System
        |
        +-- Geometry Engine (2D construction primitives)
        +-- Numeric Engine (safe expression evaluation)
        +-- Symbolic Math API (SymPy)
        +-- Graphing Engine (2D / 3D)
        +-- Learning & Assessment
        +-- AI Orchestration Service
        |
        v
FastAPI gateway / authentication / rate limits
        |
        +-- PostgreSQL (users, projects, progress)
        +-- Object storage (user exports and uploads)
        +-- AI provider adapter (server-side secrets only)
        +-- Telemetry / audit logs
```

## Suggested data model

- User: id, email, display_name, created_at
- Project: id, owner_id, title, kind, document_json, created_at, updated_at
- ConstructionStep: id, project_id, sequence, operation_json
- LearningProgress: id, owner_id, topic_id, mastery_score, updated_at
- SavedFormula: id, owner_id, title, expression, subject
- PracticeAttempt: id, owner_id, question_id, answer, correctness, created_at

## Core engineering principles

- Keep math operations deterministic and testable.
- Never execute arbitrary user-provided code.
- Validate and bound expressions before symbolic processing.
- Keep AI provider keys on the server.
- Use accessibility labels and keyboard navigation.
- Make geometry documents versioned and exportable.
- Add automated unit tests before public release.
