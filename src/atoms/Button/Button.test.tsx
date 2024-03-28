import { Button } from "..";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
    test("test if button semantic tag is used", () => {
        render(<Button type="primary" />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    test("test if text content has been passed correctly", () => {
        render(<Button type="primary">Test</Button>);
        expect(screen.getByRole("button")).toHaveTextContent("Test");
    });
    test("test if onClick function is passed", () => {
        const handleOnClick = jest.fn(() => {});
        render(<Button type="primary" onClick={handleOnClick} />);
        fireEvent.click(screen.getByRole("button"));
        expect(handleOnClick).toHaveBeenCalledTimes(1);
    });
    test("test if styles are passed", () => {
        render(<Button type="primary" style={{ color: "red" }} />);
        expect(screen.getByRole("button")).toHaveStyle("color: red");
    });
});
