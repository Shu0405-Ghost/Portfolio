import { createIcons, icons } from 'lucide';
import './style.css';
import portrait from '../assets/pic.png';

const skills = [
  ['Technical', 'HTML/CSS, basic JavaScript, basic PHP, basic Python, MySQL, basic networking, troubleshooting, data entry and data management.'],
  ['Tools', 'Microsoft Word, Excel, PowerPoint, Google Workspace, Canva, Visual Studio Code, GitHub and basic Figma.'],
  ['Professional', 'Communication, teamwork, problem-solving, time management, adaptability, willingness to learn and attention to detail.'],
];

const projects = [
  { number: '01', title: 'ID Management System', description: 'A student-facing system for applying for and managing official school IDs.', tags: ['PHP', 'MySQL', 'CRUD'] },
  { number: '02', title: 'The Daily Grind', description: 'A responsive e-commerce website for a coffee brand, built to make browsing and shopping simple.', tags: ['PHP', 'E-commerce', 'Responsive UI'] },
  { number: '03', title: 'FlexSpace', description: 'A modern coworking space booking platform for Iloilo City, connecting users with available workspaces for browsing, booking and management.', tags: ['Booking Platform', 'Responsive UI', 'Product Design'] },
];

const navItems = [
  ['about', 'About', 'user-round'],
  ['skills', 'Skills', 'sparkles'],
  ['projects', 'Projects', 'layers-3'],
  ['experience', 'Journey', 'graduation-cap'],
  ['seminars', 'Training', 'award'],
  ['contact', 'Contact', 'send'],
];

document.querySelector('#app').innerHTML = `
  <header class="mobile-header">
    <a class="brand" href="#about"><span>JB</span> Jo Vincent</a>
    <button class="icon-button menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><i data-lucide="menu"></i></button>
  </header>
  <div class="sidebar-backdrop" aria-hidden="true"></div>
  <aside class="sidebar" aria-label="Main navigation">
    <div class="sidebar-top">
      <a class="brand" href="#about"><span>JB</span><strong>Jo Vincent<br />Beldad</strong></a>
      <button class="icon-button close-button" type="button" aria-label="Close navigation"><i data-lucide="x"></i></button>
    </div>
    <img class="profile-photo" src="${portrait}" alt="Portrait of Jo Vincent Beldad" />
    <p class="eyebrow">BSIT Student · OJT Applicant</p>
    <nav>${navItems.map(([id, label, icon]) => `<a class="nav-link" href="#${id}" data-section="${id}"><i data-lucide="${icon}"></i><span>${label}</span></a>`).join('')}</nav>
    <div class="sidebar-footer">
      <span>Open to OJT opportunities</span>
      <a class="sidebar-resume-link" href="/assets/Beldad_Resume.docx" download="Jo-Vincent-Beldad-Resume.docx"><i data-lucide="download"></i> Download resume</a>
      <div class="sidebar-socials">
        <a href="https://github.com/Shu0405-Ghost" target="_blank" rel="noopener noreferrer"><i data-lucide="github"></i> GitHub</a>
        <a href="https://jvbb.vercel.app" target="_blank" rel="noopener noreferrer"><i data-lucide="globe"></i> Vercel</a>
      </div>
    </div>
  </aside>
  <main>
    <section id="about" class="hero section">
      <div class="hero-copy">
        <p class="eyebrow accent">BSIT Student · OJT Applicant</p>
        <h1>Ready to learn, contribute, and grow in <em>technology.</em></h1>
        <p class="hero-lead">BS Information Technology student eager to secure an On-the-Job Training position to apply technical expertise, collaborate on development initiatives, and gain hands-on operational experience.</p>
        <div class="hero-actions"><a class="button button-primary" href="/assets/Beldad_Resume.docx" download="Jo-Vincent-Beldad-Resume.docx"><i data-lucide="download"></i> Download resume</a><a class="text-link connect-link" href="#contact">Let’s connect <i data-lucide="arrow-up-right"></i></a></div>
      </div>
      <div class="scroll-cue"><span>01</span><div></div><span>Scroll to explore</span></div>
    </section>
    <section id="skills" class="section">
      <div class="section-heading"><div><p class="eyebrow accent">IT skills</p><h2>A practical foundation<br /><em>for OJT.</em></h2></div><p class="section-intro">Technical knowledge, everyday productivity tools, and professional qualities I bring to a collaborative team.</p></div>
      <div class="skills-grid">${skills.map(([title, desc], i) => `<article class="skill-card"><span class="card-number">0${i + 1}</span><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>
    </section>
    <section id="projects" class="section projects-section">
      <div class="section-heading"><div><p class="eyebrow accent">Academic projects</p><h2>Building by<br /><em>doing.</em></h2></div><p class="section-intro">School projects where I practiced web development, responsive design, and creating useful digital systems.</p></div>
      <div class="projects-list">${projects.map(({ number, title, description, tags }) => `<article class="project-card"><span class="project-number">${number}</span><div class="project-content"><h3>${title}</h3><p>${description}</p><div class="tags">${tags.map(tag => `<span>${tag}</span>`).join('')}</div></div><i class="project-arrow" data-lucide="arrow-up-right"></i></article>`).join('')}</div>
    </section>
    <section id="experience" class="section journey-section">
      <div class="section-heading"><div><p class="eyebrow accent">Education & activities</p><h2>Learning by<br /><em>doing.</em></h2></div><p class="section-intro">An IT education supported by school activities, seminars, and team-based projects.</p></div>
      <div class="timeline">
        <article class="timeline-item current"><span class="timeline-dot"></span><div><span class="timeline-date">2023 — Present · Expected 2027</span><h3>Bachelor of Science in Information Technology</h3><p>PHINMA University of Iloilo</p></div></article>
        <article class="timeline-item"><span class="timeline-dot"></span><div><span class="timeline-date">2024 — Present</span><h3>Member · UI Programming Circle</h3><p>Participating in IT activities, seminars, and team-based projects.</p></div></article>
        <article class="timeline-item"><span class="timeline-dot"></span><div><span class="timeline-date">2022 — 2023</span><h3>Senior High School</h3><p>Balasan National High School</p></div></article>
        <article class="timeline-item"><span class="timeline-dot"></span><div><span class="timeline-date">2011 — 2017</span><h3>Elementary</h3><p>Batad Central School</p></div></article>
      </div>
    </section>
    <section id="seminars" class="section seminars-section">
      <div class="section-heading"><div><p class="eyebrow accent">Seminars & trainings</p><h2>Always<br /><em>learning.</em></h2></div><p class="section-intro">Recent training in web development, cybersecurity, productivity, analytics, AI, and professional development.</p></div>
      <div class="projects-list">
        <article class="project-card"><span class="project-number">2026</span><div class="project-content"><h3>Technical & digital training</h3><p>Basic Web Development Training · Introduction to Cybersecurity · Microsoft Excel Fundamentals · Data Analytics Essentials — Cisco Networking Academy.</p></div></article>
        <article class="project-card"><span class="project-number">2026</span><div class="project-content"><h3>AI learning</h3><p>Apply AI: Analyze Customer Reviews and Introduction to Modern AI — DICT-ITU DTC Initiative.</p></div></article>
        <article class="project-card"><span class="project-number">2025</span><div class="project-content"><h3>Student leadership</h3><p>Student Leadership and Professional Development Seminar.</p></div></article>
      </div>
    </section>
    <section id="contact" class="section contact-section">
      <div class="contact-panel"><div><p class="eyebrow accent">OJT opportunities</p><h2>Let’s start<br /><em>a conversation.</em></h2><p class="contact-copy">I’m eager to join a team where I can apply my IT foundation, contribute to development initiatives, and gain hands-on operational experience.</p><a class="button button-light" href="https://mail.google.com/mail/?view=cm&fs=1&to=vencbeldadjo@outlook.com" target="_blank" rel="noreferrer">Send me an email <i data-lucide="arrow-up-right"></i></a></div><div class="contact-details"><div><span>Email</span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=vencbeldadjo@outlook.com" target="_blank" rel="noreferrer">vencbeldadjo@outlook.com</a><a href="https://mail.google.com/mail/?view=cm&fs=1&to=Jobe.beldad.ui@phinmaed.com" target="_blank" rel="noreferrer">Jobe.beldad.ui@phinmaed.com</a></div><div><span>Based in</span><p>Molo, Iloilo, Philippines<br />Poblacion, Batad, Iloilo</p></div><div><span>Phone</span><a href="tel:09123456789">09123456789</a><a href="tel:09673060018">09673060018</a></div></div></div>
      <footer><span>© 2026 Jo Vincent Beldad</span><span>Designed & built with intention.</span></footer>
    </section>
  </main>
  <button class="chat-toggle" type="button" aria-label="Open portfolio assistant" aria-expanded="false"><i data-lucide="message-circle"></i></button>
  <section class="chat-panel" aria-label="Portfolio assistant" hidden><div class="chat-header"><div><i data-lucide="bot"></i><strong>Jo’s assistant</strong></div><button class="icon-button chat-close" type="button" aria-label="Close assistant"><i data-lucide="x"></i></button></div><div class="chat-messages" aria-live="polite"></div><form class="chat-form"><input aria-label="Ask a question" placeholder="Ask about Jo’s skills..." /><button type="submit" aria-label="Send message"><i data-lucide="arrow-up"></i></button></form></section>
`;

createIcons({ icons });

const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.sidebar-backdrop');
const menuButton = document.querySelector('.menu-button');
const setMenu = (open) => {
  sidebar.classList.toggle('open', open);
  backdrop.classList.toggle('visible', open);
  menuButton.setAttribute('aria-expanded', String(open));
};
menuButton.addEventListener('click', () => setMenu(true));
document.querySelector('.close-button').addEventListener('click', () => setMenu(false));
backdrop.addEventListener('click', () => setMenu(false));
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => setMenu(false)));

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-link');
document.querySelector('.connect-link').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', '#contact');
});
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) links.forEach((link) => link.classList.toggle('active', link.dataset.section === entry.target.id));
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));

const chatPanel = document.querySelector('.chat-panel');
const chatToggle = document.querySelector('.chat-toggle');
const messages = document.querySelector('.chat-messages');
const input = document.querySelector('.chat-form input');
const addMessage = (message, sender = 'bot') => {
  const item = document.createElement('p');
  item.className = `chat-message ${sender}`;
  item.textContent = message;
  messages.append(item);
  messages.scrollTop = messages.scrollHeight;
};
const openChat = (open) => {
  chatPanel.hidden = !open;
  chatToggle.setAttribute('aria-expanded', String(open));
  if (open && !messages.children.length) {
    addMessage('Hi! Ask me about Jo’s skills, projects, or OJT availability.');
    input.focus();
  }
};
chatToggle.addEventListener('click', () => openChat(chatPanel.hidden));
document.querySelector('.chat-close').addEventListener('click', () => openChat(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
    openChat(false);
  }
});
document.querySelector('.chat-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;
  addMessage(question, 'user');
  input.value = '';
  const lower = question.toLowerCase();
  const answer = lower.includes('project') ? 'Jo has worked on an ID Management System, The Daily Grind e-commerce site, and FlexSpace, a coworking space booking platform.' : lower.includes('skill') || lower.includes('learn') ? 'Jo’s foundation includes HTML/CSS, basic JavaScript, PHP, Python, MySQL, networking, troubleshooting, data management, productivity tools, and teamwork.' : lower.includes('phone') || lower.includes('telephone') || lower.includes('mobile') || lower.includes('call') ? 'Jo’s phone numbers are 09123456789 and 09673060018.' : lower.includes('contact') || lower.includes('email') || lower.includes('ojt') ? 'Jo is open to OJT opportunities. Email vencbeldadjo@outlook.com to start a conversation.' : 'I can share details about Jo’s skills, projects, education, seminars, and OJT availability.';
  window.setTimeout(() => addMessage(answer), 350);
});
