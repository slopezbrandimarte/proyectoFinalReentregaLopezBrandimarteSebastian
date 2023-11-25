import './CheckoutForm.css';
import { useState } from 'react';

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) => {
        e.preventDefault()
        
        const userData = {
            name,
            phone,
            email
        }


        console.log('la data que llega',userData)
        onConfirm(userData)
    }

    return(
        <div className='container'>
            <form onSubmit={handleConfirm}>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor='name'>Nombre</label>
                    </div>
                    <div className='col-75'>
                        <input type='text' id='name' name='name' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor='phone'>Telefono</label>
                    </div>
                    <div className='col-75'>
                        <input type='text' id='phone' name='phone' placeholder='Telefono' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='col-75'>
                        <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                </div>
                <div className='row'>
                    <button type='submit'>Confirmar compra</button>
                </div>
            </form>
        </div>
    )
}


export default CheckoutForm;