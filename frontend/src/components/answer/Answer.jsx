import React, { useState } from 'react';
import './answer.css';

export default function Answer() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
// ... (existing code)

const handleSubmit = (event) => {
  event.preventDefault();
  if (selectedOption !== null) {
    alert("Vous avez sélectionné: " + selectedOption); // Concatenate the selectedOption value
    // Vous pouvez ajouter le traitement de chaque réponse ici
  } else {
    alert("Veuillez sélectionner une option.");
  }
};

// ... (existing code)


  return (
    <div>
      <div style={{ position: "relative", top: "40px" }}>
        <h3 className='m-3  mn-5 fs-4 m-5'>Question 1/15</h3>
        
        <p className='  fs-5' style={{marginLeft:'3%'  }}>choose the right Answer</p>
        <h5 className="d-flex justify-content-end" style={{ position: "relative", right: '12%', top: "-14px" }}>03:15</h5>
      </div>


      <form onSubmit={handleSubmit} className='mt-5' style={{ position: 'relative', top: '85px' }}>
      
        <div className='mt-5'>
          <h5 className="h5" style={{ position: "relative", left: '34%' }}>What is the best programming language? </h5><br />
          <div className="radio-container">
            <div className="radio">
              <input type="radio" className="radioinput" id="radio1" name="radioGroup" value="CSS" onChange={handleOptionChange} />
              <label htmlFor="radio1" className="radio--label fs-5"> css</label>
            </div>
            <div className="radio">
              <input type="radio" className="radioinput" id="radio2" name="radioGroup"  value="html"onChange={handleOptionChange} />
              <label htmlFor="radio2" className="radio--label fs-5">html</label>
            </div>
            <div className="radio">
              <input type="radio" className="radioinput" id="radio3" name="radioGroup"  value="javascript"onChange={handleOptionChange} />
              <label htmlFor="radio3" className="radio--label fs-5">javascript </label>
            </div>
            <div className="radio">
              <input type="radio" className="radioinput" id="radio4" name="radioGroup" value="PHP" onChange={handleOptionChange} />
              <label htmlFor="radio4" className="radio--label fs-5 "> php</label>
            </div>
          </div>
          <div className="d-grid ms-auto mt-5 ml-5" style={{ position: 'relative', right: "18%", top: '32px', width: '8%' }}>
            <button className="btn btn-primary custom-button p-2 bg-info fs-4 text-dark" >next</button>
          </div>
        </div>
      </form>
    </div>
  )
}
