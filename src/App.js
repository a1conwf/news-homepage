import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Posts from "./components/Posts/Posts";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Posts />
			</main>
		</>
	);
};

export default App;
