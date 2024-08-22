import { it, expect, describe } from "vitest";
import { todos, addTodo, clearTodos } from "./global.todo";

describe("global", () => {
  it("first", () => {
    addTodo("健身")

    // 
    expect(todos.length).toBe(1)
    expect(todos[0].title).toBe("健身")

    // 低层次代码
    // todos.length = 0
    //高层次代码
    clearTodos()
  })
  it("second", () => {
    addTodo("上班")

    // 
    expect(todos.length).toBe(1)
    expect(todos[0].title).toBe("上班")

    clearTodos()
  })
})
