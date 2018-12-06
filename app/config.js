module.exports = {

	// Service name used in header. Eg: 'Renew your passport'
	serviceName : "Service name goes here",

	// Default port that prototype runs on. Default 3000
	port : "3000",

	// true/false, Enable or disable password protection on production
	useAuth : "true",

	// Automatically stores form data, and send to all views
	useAutoStoreData : "true",

	// Enable cookie-based session store (persists on restart),Please note 4KB cookie limit per domain, cookies too large will silently be ignored
	useCookieSessionStore : "false",

	// true/false, Enable or disable built-in docs and examples.
	useDocumentation : "true",

	// Force HTTP to redirect to HTTPS on production
	useHttps : "true",

	// Cookie warning - update link to service's cookie page.
	cookieText : "GOV.UK uses cookies to make the site simpler. <a href=\"#\">Find out more about cookies</a>",

	// true/false, Enable or disable Browser Sync
	useBrowserSync : "true",

	extensions : "true"
}