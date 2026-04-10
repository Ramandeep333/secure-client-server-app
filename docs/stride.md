| Threat | Description | Impact | Mitigation |
|--------|------------|--------|------------|
| Spoofing | Fake login attempts | Unauthorized access | JWT authentication |
| Tampering | Modify API requests | Data corruption | Input validation |
| Repudiation | Deny actions | No audit trail | Logging (morgan) |
| Information Disclosure | Data leak | Sensitive data exposed | JWT + encryption |
| Denial of Service | Flood requests | Server crash | Rate limiting |
| Elevation of Privilege | Become admin | Full system access | Role-based access |