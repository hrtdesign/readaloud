import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { Features } from "./components/features";
import { QuerySection } from "./components/queries";
import { Settings } from "./components/settings";

export default function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<Features />
			<Settings />
			<QuerySection />
		</>
	)
}