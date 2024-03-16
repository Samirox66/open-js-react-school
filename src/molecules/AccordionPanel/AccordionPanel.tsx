import { Divider } from "../../atoms";
import Css from "./AccordionPanel.module.css";

export interface AccordionPanelProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onOpen: () => void;
}

export default function AccordionPanel({
    question,
    answer,
    isOpen,
    onOpen,
}: AccordionPanelProps) {
    return (
        <li
            style={{ maxHeight: isOpen ? "160px" : "100px" }}
            className={Css.panel}
        >
            <div className={Css.questionContainer}>
                <p className={Css.question}>{question}</p>

                <button onClick={onOpen} className={Css.openBtn}>
                    {isOpen ? "+" : "-"}
                </button>
            </div>
            <p
                style={{
                    opacity: isOpen ? 1 : 0,
                    marginBottom: isOpen ? "40px" : "20px",
                }}
                className={Css.answer}
            >
                {isOpen && answer}
            </p>
            <Divider />
        </li>
    );
}
