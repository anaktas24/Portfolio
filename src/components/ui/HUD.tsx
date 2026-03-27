import { motion, AnimatePresence } from 'framer-motion'
import { useStore, PlanetId } from '../../store/useStore'

const PLANET_INFO: Record<PlanetId, { section: string; description: string; link?: string }> = {
  sun: {
    section: 'Home',
    description: 'The center of it all.',
  },
  earth: {
    section: 'About Me',
    description: 'My story, my world.',
  },
  mars: {
    section: 'Projects',
    description: 'Things I\'ve built and shipped.',
  },
  venus: {
    section: 'Skills',
    description: 'The tools in my belt.',
  },
  saturn: {
    section: 'Contact',
    description: 'Let\'s build something together.',
  },
  uranus: {
    section: 'Experience',
    description: 'My professional journey.',
  },
  blackhole: {
    section: 'Author Website',
    description: 'Step into a different dimension.',
    link: 'https://your-author-website.com',
  },
}

export default function HUD() {
  const focusedPlanet = useStore((s) => s.focusedPlanet)
  const setFocusedPlanet = useStore((s) => s.setFocusedPlanet)
  const info = focusedPlanet ? PLANET_INFO[focusedPlanet] : null

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10, fontFamily: 'monospace' }}>

      {/* — Space view title — */}
      <AnimatePresence>
        {!focusedPlanet && (
          <motion.div
            key="title"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', top: 36, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white' }}
          >
            <div style={{ fontSize: 26, fontWeight: 'bold', letterSpacing: 10, textTransform: 'uppercase' }}>
              YOUR NAME
            </div>
            <div style={{ fontSize: 10, opacity: 0.45, letterSpacing: 5, marginTop: 10 }}>
              CLICK A PLANET TO EXPLORE
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* — Focused planet panel — */}
      <AnimatePresence>
        {focusedPlanet && info && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute', top: 32, left: 32, pointerEvents: 'auto' }}
          >
            {/* Back button */}
            <button
              onClick={() => setFocusedPlanet(null)}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'white',
                padding: '8px 20px',
                fontFamily: 'monospace',
                fontSize: 11,
                letterSpacing: 3,
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              ← Back to Space
            </button>

            <div style={{ marginTop: 28, color: 'white' }}>
              <div style={{ fontSize: 10, opacity: 0.45, letterSpacing: 4, textTransform: 'uppercase' }}>
                {info.section}
              </div>
              <div style={{ fontSize: 30, fontWeight: 'bold', marginTop: 6, letterSpacing: 2 }}>
                {focusedPlanet.charAt(0).toUpperCase() + focusedPlanet.slice(1)}
              </div>
              <div style={{ fontSize: 13, opacity: 0.6, marginTop: 8, maxWidth: 240 }}>
                {info.description}
              </div>

              {/* External link for black hole */}
              {info.link && (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: 20,
                    background: 'rgba(156,39,176,0.2)',
                    border: '1px solid #9C27B0',
                    color: '#CE93D8',
                    padding: '8px 20px',
                    fontFamily: 'monospace',
                    fontSize: 11,
                    letterSpacing: 3,
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  Enter the Void →
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* — Bottom hint — */}
      <AnimatePresence>
        {!focusedPlanet && (
          <motion.div
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              bottom: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 9,
              opacity: 0.25,
              letterSpacing: 4,
              color: 'white',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Six planets · One black hole · Infinite space
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
