interface LogoProps {
    imageSrc: string;
    alt: string;
}

export default function Logo({ imageSrc, alt }: LogoProps) {
    return <img alt={alt} src={imageSrc} />;
}
