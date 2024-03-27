import { Button } from "..";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    test("test if button semantic tag is used", () => {
        render(<Button type="primary" />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    test("test if text content has been passed correctly", () => {
        render(<Button type="primary">Test</Button>);
        expect(screen.getByRole("button")).toHaveTextContent("Test");
    });
});
