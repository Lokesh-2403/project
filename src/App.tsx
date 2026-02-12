import { Shield, Github, Linkedin, Mail, Code, Terminal, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800 sticky top-0 bg-gray-950/95 backdrop-blur-sm z-10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">Lokesh Babu</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#labs" className="hover:text-cyan-400 transition-colors">Labs</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <img
                src="/profile.png"
                alt="Lokesh Babu"
                className="w-40 h-40 rounded-full border-2 border-cyan-400/50 object-cover mb-6"
              />
              <div className="px-4 py-1 border border-cyan-400/30 rounded-full text-cyan-400 text-sm">
                Available for Entry-Level Opportunities
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Lokesh Babu
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">
                Beginner Cybersecurity Analyst
              </h2>
              <p className="text-xl text-gray-400">
                Learning | Practicing | Building Security Skills
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            About Me
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              I am a beginner cybersecurity enthusiast currently pursuing a Bachelor of Engineering.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am learning core cybersecurity fundamentals including networking, Linux, and security tools.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I am actively building hands-on projects and practicing in labs to strengthen my real-world security skills.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to start my career as a <span className="text-cyan-400 font-semibold">Junior Cybersecurity Analyst</span>.
            </p>
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard title="Networking Basics" description="TCP/IP, DNS, HTTP" />
            <SkillCard title="Linux Basics" description="Command line, file systems, permissions" />
            <SkillCard title="Python Basics for Security" description="Scripting and automation fundamentals" />
            <SkillCard title="Cybersecurity Fundamentals" description="Security principles and best practices" />
            <SkillCard title="Threat Awareness" description="Security concepts and risk understanding" />
            <SkillCard
              title="Currently Learning"
              description="SOC Operations, SIEM Basics"
              highlight
            />
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Projects
          </h2>
          <div className="space-y-6">
            <ProjectCard
              title="Network Scanning using Nmap"
              description="Performing network reconnaissance and basic vulnerability identification using Nmap."
              status="In Progress"
              icon={<Terminal className="w-6 h-6" />}
            />
            <ProjectCard
              title="Log Analysis using Splunk"
              description="Analyzing security logs to detect suspicious activity."
              status="Planned"
              icon={<Code className="w-6 h-6" />}
            />
            <ProjectCard
              title="Linux Security Hardening"
              description="Implementing basic security configurations on Linux systems."
              status="Planned"
              icon={<Shield className="w-6 h-6" />}
            />
          </div>
        </section>

        <section id="labs" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Labs & Practice
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <div className="space-y-4">
              <LabItem
                name="TryHackMe"
                description="Beginner & SOC paths"
              />
              <LabItem
                name="Hack The Box Academy"
                description="Structured learning modules"
              />
              <LabItem
                name="OverTheWire Linux Wargames"
                description="Command line and Linux fundamentals"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">
            Contact
          </h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Open to learning opportunities, internships, and entry-level cybersecurity roles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ContactButton
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
                href="https://github.com/Lokesh-2403"
              />
              <ContactButton
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/lokesh-adusumalli-38646b329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              />
              <ContactButton
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                href="mailto:adusumalli3818@gmail.com"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400 text-sm">
          Built and maintained by Lokesh Babu – Cybersecurity Portfolio
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, description, highlight = false }: { title: string; description: string; highlight?: boolean }) {
  return (
    <div className={`p-6 rounded-lg border transition-all ${
      highlight
        ? 'bg-cyan-950/30 border-cyan-400/50'
        : 'bg-gray-900 border-gray-800 hover:border-cyan-400/30'
    }`}>
      <h3 className={`font-semibold mb-2 ${highlight ? 'text-cyan-400' : 'text-gray-100'}`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, status, icon }: { title: string; description: string; status: string; icon: React.ReactNode }) {
  const isInProgress = status === 'In Progress';

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-400/30 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-cyan-950/30 rounded-lg text-cyan-400">
          {icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          isInProgress
            ? 'bg-cyan-950/50 text-cyan-400 border border-cyan-400/30'
            : 'bg-gray-800 text-gray-400'
        }`}>
          {status}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function LabItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors">
      <Award className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold text-gray-100 mb-1">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ContactButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-cyan-950/50 border border-gray-700 hover:border-cyan-400/50 rounded-lg transition-all text-gray-300 hover:text-cyan-400"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
}

export default App;
