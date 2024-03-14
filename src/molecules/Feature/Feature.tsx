interface FeatureProps {
    title: string;
    paragraph: string;
}

export default function Feature({ title, paragraph }: FeatureProps) {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
}
