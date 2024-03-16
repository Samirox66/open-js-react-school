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

import Css from "./HomeTemplate.module.css";

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
