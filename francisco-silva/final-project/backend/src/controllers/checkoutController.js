const nodemailer = require('nodemailer');

function checkoutController(Order) {
  function getMethod(req, res) {
    const query = {};
    Order.find(query, (errorFindOrder, orders) => {
      if (errorFindOrder) {
        return res.send(errorFindOrder);
      }
      return res.json(orders);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Order.create(query, (errorPutOrder, order) => {
      if (errorPutOrder) {
        return res.send(errorPutOrder);
      }
      return res.json(order);
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
  
          <h3>Informação de pedido</h3>
          <ul>
          <li>Nome: ${data.name}</li>
          <li>Email: ${data.email}</li>
          <li>Telefone: ${data.phoneNumber}</li>
          <li>Morada: ${data.address}</li>
          <li>Codigo Postal: ${data.postalCode}</li>
          </ul>
    
          <h4>Pedido</h4>
          ${data.cartList.map((product) => `<li>
          ${product.quantity}
          x
          ${product.product[0].name}
          -
          ${product.product[0].quantity}
          </li>`)}
          
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

module.exports = checkoutController;
