"use strict";

import { forEach } from "../../../src/iterable/forEach";

describe("forEach()", function () {
    it("should execute the given function and yield", function () {
        var i=0;
        [...[1,2,3]::forEach( function () {
          this.should.equal(++i);
        })].should.deep.equal([1,2,3]);
        i.should.equal(3);
    });
});
