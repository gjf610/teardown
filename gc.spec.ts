import { test, expect } from "vitest";
import { Dog } from './gc'

test("gc", () => {
  const dog = new Dog('susu')

  expect(dog.sayHi()).toBe("hi, my name is susu. How are you?")

})