import { useState } from "react";
import { AccordionPanel } from "..";
import Css from "./Accordion.module.css";

type OptionMeta = {
    answer: string;
    question: string;
};

interface AccordionProps {
    options: OptionMeta[];
}

export default function Accordion({ options }: AccordionProps) {
    const [indexOfOpenedPanel, setIndexOfOpenedPanel] = useState<
        number | undefined
    >(undefined);

    const panels = options.map((panel, index) => (
        <AccordionPanel
            key={index}
            question={panel.question}
            answer={panel.answer}
            isOpen={index == indexOfOpenedPanel}
            onOpen={() => {
                if (index == indexOfOpenedPanel) {
                    setIndexOfOpenedPanel(undefined);
                } else {
                    setIndexOfOpenedPanel(index);
                }
            }}
        />
    ));
    return <ul className={Css.panels}>{panels}</ul>;
}
