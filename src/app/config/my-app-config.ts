//export interface MyAppConfig {
// we are making "default export" of this JSON
export default {

    oidc: {
        clientId: '0oacw2vaehKqFkUzX5d7',
        issuer: 'https://dev-76318129.okta.com/oauth2/default',
        redirectUri: 'https://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }
}
