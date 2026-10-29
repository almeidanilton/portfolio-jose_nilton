from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from xml.sax.saxutils import escape
pdfmetrics.registerFont(TTFont('D', str(Path(__file__).resolve().parents[1] / 'scripts/fonts/DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('DB', str(Path(__file__).resolve().parents[1] / 'scripts/fonts/DejaVuSans-Bold.ttf')))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily('D', normal='D', bold='DB')
from pathlib import Path
OUT = str(Path(__file__).resolve().parents[1] / 'assets/resume/Jose_Nilton_Resume_EN.pdf')
W, H = A4
c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle('José Nilton - Résumé')
c.setAuthor('José Nilton Almeida dos Santos')
y = H - 35
style = ParagraphStyle('body', fontName='D', fontSize=8.3, leading=11.2, textColor=HexColor('#293241'))

def p(txt, size=8.3, leading=11.2, after=0):
    global y
    s = ParagraphStyle('p', parent=style, fontSize=size, leading=leading)
    obj = Paragraph(txt, s)
    _, h = obj.wrap(W - 72, H)
    obj.drawOn(c, 36, y - h)
    y -= h + after

def sec(title):
    global y
    y -= 10
    c.setStrokeColor(HexColor('#d6dee6'))
    c.setLineWidth(0.5)
    c.line(36, y, W - 36, y)
    y -= 6
    p('<b>' + title + '</b>', 9.2, 12, 5)

def bullet(txt):
    p('• ' + txt, after=1)
p('<b>JOSÉ NILTON</b>', 23, 27, 4)
p('Systems Analysis & Development Student | Software Development & AI', 9, 12, 3)
p('São Paulo, SP · <link href="mailto:almeidanilton555@gmail.com">almeidanilton555@gmail.com</link>', 8, 10)
p('<link href="https://github.com/almeidanilton">GitHub: almeidanilton</link> · <link href="https://www.linkedin.com/in/jos%C3%A9-nilton-a1b8b6280/">LinkedIn: José Nilton</link>', 8, 10)
sec('PROFILE')
p('Systems Analysis and Development student at FIAP, transitioning into IT. Experience in digital dentistry, CAD/CAM systems operation, file analysis and workflow improvement. I develop personal web application and automation projects, including AI integration. I am seeking an internship or entry-level opportunity in technology, eager to learn and open to new opportunities.')
sec('EDUCATION')
p('<b>Systems Analysis and Development - FIAP</b> | Undergraduate Technology Degree in progress · expected: Dec/2027')
p('<b>Technical Diploma in Dental Prosthetics - Senac São Paulo</b> | Completed: Jan/2024')
sec('PERSONAL PROJECTS')
p('<b>LabFlow</b> | Web application · MVP in development', after=2)
bullet('A system to digitize production tracking in dental prosthetics labs, inspired by a need observed at work. The MVP includes a basic dashboard, job registration and navigation between screens.')
p('Technologies: React, Vite and JavaScript/TypeScript. <link href="https://github.com/almeidanilton/labflow-system"><b>Repository ↗</b></link>', after=5)
p('<b>AI Tech Digest</b> | Automation and artificial intelligence', after=2)
bullet("An n8n workflow that monitors RSS feeds, uses Gemini to generate summaries and posts to Discord. JavaScript message processing to stay within the platform's character limit.")
p('Technologies: n8n, Gemini and JavaScript. <link href="https://github.com/almeidanilton/automacao-curadoria-tech-ia"><b>Repository ↗</b></link>', after=5)
p('<b>Download Organizer</b> | Java automation', after=2)
bullet('Rule-based organization of EXOCAD, STL, archive and other files, with copy and move modes and report generation. Cloud integration is a planned improvement.')
p('Technologies: Java and java.nio.file. <link href="https://github.com/almeidanilton/cloud-ready-download-organizer"><b>Repository ↗</b></link>')
sec('TECHNICAL KNOWLEDGE')
p('<b>Development and automation:</b> Java, Python, JavaScript, HTML/CSS, React, SQL, Git and GitHub.')
p('<b>Systems and security:</b> Linux, command line, networks and operating systems; fundamentals of risk management, security controls, SIEM and IAM.')
p('<b>Cloud:</b> AWS and Google Cloud fundamentals.')
sec('PROFESSIONAL EXPERIENCE')
p('<b>Laboratório New Star</b> | CAD Designer / Senior CAD/CAM Digital Workflow Analyst | Oct/2025 - present', after=2)
bullet('Operation and configuration of CAD/CAM systems; STL file analysis and troubleshooting of systems and equipment. Organization and standardization of digital workflows.')
p('<b>Brudent</b> | 3D Printing and Implant Workflow Manager / Mid-level Technician | Apr/2025 - Oct/2025', after=2)
bullet('Management of 3D printing and CAD/CAM workflows, equipment monitoring and digital file organization in collaboration with multidisciplinary teams.')
p('<b>Kion Dental Technology</b> | Junior Dental Prosthetics Technician | Sep/2024 - Apr/2025', after=2)
bullet('Analysis and correction of digital and STL files; support for the standardization of CAD/CAM workflows.')
p('<b>Odonto+</b> | Junior Dental Prosthetics Technician | Jan/2020 - Dec/2023', after=2)
bullet('Work in laboratory production, daily workflow organization, process control and delivery quality.')
sec('COURSES AND CERTIFICATIONS')
p('<b>Google Cybersecurity Professional Certificate - Google/Coursera:</b> in progress.')
p('Completed courses: Play It Safe: Manage Security Risks; Connect and Protect: Networks and Network Security; Tools of the Trade: Linux and SQL - Google/Coursera.')
p('Digital Safety and Security Awareness - Cisco · AI Agent Engineering with ADK - Google Cloud.')
sec('ADDITIONAL INFORMATION')
p('<b>Google Student Ambassador:</b> 2026 · <b>English:</b> basic.')
print('Content ends at y=', round(y, 1), 'bottom margin', 35)
if y < 30:
    raise RuntimeError('Content exceeds page')
c.save()
