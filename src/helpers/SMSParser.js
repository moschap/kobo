import P from 'parsimmon';

export let Parser = P.createLanguage({

    // Account parser:

    Acct: (r) => P.string('Acct:')
        .skip(r._)
        .skip(P.string('*').many())
        .then(P.regexp(/\d{4}/))
        .desc('Source account number'),

    // Amount parsers:

    Currency: () => P.regexp(/[A-Z]{3}/).desc('Currency symbol'),
    Value: () => P.regexp(/\d[0-9,.]+\d/).desc('Amount value')
        .map(x => Number(x.replace(/,/, ''))),
    Credit: () => P.string('CR').map(x => true),
    Debit: () => P.string('DR').map(x => false),
    Amt: (r) => P.seqObj(
        P.string('Amt:'),
        r._,
        ['currency', r.Currency],
        ['value', r.Value],
        r._,
        ['credit', P.alt(r.Credit, r.Debit)]
    ).desc('Transaction amount'),
    _: () => P.optWhitespace,

    // Message parser:

    Stan: () => P.string('STAN').then(P.regexp(/\d+/)).desc('STAN'),
    Desc: () => P.string('Desc:').then(P.regexp(/[^\r\n]+/)).desc('Description'),
    Message: (r) => P.seqObj(
        ['account', r.Acct],
        P.whitespace,
        ['amount', r.Amt],
        P.whitespace,
        ['description', r.Desc],
        P.any.many()
    ).desc('Transaction notification')
});
