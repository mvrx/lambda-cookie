'use strict';

import * as R from 'ramda';

let cookieBakery = {};
let toArray = R.compose(R.map(R.join('=')), R.toPairs);
let joinWithEqual = R.compose(R.of, R.join('='), R.take(2));
let toUTC = R.invoker(1, 'toUTCString')(new Date);
let toDate = (x) => new Date(x);
let maxDate = 'Fri, 31 Dec 9999 23:59:59 UTC';
let prependExpiration = R.concat('expires=');

// get :: String => String => String
cookieBakery.get = R.useWith(R.prop, R.identity, R.compose(R.fromPairs, R.map(R.split('=')), R.split(/; */)));

// set :: String => String => {k:v} => String
cookieBakery.set = (...args) => R.converge(
    R.compose(R.join('; '), R.concat), joinWithEqual,
    R.compose(R.unnest, R.map(toArray), R.drop(2)))(args);

// getKeys :: String => [String] 
cookieBakery.getKeys = R.compose(R.keys, R.fromPairs, R.map(R.split('=')), R.split(/; */));

cookieBakery.expires = R.cond([
    [R.is(Date), R.compose(prependExpiration, toUTC)],
    [R.is(String), R.compose(prependExpiration, toUTC, toDate)],
    [R.is(Number), R.concat('max-age=')],
    [R.equals(Infinity), R.compose(prependExpiration, toUTC, toDate, R.always(maxDate))]
]);