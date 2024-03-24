import { ArrowButton } from "../../atoms";
import Css from "./PaginationButtons.module.css";

interface PaginationButtonsProps {
    onLeftButtonClick: React.MouseEventHandler<HTMLButtonElement>;
    onRightButtonClick: React.MouseEventHandler<HTMLButtonElement>;
    isLeftDisabled: boolean;
    isRightDisabled: boolean;
}

export default function PaginationButtons({
    onLeftButtonClick,
    onRightButtonClick,
    isLeftDisabled,
    isRightDisabled,
}: PaginationButtonsProps) {
    return (
        <div className={Css.container}>
            <ArrowButton
                direction="left"
                onClick={onLeftButtonClick}
                disabled={isLeftDisabled}
            />
            <ArrowButton
                direction="right"
                onClick={onRightButtonClick}
                disabled={isRightDisabled}
            />
        </div>
    );
}
