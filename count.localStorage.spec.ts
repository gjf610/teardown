import { test, afterEach, expect, describe, beforeAll } from "vitest";
import { clearCount, getCount, increaseCount } from "./count.localStorage";
import { Window } from "happy-dom";
describe("count", () => {
  beforeAll(() => {
    const window = new Window()
    globalThis.localStorage = window.localStorage
  })

  afterEach(() => {
    clearCount()
  })
  test("first should count ++", () => {
    increaseCount()

    expect(getCount()).toBe(1)
  })

  test("second should count ++", () => {
    increaseCount()

    expect(getCount()).toBe(1)
  })
})


