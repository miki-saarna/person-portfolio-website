
import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

function ContactPage() {
    const initialFormState = {
        name: '',
        email: '',
        url: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialFormState)

    const changeHandler = ({ target }) => {
        const value = target.value;
        // const { value } = target;
        setFormData({
            ...formData,
            [target.name]: value, 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(initialFormState);
    }

    


    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
            <h2 className="headerLabel">Contact me</h2>
            
                <label htmlFor='name'>
                    Name:
                    <input
                        id='name'
                        name='name'
                        type='text'
                        onChange={changeHandler}
                        value={formData.name}
                        />
                </label>

                <br />

                <label htmlFor='email'>
                    Email address:
                    <input
                        id='email'
                        name='email'
                        type='email'
                        onChange={changeHandler}
                        value={formData.email}
                        />
                </label>

                <br />

                <label htmlFor='url'>
                    Website URL (if available):
                    <input
                        id='url'
                        name='url'
                        type='text'
                        onChange={changeHandler}
                        value={formData.url}
                        />
                </label>

                <br />

                <label htmlFor='message'>
                    Message:
                    <textarea
                        id='message'
                        name='message'
                        type='textarea'
                        rows='3'
                        onChange={changeHandler}
                        value={formData.message}
                    ></textarea>
                </label>

                <br />
          <button type='submit'>Submit</button>
          
            </form>
        </div>
    )
}

export default ContactPage;