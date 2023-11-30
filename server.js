const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/enviar-email', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Configurações do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'seu_servico_de_email', // Ex: Gmail, Yahoo, etc.
    auth: {
      user: 'seu_email@gmail.com',
      pass: 'sua_senha',
    },
  });

  // Configurações do e-mail
  const mailOptions = {
    from: 'seu_email@gmail.com',
    to: 'luancss.contact@gmail.com',
    subject: assunto,
    text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
  };

  // Enviar e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.status(200).send('E-mail enviado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});