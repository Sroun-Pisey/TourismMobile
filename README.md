# Tourism Mobile App (Ionic + Angular)

This repository contains the **Mobile Application** for the **Tourism System** project.  
The app is built using **Ionic + Angular** and consumes RESTful APIs from the Laravel backend.

---

## **Features**
- Mobile application for Android / iOS
- Connects with Laravel Backend API
- User authentication (Login / Register)
- View tourism posts and categories
- Customer profile management
- Modern UI with Ionic components

---

## **Requirements**
- Node.js (v16 or higher recommended)
- npm
- Ionic CLI
- Android Studio (for Android)
- Xcode (for iOS – macOS only)

Install Ionic CLI if not installed:
```bash
npm install -g @ionic/cli
```
Installation

Clone the repository:
```bash
git clone https://github.com/Sroun-Pisey/TourismMobile.git
```

Go to project folder:
```bash
cd TourimMobile
```

Install dependencies:
```bash
npm install
```

Run in browser:
```bash
ionic serve
```
Run on Android / iOS
Add platforms
```bash
ionic capacitor add android
ionic capacitor add ios
```
Build project
```bash
ionic build
```

Run on device / emulator
```bash
ionic capacitor run android
ionic capacitor run ios
```
Configuration

Make sure Laravel Backend API is running

Update API base URL in environment files if needed

src/environments/environment.ts

Technologies Used

Ionic 7

Angular

TypeScript

HTML, CSS / SCSS

Capacitor

RESTful API (Laravel Backend)

Git & GitHub

Related Repositories

Laravel Backend: https://github.com/username/laravel-backend
Angular Frontend: https://github.com/username/angular-frontend
Ionic Mobile App: https://github.com/username/ionic-mobile
