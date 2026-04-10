# Secure Client–Server Application

## Project Overview
This project is a Secure Student Portal System developed for INFO2050 – Systems Development: Computer Security.

The application demonstrates a secure client-server architecture with multiple security controls based on OWASP Top 10 and STRIDE threat modeling.

---

## Architecture
Frontend (React)
↓
Backend (Node.js / Express)
↓
Security Middleware (JWT, Validation, Logging, Rate Limiting)
↓
Database (MongoDB)

---

## Features

### Authentication
- User login with JWT token
- Token-based session handling

### Authorization
- Role-based access (User / Admin)
- Protected routes for admin

### Search Function
- API-based search functionality with validation

### File Upload
- Secure file upload using multer
- File size and type restrictions

### Security Features
- Input validation (express-validator)
- Logging (morgan)
- Rate limiting (express-rate-limit)
- JWT authentication

---

## Security Implementation

### OWASP Top 10 Covered
- A01 Broken Access Control
- A03 Injection
- A05 Security Misconfiguration
- A07 Authentication Failures
- A09 Logging & Monitoring

### STRIDE Threat Model
- Spoofing → JWT authentication
- Tampering → Input validation
- Repudiation → Logging
- Information Disclosure → Authorization
- Denial of Service → Rate limiting
- Elevation of Privilege → Role-based access

---

## Project Structure
