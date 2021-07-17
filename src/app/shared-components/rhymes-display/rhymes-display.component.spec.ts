import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RhymesDisplayComponent} from "./rhymes-display.component";
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {SharedComponentsModule} from "../shared-components.module";
import {By} from "@angular/platform-browser";
import {MatCardHarness} from "@angular/material/card/testing";



describe('RhymesDisplayComponent', () => {
  let component: RhymesDisplayComponent;
  let fixture: ComponentFixture<RhymesDisplayComponent>;
  let loader: HarnessLoader;


  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [SharedComponentsModule], declarations: [RhymesDisplayComponent]})
      .compileComponents();
    fixture = TestBed.createComponent(RhymesDisplayComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('by default animalList should be empty array', () => {
    expect(component.animalList).toHaveSize(0);
  });

  it('component should be created n-times',  () => {
    component.animalList = [{animal: 'ant', sound: '...'},{animal: 'ant', sound: '...'}];
    fixture.detectChanges();
    const card = fixture.debugElement.queryAll(By.css('.rhyme-wrap'));
    expect(card.length).toEqual(component.animalList.length);
  });

  it('should load mat card harnesses', async () => {
    const card = await loader.getHarness(MatCardHarness);
    expect(card).toBeTruthy();
  });

});
