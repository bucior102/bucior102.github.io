import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  
  MatAutocompleteModule,  
  MatButtonModule,  
  MatButtonToggleModule,  
  MatCardModule,  
  MatCheckboxModule,  
  MatChipsModule,  
  MatDatepickerModule,  
  MatDialogModule,  
  MatExpansionModule,  
  MatFormFieldModule,  
  MatGridListModule,  
  MatIconModule,  
  MatInputModule,  
  MatListModule,  
  MatMenuModule,  
  MatNativeDateModule,  
  MatOptionModule,  
  MatPaginatorModule,  
  MatProgressSpinnerModule,  
  MatSelectModule,  
  MatSidenavModule,  
  MatSlideToggleModule,  
  MatSnackBarModule,  
  MatTableModule,  
  MatToolbarModule,  
  MatTooltipModule,  
  MatRippleModule,  
  MatRadioModule,  
  MatTreeModule,  
  MatBadgeModule,  
  MatBottomSheetModule,  
  MatDividerModule,  
  MatProgressBarModule,  
  MatSliderModule,
  MatSortModule,  
  MatStepperModule,  
  MatTabsModule, 
} from '@angular/material'; 

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { GithubPagesDeployComponent } from './github-pages-deploy/github-pages-deploy.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    StartPageComponent,
    GithubPagesDeployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,  
    MatButtonModule,  
    MatButtonToggleModule,  
    MatCardModule,  
    MatCheckboxModule,  
    MatChipsModule,  
    MatDatepickerModule,  
    MatDialogModule,  
    MatExpansionModule,  
    MatFormFieldModule,  
    MatGridListModule,  
    MatIconModule,  
    MatInputModule,  
    MatListModule,  
    MatMenuModule,  
    MatNativeDateModule,  
    MatOptionModule,  
    MatPaginatorModule,  
    MatProgressSpinnerModule,  
    MatSelectModule,  
    MatSidenavModule,  
    MatSlideToggleModule,  
    MatSnackBarModule,  
    MatTableModule,  
    MatToolbarModule,  
    MatTooltipModule,  
    MatRippleModule,  
    MatRadioModule,  
    MatTreeModule,  
    MatBadgeModule,  
    MatBottomSheetModule,  
    MatDividerModule,  
    MatProgressBarModule,  
    MatSliderModule,
    MatSortModule,  
    MatStepperModule,  
    MatTabsModule,
    RouterModule.forRoot(routes),
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SideNavComponent
      ]
})
export class AppModule { }
