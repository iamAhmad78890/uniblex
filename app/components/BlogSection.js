import Link from 'next/link'
import styles from './BlogSection.module.css'

const posts = [
  {
    tag: '3D ART',
    title: 'Low-poly terrain in Blender, start to finish',
    readTime: '6 min read',
    color: '#173404',
    accent: '#97C459',
    emoji: '🌄'
  },
  {
    tag: 'TUTORIALS',
    title: 'Getting WebGL games to load under 2 seconds',
    readTime: '9 min read',
    color: '#0f1f3d',
    accent: '#60a5fa',
    emoji: '⚡'
  },
]

export default function BlogSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Latest from the blog</h2>
      <div className={styles.grid}>
        {posts.map((post, i) => (
          <div key={i} className={styles.card}>
            <div
              className={styles.thumbnail}
              style={{
                background: `linear-gradient(135deg, ${post.color}, #0B0D0C)`,
                borderBottom: `1px solid ${post.accent}22`
              }}
            >
              <span className={styles.thumbnailEmoji}>{post.emoji}</span>
              <span
                className={styles.thumbnailTag}
                style={{ color: post.accent, borderColor: `${post.accent}44`, background: `${post.accent}11` }}
              >
                {post.tag}
              </span>
            </div>
            <div className={styles.content}>
              <p className={styles.title}>{post.title}</p>
              <p className={styles.readTime}>{post.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}