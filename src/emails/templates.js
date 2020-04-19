const EMAIL_TEMPLATES = {
    WELCOME: {
        subject: 'Thanks for joining in!',
        body: (name) => `Welcome to the app, ${name}. Let me know how you get along with the app.`
    },
    DELETE: {
        subject: 'Time to say goodbye!',
        body: (name) => `Good bye, ${name}. Your account has been deleted. Let me know why you are leaving Task Manager.`
    }
}

module.exports = EMAIL_TEMPLATES;