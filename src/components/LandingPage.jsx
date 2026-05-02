import { motion } from 'framer-motion'
import { Cloud, Shield, Zap, Globe, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n'

export default function LandingPage({ onGetStarted, onShowLegal }) {
  const { t } = useLang()

  return (
    <div className="landing-container" style={{ background: '#0e1016', color: 'white', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Glows */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 30% 20%, rgba(112,0,255,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,242,255,0.06) 0%, transparent 60%)',
      }} />

      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 2rem', backdropFilter: 'blur(10px)', background: 'rgba(14,16,22,0.6)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/Neblina_logo2.png" alt="Neblina" style={{ height: 32 }} />
          <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Neblina
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button 
            onClick={onGetStarted}
            className="primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
          >
            {t('auth.login')}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', zIndex: 1, paddingTop: '10rem', paddingBottom: '6rem', textAlign: 'center', maxWidth: 1000, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
            Unifique suas nuvens em <span style={{ color: 'var(--accent-primary)' }}>um só lugar</span>
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: 600, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Gerencie Google Drive, Dropbox, OneDrive e MEGA através de uma interface única, rápida e inteligente. Transfira arquivos entre nuvens instantaneamente.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={onGetStarted}
              className="primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', gap: '0.75rem' }}
            >
              Começar Agora <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          style={{ marginTop: '5rem', padding: '0 2rem' }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            padding: '1rem',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
          }}>
            <img 
              src="/src/assets/hero.png" 
              alt="Dashboard Preview" 
              style={{ width: '100%', borderRadius: '16px', display: 'block' }}
              onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.height = '400px'; e.target.parentNode.style.background = 'linear-gradient(135deg, #1e293b, #0f172a)' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <FeatureCard 
            icon={<Cloud color="var(--accent-primary)" />} 
            title="Multi-Cloud" 
            desc="Conecte múltiplas contas dos principais serviços de armazenamento do mercado."
          />
          <FeatureCard 
            icon={<Zap color="var(--accent-primary)" />} 
            title="Transferência Direta" 
            desc="Transfira arquivos entre diferentes serviços de nuvem sem precisar baixar para o seu dispositivo."
          />
          <FeatureCard 
            icon={<Shield color="var(--accent-primary)" />} 
            title="Seguro e Privado" 
            desc="Suas credenciais são protegidas e os arquivos são transferidos diretamente pelos protocolos oficiais."
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontSize: '0.9rem', opacity: 0.6 }}>
          <button onClick={() => onShowLegal('privacy')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Política de Privacidade</button>
          <button onClick={() => onShowLegal('terms')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Termos de Serviço</button>
        </div>
        <p style={{ fontSize: '0.8rem', opacity: 0.4 }}>
          © 2026 Neblina. Todos os direitos reservados.
        </p>
      </footer>

      <style>{`
        .landing-container .primary {
          background: var(--accent-gradient);
          color: black;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: transform 0.2s, filter 0.2s;
        }
        .landing-container .primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
      `}</style>
    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div style={{
      padding: '2.5rem',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '24px',
      textAlign: 'left'
    }}>
      <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{title}</h3>
      <p style={{ opacity: 0.5, lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}
