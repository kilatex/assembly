import React from 'react'

export const AntiConfetti = () => {
    return (
        <>
            <div className="anti-confetti">
                {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="rain-emoji" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}>😢</span>
                ))}
            </div>
        </>
    )
}
