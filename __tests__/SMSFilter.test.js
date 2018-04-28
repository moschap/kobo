import { applyFilterToSMS } from '../src/helpers/SMSHelpers';

it('matches regex with the correct message', () => {
    expect(applyFilterToSMS({ body: 'AMT: NGN19,500,500.00 CR'})).toBeFalsy();
})