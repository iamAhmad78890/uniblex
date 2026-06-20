import styles from './BlogSection.module.css'

const posts = [
  { tag: '3D ART', title: 'Low-poly terrain in Blender, start to finish', readTime: '6 min read' },
  { tag: 'TUTORIALS', title: 'Getting WebGL games to load under 2 seconds', readTime: '9 min read' },
]

export default function BlogSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Latest from the blog</h2>
      <div className={styles.grid}>
        {posts.map((post, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.tag}>{post.tag}</span>
            <p className={styles.title}>{post.title}</p>
            <p className={styles.readTime}>{post.readTime}</p>
          </div>
        ))}
      </div>
    </div>
  )
}