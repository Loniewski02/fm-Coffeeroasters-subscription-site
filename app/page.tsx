import Benefits from './components/home/Benefits';
import Collection from './components/home/Colection';
import Header from './components/home/Header';
import SectionHow from './components/home/SectionHow';

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
