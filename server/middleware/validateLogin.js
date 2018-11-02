//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

export default (req, res, next) => {
    let pass = true;
    const emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if(req.body.email) req.body.email = req.body.email.trim();
    const values = req.body;
    const required = ['email', 'password'];
    let errors = {};
    for (let i = 0; i < required.length; i += 1) {
        if (!values[required[i]]) { pass = false; errors[required[i]] = `${required[i]} is required!`; }
    }
    if(values.email && (!values.email.replace(/\s/g, '').length || !emailFilter.test(values.email))) {
        errors.email = 'Email can not be blank or format is wrong'; pass = false;
    }
    if(values.password && !values.password.toString().replace(/\s/g, '').length) {
        errors.password = 'Password can not be blank'; pass = false;
    }
    if (pass === false) { res.status(400).json({ error: errors }); } else {
        req.body.email = req.body.email.trim();
        req.body.password = req.body.password.toString().trim();
        next(); }
};