

const Reservation = () => {
    return (
        <div className="reservation">
            <h2>Reservations</h2>
            <h4>Booking Form</h4>
            <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
            <form className="contact-form" action="#">
                <div className="name-email">
                    <input className="input-name" type="text" placeholder="Name" required data-error="FirstName is required." />
                    <input className="input-email" type="email" placeholder="E-Mail ID" required
                        data-error="Email is required." />
                </div>
                <div className="number-persons">
                    <input className="input-number" type="number" placeholder="Contact No." required
                        data-error="Contact Number is required." />
                    <select defaultValue="default" id="persons" name="persons">
                        <option value="default" disabled>No. of Persons</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="date-time">
                    <input className="input-date" type="date" required data-error="Date is required." />
                    <input className="input-time" type="time" required data-error="Time is required." />
                </div>
                <button className="button">Book my table</button>
            </form>
        </div>
    );
}

export default Reservation;