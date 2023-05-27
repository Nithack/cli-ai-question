import { describe, expect, jest } from "@jest/globals";
import CLIHandler from "../../src/interface/cli/ClIHandler.js";

describe("test cliHandler", () => {
  test("should be return exception because command not found", () => {
    const cliHandler = new CLIHandler();
    expect(cliHandler.type("test")).rejects.toThrowError("Command not found");
  });
  test("should be execut command and return result", async () => {
    const cliHandler = new CLIHandler();
    cliHandler.on("test", () => "test");
    expect(await cliHandler.type("test")).toEqual("test");
  });

    test("should be write result", async () => {
    const cliHandler = new CLIHandler();
    cliHandler.on("test", () => "test");
    const spy = jest.spyOn(console, 'log')
    cliHandler.write('test')
    expect(spy).toHaveBeenCalledWith('test')
    });
});
