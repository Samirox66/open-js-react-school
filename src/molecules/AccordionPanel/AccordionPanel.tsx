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
        <li className={Css.panel}>
            <div className={Css.questionContainer}>
                <p className={Css.question}>{question}</p>

                <button onClick={onOpen} className={Css.openBtn}>
                    {isOpen ? "+" : "-"}
                </button>
            </div>
            {isOpen && <p className={Css.answer}>{answer}</p>}
            <Divider />
        </li>
    );
}
