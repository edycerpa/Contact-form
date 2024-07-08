import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}


export const ContactEmail = ({ name, email, subject, phone, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Nuevo mensaje de contacto de {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src="URL A IMAGEN.png" width="250" height="242" alt="" style={logo} />
        <Text style={paragraph}>Nombre: {name}</Text>
        <Text style={paragraph}>Email: {email}</Text>
        <Text style={paragraph}>Asunto: {subject}</Text>
        <Text style={paragraph}>Teléfono: {phone}</Text>
        <Text style={paragraph}>Mensaje: {message}</Text>
        <Hr style={hr} />
        <Text style={footer}>TU PIE DE PAGINA.</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#666666",
  fontFamily:
    'Montserrat, sans-serif',
  padding: "20px",
};

const container = {
  margin: "0 auto",
  padding: "20px 20px 48px",
  backgroundColor: "#e3e3e3",
  boxshadow: "5px 5px 16px 0 rgba(0, 0, 0, .1)",
  borderRadius: "10px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#ff4500",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#ff4500",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};