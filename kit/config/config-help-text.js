// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  serviceName: ['Service name used in header. Eg: \'Renew your passport\''],
  useAuth: ['true/false, Enable or disable password protection on production'],
  port: ['Default port that prototype runs on. Default 3000'],
  useAutoStoreData: ['Automatically stores form data, and send to all views'],
  useCookieSessionStore: ['Enable cookie-based session store (persists on restart)','Please note 4KB cookie limit per domain, cookies too large will silently be ignored'],
  useDocumentation: ['true/false, Enable or disable built-in docs and examples.'],
  useHttps: ['Force HTTP to redirect to HTTPS on production'],
  cookieText: ['Cookie warning - update link to service\'s cookie page.'],
  useBrowserSync: ['true/false, Enable or disable Browser Sync']
}
