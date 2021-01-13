const nodemailer = require('nodemailer');

function contactController(Message) {
  function getMethod(req, res) {
    const query = {};
    Message.find(query, (errorFindMessages, messages) => {
      if (errorFindMessages) {
        return res.send(errorFindMessages);
      }
      return res.json(messages);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Message.create(query, (errorPutMessaege, message) => {
      if (errorPutMessaege) {
        return res.send(errorPutMessaege);
      }
      return res.json(message);
    });
  }

  function postMethod(req, res) {
    const data = req.body;
    const smtpTransport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'mariatchaaaa@gmail.com',
        pass: 'Mazdamx5',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: data.email,
      to: 'mariatchaaaa@gmail.com',
      subject: `Message from ${data.name}`,
      html: `
  
          <h3>Informação</h3>
          <ul>
          <li>Nome: ${data.name}</li>
          <li>Email: ${data.email}</li>
          <li>Assunto: ${data.subject}</li>
          </ul>
  
          <h4>Mensagem</h4>
          <p>${data.message}</p>
         `,
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.send(error);
      }
      res.send(response);
    });

    smtpTransport.close();
  }

  return {
    getMethod, putMethod, postMethod,
  };
}

module.exports = contactController;
