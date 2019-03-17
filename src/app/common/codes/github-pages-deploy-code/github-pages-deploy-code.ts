export class GithubPagesDeployCode {
    public static readonly PACKAGE_JSON_DEPLOY_JSON_CODE :string = '"deploy": "ng build --prod --base-href https://twojaNazwaUzytkownika.github.io/nazwaAplikacji/ && angular-cli-ghpages --branch master --no-silent"' ; 
    public static readonly NPM_INSTALL_GHPAGES_CONSOLE_CODE :string = 'npm install -g angular-cli-ghpages';
    public static readonly NPM_RUN_DEPLOY_CONSOLE_CODE :string = 'npm run deploy';
    public static readonly NPM_CREATE_PROJECT_CONSOLE_CODE :string = 'ng new nazwaAplikacji --directory ./';
}
