import React from 'react'

const Drafts = () => {
  return (
        <section className="drafts_section">
      <div className="main_right">
        <img className="lamp" src={lamp} alt="" />
        <div className="about_text">
          <h1>About Our Company</h1>
        </div>
      </div>
      <div className="main_left">
        <div className="main_left_up">
          <h1>Exclusive Discounts</h1>
          <p>Don't miss our special offers available this season!</p>
        </div>
        <div className="main_left_down">
          <h1>Warm Greetings</h1>
          <p>We value you as a part of our community!</p>
        </div>
      </div>
    </section>
  )
}

export default Drafts