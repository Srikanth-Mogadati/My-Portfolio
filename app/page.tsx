import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Shield, Code, Server, Network, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Srikanth Mogadati</div>
          <div className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-green-400 transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-green-400 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-green-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
            >
              Resume
            </Button>
            <MobileNav />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto py-20 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cybersecurity Specialist</h1>
              <p className="text-xl text-gray-300 mb-6">
                Protecting digital assets with expertise in endpoint security, IAM, and security operations.
              </p>
              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700">Contact Me</Button>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-green-500/30">
                <Image src="/images/profile.png" alt="Srikanth Mogadati" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-500/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-800/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Professional Summary</h3>
                <p className="text-gray-300 mb-6">
                  I am a cybersecurity specialist with a Master's in Cybersecurity and expertise in Python, Networking,
                  and shell scripting. Proficient in endpoint security, IAM, Security Operations, Governance, Policy and
                  Risk Management. Seeking a Cyber Security Analyst position to apply coding skills and security
                  expertise in enhancing automation and infrastructure.
                </p>
                <div className="flex gap-4 mb-8">
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    mogadatisrikanth@gmail.com
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    (201) 630-1859
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Education</h3>
                <div className="mb-6 border-l-2 border-green-500 pl-4">
                  <h4 className="font-semibold">Master's in Cybersecurity</h4>
                  <p className="text-gray-300">New York Institute of Technology</p>
                  <p className="text-gray-400">GPA: 3.65 | May 2024</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Courses: Advance Network and Internet Security, Network Protocols Cryptography, Intrusion Detection
                    and Hacker Exploits, Secure Software Engineering, Operating System Security, Data Center Security,
                    Database systems
                  </p>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <h4 className="font-semibold">Bachelor's in Electronics Engineering</h4>
                  <p className="text-gray-300">Jawaharlal Nehru Technological University</p>
                  <p className="text-gray-400">GPA: 3.25 | Nov 2021</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Courses: Computer Networks, Mathematics, Python, Internet of Things, Artificial Intelligence,
                    Network Analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TryHackMe Badge Section */}
        <section className="py-10 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">TryHackMe Achievements</h2>
            <div className="flex justify-center">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-green-400">Live TryHackMe Badge</h3>
                <div className="flex justify-center">
                  <iframe
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4444738"
                    style={{ border: "none", width: "100%", height: "150px" }}
                    title="TryHackMe Badge"
                    className="bg-transparent"
                  />
                </div>
                <p className="text-gray-300 mt-4 text-center text-sm">
                  This badge updates in real-time as I complete more rooms and maintain my learning streak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Code className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600">Python</Badge>
                    <Badge className="bg-green-600">JavaScript</Badge>
                    <Badge className="bg-green-600">PHP</Badge>
                    <Badge className="bg-green-600">Bash</Badge>
                    <Badge className="bg-green-600">PowerShell</Badge>
                    <Badge className="bg-green-600">Git</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Server className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Operating Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600">Linux</Badge>
                    <Badge className="bg-green-600">Unix</Badge>
                    <Badge className="bg-green-600">Windows</Badge>
                    <Badge className="bg-green-600">MacOS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Network className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Networking & Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600">TCP/IP</Badge>
                    <Badge className="bg-green-600">Firewall</Badge>
                    <Badge className="bg-green-600">DNS</Badge>
                    <Badge className="bg-green-600">HTTP</Badge>
                    <Badge className="bg-green-600">DHCP</Badge>
                    <Badge className="bg-green-600">VPN</Badge>
                    <Badge className="bg-green-600">IDS/IPS</Badge>
                    <Badge className="bg-green-600">MITRE ATT&CK</Badge>
                    <Badge className="bg-green-600">NIST</Badge>
                    <Badge className="bg-green-600">SOC2</Badge>
                    <Badge className="bg-green-600">OWASP</Badge>
                    <Badge className="bg-green-600">Docker</Badge>
                    <Badge className="bg-green-600">Kubernetes</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Ethical Hacking & Penetration Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600">NMAP</Badge>
                    <Badge className="bg-green-600">Wireshark</Badge>
                    <Badge className="bg-green-600">Metasploit</Badge>
                    <Badge className="bg-green-600">SIEM (Splunk)</Badge>
                    <Badge className="bg-green-600">Burpsuite</Badge>
                    <Badge className="bg-green-600">Snort</Badge>
                    <Badge className="bg-green-600">Yara</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Security Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600">Network Design</Badge>
                    <Badge className="bg-green-600">Vulnerability Assessment</Badge>
                    <Badge className="bg-green-600">Threat Hunting</Badge>
                    <Badge className="bg-green-600">Cryptography</Badge>
                    <Badge className="bg-green-600">Windows Security</Badge>
                    <Badge className="bg-green-600">IAM</Badge>
                    <Badge className="bg-green-600">Endpoint Security</Badge>
                    <Badge className="bg-green-600">Risk Management</Badge>
                    <Badge className="bg-green-600">Incident Handling</Badge>
                    <Badge className="bg-green-600">Network Analysis</Badge>
                    <Badge className="bg-green-600">Cloud Security</Badge>
                    <Badge className="bg-green-600">Threat Mitigation</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <Award className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600">CISCO NDG Linux</Badge>
                    <Badge className="bg-green-600">TCM Security- Practical Ethical Hacking</Badge>
                    <Badge className="bg-green-600">Security+ (In progress)</Badge>
                    <Badge className="bg-green-600">AWS</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-800/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-green-500">
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-semibold">SOC L1 Analyst Apprentice Self-Paced</h3>
                <p className="text-green-400">Try Hack Me | Nov 2024 - Present</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Monitored and investigated security alerts, reducing potential incident response time by 15%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Configured and managed security tools, leading to a 10% improvement in threat detection accuracy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Crafted and deployed IDS signatures, resulting in a 20% decrease in false positive alerts.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-green-500">
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-semibold">Graduate Assistant, Secure Software Engineering (T.A)</h3>
                <p className="text-green-400">NYIT | Feb 2024 - May 2024</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Graded assignments for 50+ students, achieving a 90% student satisfaction rate through timely
                      feedback.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Catalogued course materials, reducing student inquiries regarding resource availability by 25%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Co-ordinated students during 10+ weekly office hours, improving overall comprehension by 20%.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Academic Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Data Center Security - Network Infrastructure Design</CardTitle>
                  <CardDescription className="text-gray-400">
                    VM Ware, Pfsense, MySQL, BIND9 | Sep 2023 – Dec 2023
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <p>
                    Architected and implemented a secured network with a Demilitarized Zone (DMZ) for webserver and
                    internal network, resulting in a 100% secure connection, Monitored and Blocked Internal Threats by
                    Implementing IAM.
                  </p>
                  <p>
                    Implemented Pfsense as a firewall, successfully blocking 100% of unauthorized external connection
                    attempts.
                  </p>
                  <p>
                    Configured MySQL database for admin and employee management and established DNS (BIND9), supporting
                    seamless network operations for a small business firm with zero downtime.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Instant Messaging System</CardTitle>
                  <CardDescription className="text-gray-400">
                    Python, Flask, JavaScript, CSS, and HTML | Sep 2023 – Dec 2023
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <p>Fashioned real-time messaging system achieving 98% user satisfaction during testing.</p>
                  <p>
                    Designed user-friendly interface with secure authentication, driving 40% increase in user
                    engagement.
                  </p>
                  <p>
                    Integrated secure backend protocols and encryption, maintaining 0% security breaches during testing.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Cryptography - Hash Collision Detection</CardTitle>
                  <CardDescription className="text-gray-400">Python | Oct 2022 – Dec 2022</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <p>
                    Engineered a Python program to identify vulnerabilities in a "hash" function, achieving a 100%
                    success rate in uncovering hash collisions.
                  </p>
                  <p>
                    Delivered collision-finding software, providing actionable insights into the "hash" function's
                    vulnerabilities and enabling a 20% improvement in security protocols.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Competitions & Cybersecurity Initiatives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-gray-300">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>2nd Place - National Level Ethical Hacking Competition</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>IOT hackathon</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>TryHackMe Player (CTF)</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>CyberDefenders - BlueTeam CTF Player</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    View Achievements <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-800/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-green-400">mogadatisrikanth@gmail.com</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">(201) 630-1859</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-green-400">New York, NY 10023</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">Availability</h3>
                  <p className="text-green-400">Open to opportunities</p>
                </div>
              </div>

              <form className="space-y-6 bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 Srikanth Mogadati. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
