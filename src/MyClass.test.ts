import { describe, it } from "node:test"
import { expect } from "expect"
import { MyClass } from "./MyClass.ts"

describe("Default test", () => {
  it("should work", () => {
    const myClass = new MyClass()

    const result = myClass.greet()

    expect(result).toBe("Hello, world!")
  })
})
