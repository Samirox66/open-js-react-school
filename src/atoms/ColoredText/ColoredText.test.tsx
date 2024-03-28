import { render, screen } from "@testing-library/react";
import { ColoredText } from "..";

describe("ColoredText", () => {
    test("test if color is used", () => {
        render(<ColoredText color="blue" />);
        expect(screen.getByTestId("colored-text")).toHaveStyle("color: blue");
    });
});
