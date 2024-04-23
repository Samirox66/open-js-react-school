import Css from "./TextArea.module.css";

interface TextAreaProps {
    value: string;
    placeholder?: string;
    onInput: (value: string) => void;
}

export default function TextArea({
    value,
    placeholder,
    onInput,
}: TextAreaProps) {
    return (
        <textarea
            className={Css.textArea}
            value={value}
            placeholder={placeholder}
            onInput={(evt) => onInput(evt.currentTarget.value)}
        ></textarea>
    );
}
