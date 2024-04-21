import React, { useState } from 'react';
import './CreateEvent.css';
import create from './create.gif';
import { FaPlusCircle, FaRegTimesCircle } from "react-icons/fa";
{/* <div className='create-btn'><button onClick={() => setShowForm(true)}>Create Event <FaPlusCircle className='mb-1' /></button></div> */ }


const CreateEvent = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    date: '',
    email: '',
    phone: '',
    address: ''
  });
  // if (showForm == true) {
  //     document.body.style.position="fixed";
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form data and close form
    setFormData({
      eventName: '',
      eventDescription: '',
      date: '',
      email: '',
      phone: '',
      address: ''
    });
    setShowForm(false);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className='own-event'>
        <div className='create-gif'>
          <img src={create} className='create-gif-pic' />
        </div>
        <div className='create-div'>
          <div className='create-h'><h1>Create Your Own Event &nbsp;</h1></div>
          <div className='create-p'>
            <p>Join us in crafting memorable experiences and building connections by hosting your own event on our website! Whether you're a passionate individual, a community leader, or a business looking to engage with your audience, our platform offers you the perfect stage to showcase your ideas, talents, and initiatives.</p>
          </div>
          <div>
            <div className="container mt-5">
              <div className='create-btn'><button onClick={() => setShowForm(true)}>Create Event <FaPlusCircle className='mb-1' /></button></div>

              {showForm && (
                <div className="popup-form">
                  <div className="popup-content">
                  <button className="btn-close" onClick={handleCloseForm}><FaRegTimesCircle /></button>
                    <h3 className="mb-4">Event Registration Form</h3>
                  
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input type="text" className="form-control" id="eventName" name="eventName" value={formData.eventName} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea className="form-control" id="eventDescription" name="eventDescription" rows="3" value={formData.eventDescription} onChange={handleInputChange} required></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                      </div>
                      <br/>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <br/>
      <hr/>
    </div>

  );
}


export default CreateEvent;
