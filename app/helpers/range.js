import Ember from 'ember';

export function range(params/*, hash*/) {

    let count = params[0];

    let ret = [];
    for(let i = 0; i < count; i++) {
        ret.push(i);
    }
    
    return ret;
}

export default Ember.Helper.helper(range);
