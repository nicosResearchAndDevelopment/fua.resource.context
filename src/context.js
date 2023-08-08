module.exports = _sortAndFreeze({
    ...require('../data/custom.json'),
    ...require('../data/common.json'),
    ...require('../data/core.json')
});

/**
 * @template T
 * @param {T} target
 * @returns {Readonly<T>}
 * @private
 */
function _sortAndFreeze(target) {
    const entries = Object.entries(target);
    entries.sort(([keyA], [keyB]) => keyA < keyB ? -1 : 1);
    return Object.freeze(Object.fromEntries(entries));
}
