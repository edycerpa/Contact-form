import type React from 'react';
import { useState } from 'react';
import ContactEmail from '../emails/ContactEmail';
import { render } from '@react-email/render';

const EmailForm = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { name, email, subject, phone, message } = Object.fromEntries(formData);

    const finalHtml = render(
      <ContactEmail 
        name={name as string}
        email={email as string}
        subject={subject as string}
        phone={phone as string}
        message={message as string}
      />, {
      pretty: true,
    });

    const finalText = render(
      <ContactEmail 
        name={name as string}
        email={email as string}
        subject={subject as string}
        phone={phone as string}
        message={message as string}
      />, {
      plainText: true,
    });

    try {
      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'CORREO DE SALIDA DE TU DOMINIO',
          to: 'CORREO DE DESTINO',
          subject: subject,
          html: finalHtml,
          text: finalText,
        })
      });
      const data = await res.json();

      if (res.ok) {
        setResponseMessage('✅ Correo enviado exitosamente');
        form.reset(); // Reset the form using the captured reference
      } else {
        const errorMessage = typeof data.message === 'object' ? JSON.stringify(data.message) : data.message;
        console.error('❌ Error al enviar el correo: ' + errorMessage);
        setResponseMessage('❌ Error al enviar el correo: Intenta nuevamente');
      }
    } catch (error) {
      const errorMessage = typeof error.message === 'object' ? JSON.stringify(error.message) : error.message;
      console.error('❌ Error al enviar el correo: ' + errorMessage);
      setResponseMessage('❌ Error al enviar el correo: Ocurrió un error inesperado');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>  
        <input type="text" name='name' required placeholder='Nombre' />
        <input type="email" name='email' required placeholder='Email' />
        <input type="text" name='subject' required placeholder='Asunto' />
        <input type="phone" name='phone' required placeholder='Teléfono' />
        <textarea name='message' required placeholder='Mensaje' />
        <input type="submit" value="Enviar correo" />
      </form>
      <span className="email-result">{responseMessage && <p>{responseMessage}</p>}</span>
    </div>
  );
}

export default EmailForm;