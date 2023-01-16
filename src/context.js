module.exports = _sortAndFreeze({
    ...require('./_custom.json'),
    ...require('./_common.json'),
    ...require('./_basic.json')
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
