import { IForm } from '../definitions/form.definitions';

export const MockForm: IForm[] = [
  {
    id: 'firstname',
    title: 'First name',
    icon: 'icon icon-address',
    width: 'w-50',
    type: 'text',
  },
  {
    id: 'lastname',
    title: 'Last name',
    icon: 'icon icon-address',
    width: 'w-50',
    type: 'text',
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'icon icon-envelope',
    width: 'w-100',
    type: 'text',
  },
  {
    id: 'message',
    title: 'Message',
    icon: 'icon icon-inbox',
    width: 'w-100',
    type: 'textarea',
  },
];
