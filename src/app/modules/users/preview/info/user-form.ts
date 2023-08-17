import { FormControl, FormGroup } from '@angular/forms';

export const userForm = new FormGroup({
  name: new FormControl<string>('', {
    nonNullable: true
  }),
  username: new FormControl<string>('', {
    nonNullable: true
  }),
  email: new FormControl<string>('', {
    nonNullable: true
  }),
  phone: new FormControl<string>('', {
    nonNullable: true
  }),
  website: new FormControl<string>('', {
    nonNullable: true
  }),
  address: new FormGroup({
    street: new FormControl<string>('', {
      nonNullable: true
    }),
    suite: new FormControl<string>('', {
      nonNullable: true
    }),
    city: new FormControl<string>('', {
      nonNullable: true
    }),
    zipcode: new FormControl<string>('', {
      nonNullable: true
    }),
    geo: new FormGroup({
      lat: new FormControl<string>('', {
        nonNullable: true
      }),
      lng: new FormControl<string>('', {
        nonNullable: true
      })
    })
  }),
  company: new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true
    }),
    catchPhrase: new FormControl<string>('', {
      nonNullable: true
    }),
    bs: new FormControl<string>('', {
      nonNullable: true
    })
  })
});
