import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer className="bg-dark text-light text-center py-4">
        <div className="container">
          <p>&copy; 2024 {props.title}. All rights reserved.</p>
          <p>Designed with <span role="img" aria-label="heart">❤️</span> by Mayush Mehta</p>
        </div>
      </footer>
    </div>
  )
}
