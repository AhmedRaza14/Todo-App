<!-- 
SYNC IMPACT REPORT:
- Version change: 1.0.0 → 2.1.0
- Modified principles: All 6 principles updated with specific values for Todo-Full-stack project
- Added sections: Technology stack constraints, security requirements, development workflow
- Removed sections: None
- Templates requiring updates: 
  - ✅ plan-template.md updated to reflect new principles
  - ✅ spec-template.md updated to reflect new requirements
  - ✅ tasks-template.md updated to reflect new task types
- Follow-up TODOs: None
-->
# Todo-Full-Stack Constitution

## Core Principles

### Tech Stack Constraint (NON-NEGOTIABLE)
Strict adherence to Next.js 16+ (App Router), FastAPI, SQLModel, Neon PostgreSQL, and OpenAI ChatKit with Agents SDK. All components must be compatible with this stack.
<!-- Rationale: Ensures consistency across the codebase and enables predictable development -->

### Security Through Authentication
Better Auth with JWT for stateless authentication between frontend and backend. All API endpoints must validate JWT tokens before processing requests.
<!-- Rationale: Maintains secure communication between client and server without server-side session storage -->

### User Data Isolation (NON-NEGOTIABLE)
Every database query must be filtered by the user_id extracted from the JWT. Cross-user data leakage is a critical failure.
<!-- Rationale: Protects user privacy and ensures data integrity across the application -->

### Asynchronous I/O Operations
All I/O operations must use async/await patterns to prevent blocking and ensure optimal performance.
<!-- Rationale: Maintains responsive application behavior and efficient resource utilization -->

### Test Coverage Standard
Maintain 90% test coverage for the API layer to ensure reliability and prevent regressions.
<!-- Rationale: High test coverage reduces production bugs and increases confidence in deployments -->

### Stateless Agent Pattern
The Chat API endpoint (POST /api/chat) must be completely stateless with all conversation history persisted to Neon PostgreSQL database, never held in server memory.
<!-- Rationale: Enables horizontal scaling and prevents data loss during server restarts -->

## Technology Standards and Security Requirements

### Technology Stack Requirements
- Frontend: Next.js 16+ with TypeScript, Tailwind CSS, and React 19+
- Backend: Python 3.11+ with FastAPI, SQLModel, and asyncpg
- Database: Neon Serverless PostgreSQL with Prisma client
- Authentication: Better Auth with shared JWT secret
- AI Integration: OpenAI ChatKit for frontend, OpenAI Agents SDK with Model Context Protocol (MCP) tools for backend processing
- Package Manager: npm for frontend, pip/poetry for backend

### Security Standards
- All API endpoints must validate JWT tokens from Better Auth
- Database queries must implement row-level security with user_id filtering
- Environment variables containing secrets must be stored in .env files and never committed to version control
- MCP tools must enforce user isolation when accessing data
- All HTTP requests should use HTTPS in production

### Performance Standards
- API endpoints should respond within 500ms for 95% of requests
- Database queries should execute within 100ms
- Frontend pages should achieve Lighthouse performance scores above 90
- Image assets should be optimized and served in modern formats (WebP, AVIF)

## Development Workflow and Quality Gates

### Development Process
- Strictly adhere to the Spec-Driven Development (SDD) lifecycle: Specify → Plan → Tasks → Implement
- No code is to be generated without a valid Task ID from the tasks.md file
- All features must have corresponding user stories and acceptance criteria in the spec
- Code reviews must verify compliance with all constitutional principles

### Testing Requirements
- Unit tests for all business logic components
- Integration tests for API endpoints and database operations
- 90% test coverage required for API layer before merging
- Contract tests for all API endpoints
- End-to-end tests for critical user journeys

### Code Quality Standards
- Prioritize performance over brevity
- Use consistent naming conventions across frontend and backend
- Implement proper error handling and logging
- Follow the principle of least privilege for all database queries
- Document complex logic with inline comments

## Governance

All pull requests and code reviews must verify compliance with these constitutional principles. Complexity must be justified with clear benefits that outweigh the maintenance overhead. Developers should refer to the `.specify/templates` directory for runtime development guidance and standard patterns.

This constitution supersedes all other development practices and must be referenced when making architectural decisions. Amendments require documentation in the form of an Architectural Decision Record (ADR), approval from the principal architect, and a migration plan if applicable.

**Version**: 2.1.0 | **Ratified**: 2026-01-10 | **Last Amended**: 2026-02-08
