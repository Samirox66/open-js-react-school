import {
    DownloadApp,
    FAQBlock,
    Features,
    Footer,
    Header,
    Lunch,
    PurchaseDashboard,
    ReviewsBlock,
    StarterBlock,
} from "../../organisms";

export default function HomeTemplate() {
    return (
        <>
            <Header />
            <StarterBlock />
            <Features />
            <DownloadApp />
            <Lunch />
            <PurchaseDashboard />
            <ReviewsBlock />
            <FAQBlock />
            <Footer />
        </>
    );
}
