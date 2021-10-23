import React from 'react';
import '../styles/MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section class="appointment">
            <div class="appointment-container">
                <form>
                    <h2>Book an Appointment</h2>
                    <p>Please fill out the form below to make an appointment</p>
                    <input type="text" name="" id="" placeholder="First Name" /> <br />
                    <input type="text" name="" id="" placeholder="Last Name" /> <br />
                    <input type="tel" name="" id="" placeholder="Phone Number" /> <br />
                    <input type="email" name="" id="" placeholder="Phone Number" /> <br />
                    <input type="text" name="" id="" placeholder="Preferred Time" /> <br />
                    <input type="text" name="" id="" placeholder="Preferred Date" /> <br />
                    <input type="email" name="" id="" placeholder="Doctor's Name You Want to See" /> <br />
                    <button>Leave a Request</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAppointment;