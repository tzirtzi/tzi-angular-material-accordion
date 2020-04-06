import {Component} from '@angular/core';
import { IAccordionItem } from './accordion-item';
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {

  accordionItems: IAccordionItem[] = [
    {
      'id': 1,
      'type':'PersonalData',
      'isDisabled': false,
      'title': 'Personal data',
      'titleProperty':{
        'stateOpen': false,
        'open': null,
        'closed': null
      },
      'data': {
        'name': {
          'first': null,
          'last': null
        },
        'age': 0
      }
    },
    {
      'id': 2,
      'type':'text',
      'isDisabled': false,
      'title': 'Self aware panel',
      'titleProperty':{
        'stateOpen': false,
        'open': 'Currently I am open',
        'closed': 'Currently I am closed'
      },
      'data': {
        'text': 'I\'m visible because I am open'
      }
    },
    {
      'id': 3,
      'type':'text',
      'isDisabled': true,
      'title': 'Self aware panel, disabled',
      'titleProperty':{
        'stateOpen': false,
        'open': '',
        'closed': '( 1 Options inside)'
      },
      'data': {
        'text' : 'Here it is supposed to be your 1st option'
      }
    },
    {
      'id': 4,
      'type':'text',
      'isDisabled': false,
      'title': 'Self aware panel',
      'titleProperty':{
        'stateOpen': false,
        'open': '',
        'closed': '( 1 Options inside)'
      },
      'data': {
        'text' : 'Here it is supposed to be your 1st option'
      }
    }
  ]

  trackByFn(index:number, el:any): number {
    return el.id;
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */