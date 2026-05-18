import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, FileText, Lock, Eye } from 'lucide-react'
import { useLang } from '../i18n'

export default function LegalView({ isOpen, onClose, isStatic = false, initialTab = 'privacy' }) {
  const { t, lang } = useLang()
  const [activeTab, setActiveTab] = useState(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  if (!isOpen) return null

  const containerStyle = isStatic ? {
    minHeight: '100vh',
    background: '#0e1016',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem 1rem'
  } : {
    position: 'fixed',
    inset: 0,
    zIndex: 3000,
    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }

  const modalStyle = isStatic ? {
    width: '100%',
    maxWidth: '800px',
    background: 'rgba(14,16,22,0.98)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
    height: 'fit-content'
  } : {
    width: '100%',
    maxWidth: '800px',
    maxHeight: '85vh',
    background: 'rgba(14,16,22,0.98)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 50px 100px rgba(0,0,0,0.8)'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={isStatic ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={containerStyle}
        onClick={isStatic ? undefined : onClose}
      >
        <motion.div
          initial={isStatic ? {} : { scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          style={modalStyle}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <header style={{ 
            padding: '1.5rem 2rem 0', 
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            background: 'rgba(255,255,255,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Shield size={20} color="var(--accent-primary)" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{t('sidebar.legal')}</h2>
              </div>
              {isStatic ? (
                <button 
                  onClick={() => window.location.href = '/'}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '12px', 
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer', 
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  Neblina App
                </button>
              ) : (
                <button 
                  onClick={onClose}
                  style={{ background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button 
                onClick={() => setActiveTab('privacy')}
                style={{ 
                  background: 'none', border: 'none', color: activeTab === 'privacy' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.4)',
                  padding: '0.75rem 0', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
                  borderBottom: activeTab === 'privacy' ? '2px solid var(--accent-primary)' : '2px solid transparent'
                }}
              >
                {t('auth.privacy')}
              </button>
              <button 
                onClick={() => setActiveTab('terms')}
                style={{ 
                  background: 'none', border: 'none', color: activeTab === 'terms' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.4)',
                  padding: '0.75rem 0', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
                  borderBottom: activeTab === 'terms' ? '2px solid var(--accent-primary)' : '2px solid transparent'
                }}
              >
                {t('auth.terms')}
              </button>
            </div>
          </header>

          {/* Scrollable Content */}
          <div style={{ 
            flex: 1, 
            overflowY: 'auto', 
            padding: '2rem', 
            lineHeight: 1.6, 
            color: 'rgba(255,255,255,0.85)',
            fontSize: '0.95rem'
          }}>
            {/* TERMS SECTION */}
            {activeTab === 'terms' && (
              <section style={{ marginBottom: isStatic ? '0' : '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#fff' }}>
                  <FileText size={18} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{t('auth.terms')}</h3>
                </div>
                <p style={{ marginBottom: '1rem' }}>
                  Bem-vindo à Neblina. Ao utilizar nossos serviços, você concorda com as seguintes condições:
                </p>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li><strong>Uso Responsável:</strong> A Neblina é uma ferramenta de gestão. Você é o único responsável pelos arquivos que transfere ou armazena através da plataforma.</li>
                  <li><strong>Propriedade Intelectual:</strong> Não reivindicamos nenhum direito sobre seus arquivos. Seus dados permanecem sendo seus.</li>
                  <li><strong>Limitação de Responsabilidade:</strong> A Neblina fornece integração com serviços de terceiros (Google, MEGA, etc). Não nos responsabilizamos por falhas nestes serviços externos.</li>
                </ul>
              </section>
            )}

            {/* PRIVACY SECTION */}
            {activeTab === 'privacy' && (
              <section style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: '#fff' }}>
                  <Lock size={18} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{t('auth.privacy')}</h3>
                </div>
                
                {lang === 'pt' ? (
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', opacity: 0.9 }}>
                      Nossa Política de Privacidade descreve como nosso aplicativo interage com os dados do usuário do Google.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                          <Eye size={16} />
                          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>1. Dados Acessados</span>
                        </div>
                        <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                          Nosso aplicativo solicita acesso ao endereço de e-mail principal da conta Google e informações básicas de perfil.
                        </p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#00ff41' }}>
                          <Lock size={16} />
                          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>2. Uso dos Dados</span>
                        </div>
                        <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                          Utilizamos esses dados exclusivamente para autenticação e criação de perfil local. O aplicativo apenas processa os metadados e os links dos arquivos, sem acessar ou avaliar o conteúdo dos documentos armazenados no Google Drive. As informações não são compartilhadas com terceiros e nunca são usadas para treinar modelos de inteligência artificial.
                        </p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', opacity: 0.85 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#a855f7' }}>
                          <Shield size={16} />
                          <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Segurança Geral (Senhas e Tokens)</span>
                        </div>
                        <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>
                          Senhas do MEGA são criptografadas com AES-GCM usando seu UID exclusivo como chave. Todo o tráfego de arquivos ocorre de forma direta e segura entre o seu navegador e os provedores de nuvem.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', opacity: 0.9 }}>
                      Our Privacy Policy describes how our application interacts with Google user data.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                          <Eye size={16} />
                          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>1. Accessed Data</span>
                        </div>
                        <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                          Our application requests access to the primary email address of your Google account and basic profile information.
                        </p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#00ff41' }}>
                          <Lock size={16} />
                          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>2. Data Use</span>
                        </div>
                        <p style={{ fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.6 }}>
                          We use this data exclusively for authentication and local profile creation. The application only processes file metadata and links, without accessing or evaluating the content of documents stored in Google Drive. This information is not shared with third parties and is never used to train artificial intelligence models.
                        </p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', opacity: 0.85 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#a855f7' }}>
                          <Shield size={16} />
                          <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>General Security (Passwords and Tokens)</span>
                        </div>
                        <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>
                          MEGA passwords are encrypted with AES-GCM using your unique UID as the key. All file traffic occurs directly and securely between your browser and the cloud providers.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </section>
            )}
          </div>

          {/* Footer */}
          <footer style={{ 
            padding: '1.25rem 2rem', 
            borderTop: '1px solid rgba(255,255,255,0.06)',
            textAlign: 'center',
            fontSize: '0.8rem',
            opacity: 0.4
          }}>
            {lang === 'pt' 
              ? 'Neblina — Gestão Inteligente de Nuvem // Última atualização: 01 de Maio de 2026' 
              : 'Neblina — Smart Cloud Management // Last updated: May 01, 2026'}
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
