interface LogoProps {
    imageSrc: string;
    alt: string;
    width?: string;
    height?: string;
}

export default function Logo({ imageSrc, alt, width, height }: LogoProps) {
    const styles = width || height ? { width, height } : {};
    return <img alt={alt} style={styles} src={imageSrc} />;
}
