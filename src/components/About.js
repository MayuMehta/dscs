import React from 'react'

export default function About(props) {
  return (
    <div className={`container text-${props.textColor} py-3`}>
      <h2>About Us</h2>
      <p>Welcome to {props.title} We are a team of passionate individuals dedicated to providing 
        high-quality products/services to our customers.</p>
      <p>Our mission is to make your experience with us as enjoyable and seamless as possible.</p>
      <h3>Our Story</h3>
      <p>Founded in 2024, our company has grown from a small startup to a thriving business 
        serving customers worldwide. Our journey has been fueled by our commitment to 
        innovation, customer satisfaction, and excellence in everything we do.</p>
      <h3>Our Values</h3>
      <ul>
        <li><strong>Quality:</strong> We believe in delivering products/services of the highest quality, ensuring customer satisfaction and loyalty.</li>
        <li><strong>Integrity:</strong> Honesty and integrity are at the core of our business practices. We strive to build trust with our customers, employees, and partners.</li>
        <li><strong>Innovation:</strong> We embrace innovation and continuously seek new ways to improve our products/services and enhance the customer experience.</li>
        <li><strong>Community:</strong> We are committed to giving back to the community and making a positive impact on society through various philanthropic initiatives.</li>
      </ul>
      <h3>Meet Our Team</h3>
      <p>Our team consists of talented individuals with diverse backgrounds and expertise. 
        Together, we work collaboratively to achieve our goals and exceed customer expectations.</p>
      {/* You can add more sections, such as testimonials, achievements, etc. */}
      <h3>Contact Us</h3>
      <p>If you have any questions, feedback, or inquiries, please don't hesitate to contact us:</p>
      <p>Email: mayushar8434@gmail.com</p>
      <p>Phone: +91 7808111286</p>
    </div>
  )
}
