import { STORE_NAME, STORE_INFO, LINE_URL, INSTAGRAM_URL, EMAIL_ADDRESS } from '@/constants';

export default function Footer() {
    return (
        <footer className="relative z-20 bg-footer-bg text-white">
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-3">{STORE_NAME}</h3>
                        <p className="text-footer-text text-sm leading-relaxed">
                            あなたの事業の「IT担当」。
                            <br />
                            現場に合わせた仕組みで、業務を効率化します。
                        </p>
                        <div className="mt-4 flex gap-4 text-sm">
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-footer-text hover:text-white transition-colors underline underline-offset-4"
                            >
                                Instagram
                            </a>
                            <a
                                href={LINE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-footer-text hover:text-white transition-colors underline underline-offset-4"
                            >
                                LINE
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3">会社情報</h4>
                        <div className="text-footer-text text-sm leading-relaxed space-y-1">
                            <p>{STORE_INFO.postalCode}</p>
                            <p>{STORE_INFO.address}</p>
                            <p>{STORE_INFO.openingHours}（{STORE_INFO.closedDay}休み）</p>
                            <p>
                                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">
                                    {EMAIL_ADDRESS}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} RES LLC All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
