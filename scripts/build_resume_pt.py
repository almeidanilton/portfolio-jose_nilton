from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from xml.sax.saxutils import escape
pdfmetrics.registerFont(TTFont('D',str(Path(__file__).resolve().parents[1] / 'scripts/fonts/DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('DB',str(Path(__file__).resolve().parents[1] / 'scripts/fonts/DejaVuSans-Bold.ttf')))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily('D',normal='D',bold='DB')
OUT=str(Path(__file__).resolve().parents[1] / 'assets/resume/Curriculo_Jose_Nilton_PT.pdf')
W,H=A4
c=canvas.Canvas(OUT,pagesize=A4)
c.setTitle('José Nilton - Currículo')
c.setAuthor('José Nilton Almeida dos Santos')
y=H-35
style=ParagraphStyle('body',fontName='D',fontSize=8.3,leading=11.2,textColor=HexColor('#293241'))
def p(txt,size=8.3,leading=11.2,after=0):
 global y
 s=ParagraphStyle('p',parent=style,fontSize=size,leading=leading)
 obj=Paragraph(txt,s);_,h=obj.wrap(W-72,H)
 obj.drawOn(c,36,y-h);y-=h+after

def sec(title):
 global y
 y-=10
 c.setStrokeColor(HexColor('#d6dee6'));c.setLineWidth(.5);c.line(36,y,W-36,y);y-=6
 p('<b>'+title+'</b>',9.2,12,5)
def bullet(txt):p('• '+txt,after=1)

p('<b>JOSÉ NILTON</b>',23,27,4)
p('Estudante de ADS | Desenvolvimento e Inteligência Artificial',9,12,3)
p('São Paulo, SP · <link href="mailto:almeidanilton555@gmail.com">almeidanilton555@gmail.com</link>',8,10)
p('<link href="https://github.com/almeidanilton">GitHub: almeidanilton</link> · <link href="https://www.linkedin.com/in/jos%C3%A9-nilton-a1b8b6280/">LinkedIn: José Nilton</link>',8,10)
sec('RESUMO PROFISSIONAL')
p('Estudante de Análise e Desenvolvimento de Sistemas na FIAP, em transição para TI. Experiência em odontologia digital, operação de sistemas CAD/CAM, análise de arquivos e melhoria de fluxos de trabalho. Desenvolvo projetos pessoais de aplicações web e automação, incluindo integração com IA. Busco oportunidade de estágio ou entrada em tecnologia, com interesse em aprender e aberto a novas oportunidades.')
sec('FORMAÇÃO ACADÊMICA')
p('<b>Análise e Desenvolvimento de Sistemas - FIAP</b> | Tecnólogo em andamento · conclusão prevista: dez/2027')
p('<b>Técnico em Prótese Dentária - Senac São Paulo</b> | Conclusão: jan/2024')
sec('PROJETOS PESSOAIS')
p('<b>LabFlow</b> | Aplicação web · MVP em desenvolvimento',after=2)
bullet('Sistema para digitalizar o controle de produção de laboratórios de prótese dentária, a partir de uma necessidade observada na rotina profissional. MVP com dashboard básico, cadastro de trabalhos e navegação entre telas.')
p('Tecnologias: React, Vite e JavaScript/TypeScript. <link href="https://github.com/almeidanilton/labflow-system"><b>Repositório ↗</b></link>',after=5)
p('<b>Curadoria Tech com IA</b> | Automação e inteligência artificial',after=2)
bullet('Fluxo em n8n que monitora feeds RSS, utiliza Gemini para gerar resumos e publica no Discord. Tratamento de mensagens em JavaScript para respeitar o limite de caracteres da plataforma.')
p('Tecnologias: n8n, Gemini e JavaScript. <link href="https://github.com/almeidanilton/automacao-curadoria-tech-ia"><b>Repositório ↗</b></link>',after=5)
p('<b>Download Organizer</b> | Automação em Java',after=2)
bullet('Organização de arquivos por regras para EXOCAD, STL, pacotes e outros formatos, com modos de cópia e movimentação e geração de relatório. Integração com nuvem prevista como evolução.')
p('Tecnologias: Java e java.nio.file. <link href="https://github.com/almeidanilton/cloud-ready-download-organizer"><b>Repositório ↗</b></link>')
sec('CONHECIMENTOS TÉCNICOS')
p('<b>Desenvolvimento e automação:</b> Java, Python, JavaScript, HTML/CSS, React, SQL, Git e GitHub.')
p('<b>Sistemas e segurança:</b> Linux, linha de comando, redes e sistemas operacionais; fundamentos de gestão de riscos, controles de segurança, SIEM e IAM.')
p('<b>Cloud:</b> fundamentos de AWS e Google Cloud.')
sec('EXPERIÊNCIA PROFISSIONAL')
p('<b>Laboratório New Star</b> | Cadista / Analista de Fluxos Digitais CAD/CAM Sênior | out/2025 - atual',after=2)
bullet('Operação e configuração de sistemas CAD/CAM; análise de arquivos STL e diagnóstico de falhas técnicas em sistemas e equipamentos. Organização e padronização de fluxos digitais.')
p('<b>Brudent</b> | Gestor de Impressão 3D e Implantes / Técnico Pleno | abr/2025 - out/2025',after=2)
bullet('Gestão do fluxo de impressão 3D e CAD/CAM, monitoramento de equipamentos e organização de arquivos digitais em colaboração com equipes multidisciplinares.')
p('<b>Kion Dental Technology</b> | Técnico em Prótese Dentária Júnior | set/2024 - abr/2025',after=2)
bullet('Análise e correção de arquivos digitais e STL; apoio à padronização de fluxos de trabalho CAD/CAM.')
p('<b>Odonto+</b> | Técnico em Prótese Dentária Júnior | jan/2020 - dez/2023',after=2)
bullet('Atuação em produção laboratorial, organização de rotinas, controle de processos e qualidade das entregas.')
sec('CURSOS E CERTIFICAÇÕES')
p('<b>Google Cybersecurity Professional Certificate - Google/Coursera:</b> em andamento.')
p('Cursos concluídos: Play It Safe: Manage Security Risks; Connect and Protect: Networks and Network Security; Tools of the Trade: Linux and SQL - Google/Coursera.')
p('Digital Safety and Security Awareness - Cisco · Engenharia de Agentes de IA com ADK - Google Cloud.')
sec('INFORMAÇÕES COMPLEMENTARES')
p('<b>Google Student Ambassador:</b> 2026 · <b>Inglês:</b> básico.')
print('Content ends at y=',round(y,1),'bottom margin',35)
if y<30:raise RuntimeError('Content exceeds page')
c.save()
