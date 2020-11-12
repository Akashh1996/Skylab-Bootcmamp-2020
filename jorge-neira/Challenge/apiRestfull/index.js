import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 3050;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = {
	name: '',
	surnName: ''
};
let response = {
	error: false,
	code: 200,
	message: ''
};

app.get('/', (req, res) => {
	response = {
		error: true,
		code: 200,
		message: 'Initial Point'
	};
	res.send(response);
});

app
	.route('/user')
	.get((req, res) => {
		response = {
			error: false,
			code: 200,
			message: ''
		};
		user.name === '' || user.surnName === ''
			? response && {
					error: true,
					code: 501,
					message: 'User not created'
			  }
			: (response = {
					error: false,
					code: 200,
					message: 'User answer',
					response: user
			  });
		res.send(response);
	})
	.post((req, res) => {
		!req.body.name || !req.body.surnName
			? (response = {
					error: true,
					code: 502,
					message: 'name and surname required'
			  })
			: user.name !== '' || user.surnName !== ''
			? (response = {
					error: true,
					code: 503,
					message: 'User already created'
			  })
			: (user = {
					name: req.body.name,
					surnName: req.body.surnName
			  });
		response = {
			error: false,
			code: 200,
			message: 'User created succesfully',
			response: user
		};
		res.send(response);
	})
	.put((req, res) => {
		!req.body.name || !req.body.surnName
			? (response = {
					error: true,
					code: 502,
					message: 'name and surname are required'
			  })
			: user.name === '' || user.surnName === ''
			? (response = {
					error: true,
					code: 501,
					message: 'User cannot be created'
			  })
			: (user = {
					name: req.body.name,
					surnName: req.body.surnName
			  });
		response = {
			error: false,
			code: 200,
			message: 'user update',
			response: user
		};
		res.send(response);
	})
	.delete((req, res) => {
		user.name === '' || user.surnName === ''
			? (response = {
					error: true,
					code: 501,
					message: 'User has not been created'
			  })
			: (response = {
					error: false,
					code: 200,
					message: 'user deleted'
			  });
		user = {
			name: '',
			surnName: ''
		};
		res.send(response);
	});

app.use((req, res, next) => {
	response = {
		error: true,
		code: 404,
		message: 'URL not found'
	};
	res.status(404).send(response);
});

app.listen(port, () => {
	console.log('Server initialize at port 3000');
});
