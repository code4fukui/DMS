import * as t from "https://deno.land/std/testing/asserts.ts";
import { dms2d, sdms2d } from "./DMS.js";

Deno.test("dms2d", () => {
  t.assertEquals(dms2d(0), 0);
  t.assertEquals(dms2d(1, 1), 1 + 1 / 60);
  t.assertEquals(dms2d(1, 1, 1), 1 + 1 / 60 + 1 / (60 * 60));
});
Deno.test("sdms2d", () => {
  t.assertEquals(sdms2d("0 0 0N"), 0);
  t.assertEquals(sdms2d("1 1 1N"), 1 + 1 / 60 + 1 / (60 * 60));
  t.assertEquals(sdms2d("44°1′N"), 44 + 1 / 60);
  t.assertEquals(sdms2d("145°12′E"), 145 + 12 / 60);
});
