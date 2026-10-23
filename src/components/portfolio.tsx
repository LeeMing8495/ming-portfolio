'use client';

import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Bot, Check,
  Code2, Database, Github, Globe2, GraduationCap,
  Layers3, Linkedin, Mail, MapPin, Menu, MonitorSmartphone,
  ShoppingBag, ShoppingCart, Smartphone, Sparkles, X,
} from 'lucide-react';

const projects = [
  {
    id: '01',
    eyebrow: 'WEB APPLICATION · E-COMMERCE',
    title: 'EShop — Online Shopping Platform',
    summary: 'An online storefront for physical and software products, designed around product discovery, purchasing, and knowledge sharing.',
    features: ['Product catalog', 'Cart & direct purchase flows', 'Community Q&A and discussions'],
    icon: ShoppingBag,
    className: 'shop',
  },
  {
    id: '02',
    eyebrow: 'ANDROID · MOBILE COMMERCE',
    title: 'EShop — Android Application',
    summary: 'A mobile shopping experience that brings product browsing and purchasing into an Android application.',
    features: ['Mobile-first product browsing', 'Shopping workflows', 'Connected EShop experience'],
    icon: Smartphone,
    className: 'mobile',
  },
  {
    id: '03',
    eyebrow: 'AI ENGINEERING · LLM AGENTS',
    title: 'Task-Specific AI Agents',
    summary: 'Exploring intelligent agents that use large language models via OpenRouter to carry out focused tasks and workflows.',
    features: ['LLM service integration', 'Task-oriented agent design', 'AI workflow automation'],
    icon: Bot,
    className: 'ai',
  },
];

const experience = [
  {
    date: '2021 — 2025',
    title: 'Senior Software Engineer',
    company: 'Motorola Solutions Malaysia Sdn. Bhd.',
    description: 'Led software development projects and teams, built cloud-based applications, and worked with Chinese-speaking customers.',
  },
  {
    date: '2017 — 2021',
    title: 'Software Developer',
    company: 'Renesas Semiconductor (Malaysia) Sdn. Bhd.',
    description: 'Developed enterprise software and web applications, maintained databases, and supported customers.',
  },
];

function ProjectArt({ variant }: { variant: string }) {
  if (variant === 'shop') {
    return (
      <div className="art art-shop" aria-hidden="true">
        <div className="browser-frame">
          <div className="browser-top"><span /><span /><span /><div className="browser-url">eshop / discover</div></div>
          <div className="mock-web">
            <div className="mock-sidebar"><div className="mock-logo">e<span>shop</span></div><div className="mock-side-active">Discover</div><div>Categories</div><div>Community</div><div>Saved items</div></div>
            <div className="mock-main"><div className="mock-heading">Find your next favorite.</div><div className="mock-subheading">Thoughtful products for work and life.</div><div className="mock-product-grid"><div className="mock-product p1"><div className="product-object headphones"><span /></div><b>Wireless Audio</b><small>Explore collection</small></div><div className="mock-product p2"><div className="product-object cube">◈</div><b>Digital Tools</b><small>Explore collection</small></div></div></div>
          </div>
        </div>
        <div className="art-floating shop-floating"><ShoppingCart size={15} /> Add to cart <Check size={14} /></div>
      </div>
    );
  }
  if (variant === 'mobile') {
    return (
      <div className="art art-mobile" aria-hidden="true">
        <div className="phone phone-back"><div className="phone-notch" /><div className="phone-app-header">Discover</div><div className="phone-banner-mini" /><div className="phone-line" /><div className="phone-line short" /><div className="phone-tiles"><i /><i /></div></div>
        <div className="phone phone-front"><div className="phone-notch" /><div className="phone-topline">9:41 <span>●●●</span></div><div className="phone-title">Discover <span>⌕</span></div><div className="phone-subtitle">Find something you'll love.</div><div className="phone-banner"><span>NEW ARRIVALS</span><strong>Designed for<br />every day.</strong><b>Shop now →</b></div><div className="phone-section">Popular picks <span>See all →</span></div><div className="phone-cards"><div><i className="circle-object"/><span>Essential gear</span></div><div><i className="square-object"/><span>Digital tools</span></div></div><div className="phone-nav">⌂ <span>⌕</span> ♡ <span>▣</span></div></div>
      </div>
    );
  }
  return (
    <div className="art art-ai" aria-hidden="true">
      <div className="agent-window"><div className="agent-top"><span className="agent-avatar"><Sparkles size={14}/></span><div><b>AI Workflow Agent</b><small>Powered by LLMs</small></div><span className="agent-online">● Active</span></div><div className="agent-message human">Summarize the main action items from this content.</div><div className="agent-message machine"><Sparkles size={15}/><div><b>Here’s the breakdown:</b><p><Check size={12}/> Identify key requirements</p><p><Check size={12}/> Organize next steps</p><p><Check size={12}/> Prepare a concise summary</p></div></div><div className="agent-input">Ask the agent anything… <ArrowUpRight size={16}/></div></div><div className="ai-orbit orbit-one"/><div className="ai-orbit orbit-two"/>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const jump = () => setMenuOpen(false);


  return (
    <div className="site-shell">
      <header className="topbar"><div className="container nav-inner"><a className="wordmark" href="#home" onClick={jump}>ming<span>.</span><span className="wordmark-small">/ portfolio</span></a><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation"><a href="#about" onClick={jump}>About</a><a href="#work" onClick={jump}>Projects</a><a href="#experience" onClick={jump}>Experience</a><a href="#contact" onClick={jump}>Contact</a></nav><a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a><button className="mobile-menu" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button></div></header>
      <main>
        <section id="home" className="hero container"><div className="hero-copy"><div className="availability"><span className="pulse-dot"/> OPEN TO MEANINGFUL COLLABORATIONS</div><p className="intro-line">HELLO, WORLD. I'M LEE MING <span>↗</span></p><h1>Building software<br/>that <span className="accent-serif">makes sense.</span></h1><p className="hero-description">Software engineer working across <strong>web platforms, Android applications, and AI agents.</strong> I turn complex ideas into intuitive, purposeful digital experiences.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button button-text" href="#about">More about me <ArrowRight size={17}/></a></div><div className="hero-bottom"><div className="hero-stat"><strong>2017</strong><span>ENGINEERING CAREER STARTED</span></div><div className="hero-stat"><strong>03</strong><span>FEATURED PROJECT AREAS</span></div><div className="hero-location"><MapPin size={15}/> BASED IN YANGON, MYANMAR</div></div></div><div className="hero-visual" aria-label="Abstract illustration of software engineering"><div className="visual-grid"/><div className="visual-circle circ-a"/><div className="visual-circle circ-b"/><div className="hero-main-card"><div className="hero-code-head"><span className="code-pips"><i/><i/><i/></span><span>portfolio.tsx</span><Code2 size={15}/></div><div className="code-body"><p><span className="code-purple">const</span> engineer = {'{'}</p><p className="indent">name: <span className="code-green">'Lee Ming'</span>,</p><p className="indent">focus: [</p><p className="indent2"><span className="code-green">'Web Development'</span>,</p><p className="indent2"><span className="code-green">'Android Apps'</span>,</p><p className="indent2"><span className="code-green">'AI Agents'</span></p><p className="indent">],</p><p className="indent">mindset: <span className="code-green">'Keep building.'</span></p><p>{'}'};</p><p className="code-comment">// Build. Learn. Improve. Repeat.</p></div></div><div className="visual-label label-top"><div className="label-icon"><Layers3 size={17}/></div><div><strong>Product-minded</strong><span>Engineering approach</span></div></div><div className="visual-label label-bottom"><div className="label-icon violet"><Bot size={19}/></div><div><strong>AI + Software</strong><span>Connecting possibilities</span></div></div></div></section>
        <div className="marquee-band"><div className="container marquee-inner"><span><Code2 size={17}/> FULL-STACK DEVELOPMENT</span><i>✳</i><span><MonitorSmartphone size={17}/> MOBILE EXPERIENCES</span><i>✳</i><span><Sparkles size={17}/> AI-POWERED WORKFLOWS</span><i>✳</i><span><Database size={17}/> SOFTWARE SYSTEMS</span></div></div>
        <section id="about" className="section container about-section"><div className="section-intro"><div className="section-label"><span>01 / ABOUT</span></div><h2>Curious by nature.<br/><em>Engineer by craft.</em></h2></div><div className="about-content"><p className="large-paragraph">I’m <strong>Lee Ming</strong>, a software engineer with a background in enterprise applications, cloud-based systems, and team leadership.</p><p>My journey began with software and web development, grew into leading engineering projects, and now includes building AI-powered agents. I enjoy working across the stack and learning how new technologies can solve everyday problems.</p><p>Originally from Penang, Malaysia, I’m now based in Yangon, Myanmar. I hold both a Bachelor’s and a Master’s degree in Computer Science from Universiti Sains Malaysia.</p><div className="about-chips"><span><Globe2 size={15}/> English & Chinese</span><span><GraduationCap size={15}/> BSc & MSc in Computer Science</span><span><MapPin size={15}/> Yangon, Myanmar</span></div></div></section>
        <section id="work" className="section projects-section"><div className="container"><div className="section-label"><span>02 / SELECTED WORK</span></div><div className="section-heading-row"><h2>Things I've <em>built.</em></h2><p>A selection of the projects and technologies shaping my engineering journey.</p></div><div className="projects-list">{projects.map((project) => <article className="project-card" key={project.id}><div className="project-copy"><span className="project-index">/ {project.id} <span>—</span> {project.eyebrow}</span><div className="project-icon"><project.icon size={21}/></div><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul><span className="project-footnote">PROJECT OVERVIEW <ArrowUpRight size={16}/></span></div><ProjectArt variant={project.className}/></article>)}</div><p className="project-disclaimer">Project visuals are illustrative concepts, not screenshots of deployed products. Live links can be added when available.</p></div></section>
        <section id="experience" className="section container experience-section"><div className="experience-intro"><div className="section-label"><span>03 / MY JOURNEY</span></div><h2>Experience that<br/><em>shapes the work.</em></h2><p>From writing code to leading projects, every chapter has strengthened the way I think, collaborate, and build.</p><div className="education-card"><GraduationCap size={20}/><div><b>Universiti Sains Malaysia</b><span>Master of Computer Science · 2025</span><span>Bachelor of Computer Science · 2017</span></div></div></div><div className="timeline">{experience.map((job) => <div className="timeline-entry" key={job.company}><div className="timeline-dot"/><span className="timeline-date">{job.date}</span><h3>{job.title}</h3><h4>{job.company}</h4><p>{job.description}</p></div>)}</div></section>
        <section id="contact" className="contact-section"><div className="container contact-content"><div className="section-label section-label-light"><span>04 / GET IN TOUCH</span></div><div className="contact-grid"><div><h2>Have an idea?<br/><em>Let's build it.</em></h2><p>Interested in collaborating on a software product, exploring an AI-powered workflow, or simply discussing technology? I'd love to connect.</p><div className="contact-note">Contact links can be configured with your actual email and profiles.</div></div><div className="contact-links"><div className="contact-link disabled-contact"><span><Mail size={22}/> Email</span><span>leeming8495@gmail.com <ArrowUpRight size={18}/></span></div><div className="contact-link disabled-contact"><span><Github size={22}/> GitHub</span><span>https://github.com/LeeMing8495<ArrowUpRight size={18}/></span></div><div className="contact-link disabled-contact"><span><Linkedin size={22}/> LinkedIn</span><span>leeming8495(gonna to update) <ArrowUpRight size={18}/></span></div></div></div><div className="contact-footer"><span>© {new Date().getFullYear()} Lee Ming. Crafted with intention.</span><span>BUILT WITH NEXT.JS <span className="footer-spark">✳</span> & CURIOSITY</span><a href="#home">Back to top ↑</a></div></div></section>
      </main>
    </div>
  );
}
