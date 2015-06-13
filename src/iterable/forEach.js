"use strict";

/**
 * Executes the given function and yields the items of the iterator 
 *
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3]::forEach( function () {
 *     console.log(this)
 * }) // prints 1, 2, 3
 * ```
*/
export function * forEach <iT> (
    exec : (_this : iT) => any,
) : Iterable<iT> {
    for ( const item of this ) {
        item::exec();
        yield item;
    }
};
