
const CELL_SIZE = 4;

const nibble2bits = function(nibble) {
    let t = ( parseInt(nibble, 16) >>> 0 ).toString(2);
    t = t.split('');
    t = t.slice(-CELL_SIZE); // only grab last 4 in case longer than 4 bits
    t = Array(CELL_SIZE - t.length).fill(0).concat(t);
    t = t.map(v => parseInt(v));
    return t;
}

const bits2nibble = function(bits) {
    let t = bits.slice(-CELL_SIZE);
    t = t.map(v => v.toString(10));
    t = t.join('');
    t = parseInt(t, 2).toString(16);
    return t;
}

const bits2ints = function(bits) {
    let a = bits.slice(0, 2);
    let b = bits.slice(2, 4);
    a = parseInt(bits2nibble(a), 16);
    b = parseInt(bits2nibble(b), 16);
    return [a, b];
}

const nibbleState2bitsState = function(nibbleState) {
    return nibbleState.map(r => r.map(v => nibble2bits(v)));
}

const bitsState2nibbleState = function(bitsState) {
    return bitsState.map(r => r.map(v => bits2nibble(v)));
}

export const SUB = [
    ['6', '0', '9', 'a'],
    ['4', 'd', '1', '8'],
    ['2', 'f', 'e', '7'],
    ['3', 'c', '5', 'b'],
];

export const INV_SUB = [
    ['1', '6', '8', 'c'],
    ['4', 'e', '0', 'b'],
    ['7', '2', '3', 'f'],
    ['d', '5', 'a', '9'],
];

/*
 * *********************************
 * NOTE
 * 
 * All operations assume that the input is in BITS form
 *
*/

const SubBytes = function(state) {
    const statep = state.slice();

    return statep;
};

const ShiftRows = function(state) {
    const statep = state.slice();

    return statep;
};

const MixColumns = function(state) {
    const statep = state.slice();

    return statep;
};

const AddRoundKey = function(state, w) {
    const statep = state.slice();

    return statep;
};

