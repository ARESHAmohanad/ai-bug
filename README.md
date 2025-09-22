# BugHunter - Pentest & Bug Bounty Platform

A comprehensive web platform for ethical hacking and bug bounty programs, similar to HackerOne. This platform connects security researchers with organizations to discover and report vulnerabilities in exchange for rewards.

## 🌟 Features

### 🏠 Homepage
- Modern hero section with call-to-action
- Feature highlights and platform statistics
- Featured bug bounty programs showcase
- Responsive design with mobile navigation

### 🔐 Authentication System
- **Login Page** with demo functionality
- **Registration Page** with form validation
- Password strength checker
- Social login options (Google, GitHub)
- Session management with localStorage

### 🎯 Bug Bounty Programs
- Browse available security programs
- Advanced filtering (category, reward range, status)
- Program details with scope and rewards
- Grid and list view options
- Search functionality

### 📊 User Dashboard
- Personal statistics overview
- Report management interface
- Recent activity tracking
- Profile management
- Quick action buttons

### 🏆 Leaderboard
- Top ethical hackers ranking
- Podium display for top 3 users
- Detailed statistics (reputation, earnings, success rate)
- Time-based filtering (all-time, yearly, monthly, weekly)
- Your current ranking display

### 📋 Public Reports
- Disclosed vulnerability reports
- Detailed report cards with CVE information
- Filtering by severity, category, and program
- Researcher attribution
- Technical tags and read time estimates

## 🚀 Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6
- **Storage**: LocalStorage for demo authentication
- **Architecture**: Responsive, mobile-first design

## 📁 Project Structure

```
ai-bug/
├── index.html              # Homepage with hero section and features
├── login.html              # User login page with demo credentials
├── register.html           # User registration with validation
├── programs.html           # Bug bounty programs listing
├── dashboard.html          # User dashboard and management
├── leaderboard.html        # Top hackers leaderboard
├── reports.html            # Public vulnerability reports
├── css/
│   └── style.css          # Main stylesheet with responsive design
├── js/
│   └── script.js          # Core JavaScript functionality
└── README.md              # Project documentation
```

## 🎮 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for full functionality)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ARESHAmohanad/ai-bug.git
   cd ai-bug
   ```

2. **Start a local server** (recommended)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

### Demo Credentials

For testing the login functionality:
- **Email**: `demo@example.com`
- **Password**: Any password (this is a demo)

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#6366f1 to #4f46e5)
- **Secondary**: Green (#10b981)
- **Accent**: Amber (#f59e0b)
- **Danger**: Red (#ef4444)

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet) and 480px (mobile)
- Collapsible navigation menu
- Adaptive grid layouts

### UI Components
- Modern card-based layouts
- Gradient backgrounds
- Smooth transitions and hover effects
- Badge system for status indicators
- Interactive forms with validation
- Modal dialogs
- Progress bars and statistics

## 🔧 Key Functionality

### Authentication System
```javascript
// Demo login with mock API
Auth.login(userData);
Auth.logout();
Auth.isLoggedIn();
```

### Search & Filtering
- Real-time search across programs and reports
- Multi-criteria filtering
- Sort options for different views

### Form Validation
- Email format validation
- Password strength checking
- Required field validation
- Real-time error messages

### Notifications
- Success/error message system
- Auto-dismissing alerts
- User feedback for actions

## 📱 Pages Overview

1. **Homepage** (`index.html`)
   - Hero section with value proposition
   - Feature cards explaining benefits
   - Statistics showcase
   - Featured programs preview

2. **Login** (`login.html`)
   - Clean authentication form
   - Social login options
   - Demo credentials info
   - Responsive side panel with benefits

3. **Registration** (`register.html`)
   - Comprehensive signup form
   - Password strength indicator
   - Experience level selection
   - Interest area checkboxes

4. **Programs** (`programs.html`)
   - Program listing with filtering
   - Grid/list view toggle
   - Search functionality
   - Detailed program cards

5. **Dashboard** (`dashboard.html`)
   - User statistics overview
   - Recent reports section
   - Quick action buttons
   - Sidebar navigation

6. **Leaderboard** (`leaderboard.html`)
   - Top 3 podium display
   - Comprehensive ranking table
   - Time-based filters
   - Personal ranking card

7. **Reports** (`reports.html`)
   - Public vulnerability disclosures
   - Detailed report cards
   - CVE tracking
   - Advanced filtering options

## 🎯 Features in Detail

### Security Focus
- Demonstrates security best practices
- Educational vulnerability examples
- Responsible disclosure information
- CVE tracking and attribution

### User Experience
- Intuitive navigation
- Clear call-to-action buttons
- Consistent design language
- Loading states and feedback

### Performance
- Optimized CSS with variables
- Efficient JavaScript code
- Minimal dependencies
- Fast loading times

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

This is a demonstration project. For improvements or suggestions, please create an issue or pull request.

## 📞 Support

For questions or support, please refer to the repository issues section.