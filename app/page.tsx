import Benefits from './home/components/Benefits';
import Collection from './home/components/Colection';
import Header from './home/components/Header';
import SectionHow from './home/components/SectionHow';

export default function Home() {
	return (
		<main>
			<Header />
			<Collection />
			<Benefits />
			<SectionHow />
		</main>
	);
}
