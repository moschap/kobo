import { applyFilterToSMS } from '../src/helpers/SMSHelpers';

it('matches regex with the correct message', () => {
    expect(applyFilterToSMS({ body: 'AMT: NGN10,000.00 CR'})).toBeFalsy();
})