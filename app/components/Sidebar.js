'use client'
import { useState } from 'react'

const sidebarItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🔥', label: 'Popular' },
  { icon: '⏱️', label: 'Recently played' },
  { icon: '✨', label: 'New Games' },
  { icon: '🏆', label: 'Leaderboard' },
  { icon: '🔁', label: 'Multiplayer' },
  { icon: '🎯', label: '2 Player' },
  { icon: '🧩', label: 'Puzzle' },
  { icon: '🚗', label: 'Racing' },
  { icon: '⚔️', label: 'Action' },
  { icon: '⚽', label: 'Sports' },
  { icon: '🃏', label: 'Cards' },
]

const iconBtnStyle = {
  background: 'transparent',
  border: 'none',
  color: '#9ca3af',
  fontSize: '20px',
  cursor: 'pointer',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  flexShrink: 0
}

export default function Sidebar({ activeSidebar, setActiveSidebar, setShowHero, sidebarWidth, sidebarExpanded, setSidebarHover }) {
  return (
    <div
      className="custom-scroll"
      onMouseEnter={() => setSidebarHover(true)}
      onMouseLeave={() => setSidebarHover(false)}
      style={{
        width: sidebarWidth,
        background: '#12131f',
        borderRight: '1px solid #2a2b3d',
        position: 'fixed',
        top: '64px',
        left: 0,
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: sidebarExpanded ? 'stretch' : 'center',
        padding: '16px 0',
        gap: '6px',
        overflowY: 'auto',
        overflowX: 'hidden',
        transition: 'width 0.25s ease',
        zIndex: 100
      }}
    >
      {sidebarItems.map((item, i) => {
        const isActive = activeSidebar === item.label
        return (
          <button
            key={i}
            onClick={() => { setActiveSidebar(item.label); setShowHero(false) }}
            className="sidebar-item"
            style={{
              ...iconBtnStyle,
              width: sidebarExpanded ? '100%' : '40px',
              justifyContent: sidebarExpanded ? 'flex-start' : 'center',
              padding: sidebarExpanded ? '0 16px' : '0',
              gap: '12px',
              background: isActive ? '#7c3aed33' : 'transparent',
              color: isActive ? '#a78bfa' : '#9ca3af',
              borderLeft: isActive ? '3px solid #7c3aed' : '3px solid transparent'
            }}
          >
            <span>{item.icon}</span>
            {sidebarExpanded && <span style={{fontSize: '14px', whiteSpace: 'nowrap'}}>{item.label}</span>}
          </button>
        )
      })}
    </div>
  )
}