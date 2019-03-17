import { Component, OnInit, HostListener, Input } from '@angular/core';
import { SideNavTree } from '../common/interfaces/side-nav-tree';
import { FormControl } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ViewName } from '../common/enums/view-name.enum';

const TREE_DATA: SideNavTree[] =
  [
    {
      name: 'Start',
      icon: 'info',
      viewId: 0,
      children: []
    },
    {
      name: 'Angular',
      icon: 'web',
      children: [
        {name: 'Github Pages deploy', viewId: 1},
      ]
    },
  ];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  mode = new FormControl('side');
  sideMode = new FormControl('side');
  overMode = new FormControl('over');
  treeControl = new NestedTreeControl<SideNavTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SideNavTree>();

  @Input() isMobileView: boolean = false;
  @Input() sidebarCollapsed: boolean = false;

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.setIsMobileView();
    this.setSidenavMode();
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.setIsMobileView(event);
    this.setSidenavMode();
  }
  private setSidenavMode() { 
    this.mode = this.isMobileView ? this.overMode : this.sideMode; 
  }

  private setIsMobileView(event?: any) { 
    this.isMobileView = event != null ? (event.target.innerWidth <= 767) : window.innerWidth <= 767; 
    if (this.isMobileView) { 
      this.sidebarCollapsed = false; 
    } 
  }

  hasChild = (_: number, node: SideNavTree) => !!node.children && node.children.length >= 0;
  
  public sidebarCollapseButtonClicked() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  public btnClicked(event: any) { 
    if (event != null) 
    { 
      switch (event as ViewName) 
      { 
        case ViewName.StartPage: { 
          this.router.navigate(['/start']);
          break; 
        }
        case ViewName.GithubPagesDeploy: { 
          this.router.navigate(['/gh-pages-deploy']);
          break; 
        }
        default: { 
          break; 
        } 
      } 
    } 
  }
}
