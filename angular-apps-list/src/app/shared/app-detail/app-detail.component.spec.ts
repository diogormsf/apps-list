import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDetailComponent } from './app-detail.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { App } from 'src/app/models/App';
import { Component } from '@angular/core';
import { Subscription } from 'src/app/models/Subscription';
import { By } from '@angular/platform-browser';

describe('AppDetailComponent', () => {
  let component: AppDetailComponent;
  let fixture: ComponentFixture<AppDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule
      ],
      declarations: [ AppDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailComponent);
    component = fixture.componentInstance;
    component.app = new App().deserialize({
      name: '',
      description: '',
      categories: [],
      subscriptions: []
    });
    fixture.detectChanges();
  });

  it('should show app name', () => {
    const appObj = {
      name: 'AppTest',
      description: 'App for testing component',
      categories: ['Test'],
      subscriptions: []
    };
    const newApp = new App().deserialize(appObj);
    component.app = newApp;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('mat-card-title').innerText).toContain(appObj.name);
  });

  it('should have same number of subscriptions', () => {
    const arraySubs = [];

    for (let i = 0; i <= 10; i++) {
      arraySubs.push(new Subscription().deserialize({
        name: 'test',
        price: Math.floor(Math.random() * 1001)
      }));
    }

    const appObj = {
      name: 'AppTest',
      description: 'App for testing component',
      categories: ['Test'],
      subscriptions: arraySubs
    };
    const newApp = new App().deserialize(appObj);
    component.app = newApp;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.subscriptionItem')).length).toEqual(arraySubs.length);
  });
});
