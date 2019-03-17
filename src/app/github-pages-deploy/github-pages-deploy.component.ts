import { Component, OnInit } from '@angular/core';
import { GithubPagesDeployCode } from '../common/codes/github-pages-deploy-code/github-pages-deploy-code';

@Component({
  selector: 'app-github-pages-deploy',
  templateUrl: './github-pages-deploy.component.html',
  styleUrls: ['./github-pages-deploy.component.css']
})
export class GithubPagesDeployComponent implements OnInit {

  public DeployJsonCode: string;
  public NpmGhPagesCode: string;
  public NpmRunDeployCode: string;
  public NpmCreateProjectCode: string;

  constructor() { 
    this.DeployJsonCode = GithubPagesDeployCode.PACKAGE_JSON_DEPLOY_JSON_CODE;
    this.NpmGhPagesCode = GithubPagesDeployCode.NPM_INSTALL_GHPAGES_CONSOLE_CODE;
    this.NpmRunDeployCode = GithubPagesDeployCode.NPM_RUN_DEPLOY_CONSOLE_CODE;
    this.NpmCreateProjectCode = GithubPagesDeployCode.NPM_CREATE_PROJECT_CONSOLE_CODE;
  }

  ngOnInit() {
  }

}
