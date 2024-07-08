# Astro Email Form Template

Este proyecto es una plantilla rápida para implementar el envío de correos electrónicos en un proyecto basado en Astro. Utiliza React y Resend para gestionar el formulario de contacto y el envío de correos electrónicos.

## CONFIGURACIONES BÁSICAS

### Registro
REGITRARSE EN [Resend](https://resend.com/)

### Archivos y Configuraciones
#### `ContactEmail.tsx` 
- Línea 29 - Cambiar URL de tu imagen o logo (no se acepta svg o webp)
- Línea 36 - Cambia el mensaje del pie de página

#### `Form.tsx`
- Línea 45 - Email registrado en [Resend](https://resend.com/) (Correo de salida de tu dominio)
- Línea 46 - Email al que llegaran los correos (Correo de destino, puede ser el mismo)

#### `.env`
- Pega la API proporcionada por [Resend](https://resend.com/)
  ```
  RESEND_API_KEY= ESCRIBIR_TU_API_KEY_AQUI
  ```

[Creditos a Coding in Public](https://www.youtube.com/@CodinginPublic)

#
#
**Eddy Cerpa**

[Cerpa Web Designs](https://cerpawebdesigns.com/)