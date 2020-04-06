export interface IAccordionItem {
  'id': number,
  'type': string,
  'isDisabled': boolean,
  'title': string,
  'titleProperty':{
    'stateOpen'?: boolean | null,
    'open'?: string | null,
    'closed'?: string | null
  },
  'data': any
}