import {
    DownloadApp,
    FAQBlock,
    Features,
    Lunch,
    PurchaseDashboard,
    ReviewsBlock,
    StarterBlock,
} from "../../organisms";

export default function HomeTemplate() {
    return (
        <>
            <StarterBlock />
            <Features />
            <DownloadApp />
            <Lunch />
            <PurchaseDashboard />
            <ReviewsBlock />
            <FAQBlock />
        </>
    );
}
