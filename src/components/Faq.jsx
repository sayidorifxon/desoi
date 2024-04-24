import React, { useRef } from 'react'
import "../styles/faq.css"
function Faq() {
    let faq__acc = useRef()
    function openAccor(e){
        if(e.target.id === "open"){
            e.target.nextElementSibling.classList.toggle("show__acc")
        }
    }

  return (
    <section className='faq'>
      <div className="container">
        <div className="faq__wrapper">
            <h2>Frequently Asked Questions</h2>
            <div onClick={openAccor} ref={faq__acc} className="faq__accordion">
                <button id='open'  className="accordion">What’s inside the bottle?</button>
                    <div  className="panel">
                        <p>Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                <button id='open'  className="accordion">How is it made?</button>
                    <div  className="panel">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sit fugit quos sint odit amet ratione, eaque neque ipsa inventore iusto quam enim nisi! Laudantium soluta totam maxime adipisci fuga!</p>
                    </div>
                <button id='open'  className="accordion">how do you drink medium-bodied?</button>
                    <div  className="panel">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sit fugit quos sint odit amet ratione, eaque neque ipsa inventore iusto quam enim nisi! Laudantium soluta totam maxime adipisci fuga!</p>
                    </div>
                <button id='open'  className="accordion">can i drink medium-bodied when i amd pragnant or driving?</button>
                    <div  className="panel">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sit fugit quos sint odit amet ratione, eaque neque ipsa inventore iusto quam enim nisi! Laudantium soluta totam maxime adipisci fuga!</p>
                    </div>
                <button id='open'  className="accordion">How long does a bottle keep?</button>
                    <div  className="panel">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora sit fugit quos sint odit amet ratione, eaque neque ipsa inventore iusto quam enim nisi! Laudantium soluta totam maxime adipisci fuga!</p>
                    </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
