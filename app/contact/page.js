'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/PageLayout.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact</h1>
        <p className={styles.subheading}>// got a bug, idea, or just want to say hi?</p>

        <p className={styles.paragraph}>
          Fill out the form below and Mohsin will get back to you. Whether it's feedback on a game, a bug report, or a collaboration idea — every message is read.
        </p>

        {sent ? (
          <p style={{color: '#97C459', fontFamily: 'monospace', fontSize: '14px', marginTop: '24px'}}>
            ✓ Message sent. Thanks for reaching out!
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px'}}>
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              style={{
                background: '#121613', border: '0.5px solid #1F2421', borderRadius: '8px',
                padding: '12px 14px', color: '#F1EFE8', fontSize: '14px', outline: 'none'
              }}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              style={{
                background: '#121613', border: '0.5px solid #1F2421', borderRadius: '8px',
                padding: '12px 14px', color: '#F1EFE8', fontSize: '14px', outline: 'none'
              }}
            />
            <textarea
              placeholder="Your message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
              style={{
                background: '#121613', border: '0.5px solid #1F2421', borderRadius: '8px',
                padding: '12px 14px', color: '#F1EFE8', fontSize: '14px', outline: 'none',
                resize: 'vertical', fontFamily: 'inherit'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#97C459', color: '#173404', border: 'none',
                fontWeight: '500', padding: '12px 20px', borderRadius: '8px',
                fontSize: '14px', cursor: 'pointer', width: 'fit-content'
              }}
            >Send message</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  )
}