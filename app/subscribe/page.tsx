import Header from '../components/layout/Header';

const Subscribe = () => {
	return (
		<main>
			<Header
				font='big'
				title='Create a plan'
				desc='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
				bgClass="bg-[url('../public/assets/plan/mobile/image-hero-blackcup.jpg')] md:bg-[url('../public/assets/plan/tablet/image-hero-blackcup.jpg')] lg:bg-[url('../public/assets/plan/desktop/image-hero-blackcup.jpg')]"
			/>
		</main>
	);
};

export default Subscribe;
