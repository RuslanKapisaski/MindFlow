# Descrition

MindFlow is a full-stack blogging platform where users can share their thoughts, explore posts from others, and connect by following their favorite blogs.

# Core Features

👤 Authentication & Security
Register and log in securely with hashed passwords and token-based sessions.

📝 Create, Edit & Delete Blogs
Logged-in users can manage their own blogs — full CRUD access only for owners.

❤️ Follow Blogs
Explore and follow other users’ blogs to keep up with the latest posts.

📄 Profile Page
A personalized dashboard with two sections:

Your Created Blogs

Your Followed Blogs

🔒 Smart Access Control
Route guards ensure that only authenticated users can create or modify blogs, keeping the app safe and consistent.

# Development steps

---

### 1. Initialize project

- [x] Initialize project 'npm i --yes'
  - [x] Change module system
  - [x] Add start file (in src folder)
  - [x] Add dev script ('node --watch src/index.js')
  - [x] Config debbuger
  - [x] Add resources

### 2. Express

- [x] Install express 'npm i express'
- [x] Initialize express server
- [x] Setup static middleware
- [x] Add body parser
- [x] Add home controller
- [x] Add route file
- [x] Add error controller
### 3. Handlebars

- [x] Install handlebars 'npm i express-handlebars'
- [x] Config handlebars engine
- [x] Use handlebars engine
- [x] Config handlebars file extension
- [x] Set views folder
- [x] Add home view
- [x] Render home view without layout
- [x] Fix assests path
- [x] Add layout
- [x] Config handlebars to work with mongoose documents (no need to lean) 'runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault:true }'
