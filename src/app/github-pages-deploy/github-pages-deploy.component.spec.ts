import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPagesDeployComponent } from './github-pages-deploy.component';

describe('GithubPagesDeployComponent', () => {
  let component: GithubPagesDeployComponent;
  let fixture: ComponentFixture<GithubPagesDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPagesDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPagesDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
