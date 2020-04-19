const sgMail = require('@sendgrid/mail');
const EMAIL_TEMPLATES = require('./templates');

const from = process.env.EMAIL_FROM;
sgMail.setApiKey(process.env.SG_API_KEY);

const sendEmailWithName = async (email, name, templateName) => {
    const msg = {
        to: email,
        from,
        subject: EMAIL_TEMPLATES[templateName].subject,
        text: EMAIL_TEMPLATES[templateName].body(name)
    };
    try {
        await sgMail.send(msg);
    } catch (e) {
        console.log('Email not sent', e.message);
    }
}

module.exports = {
    sendEmailWithName
};
