import React from "react";

//Style
import "./Hero.scss";

//Data
import {newsData} from "../../data/data";

//Images
import web3Mob from "../../assets/images/image-web-3-mobile.jpg";
import web3Desk from "../../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__inner">
					<div className="hero__about">
						<picture>
							<source media="(max-width: 1200px)" srcSet={`${web3Mob} 686w`} />
							<source srcSet={`${web3Desk} 1460w`} />
							<img className="hero__about-img" src={web3Desk} alt="web3-img" />
						</picture>
						<div className="hero__about-content">
							<h1>The Bright Future of Web 3.0?</h1>

							<div className="hero__about-content-info">
								<p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
								<a href="#!" className="btn">
									Read more
								</a>
							</div>
						</div>
					</div>
					<aside className="hero__news">
						<h2 className="hero__news-title">New</h2>
						{newsData.map((article) => (
							<article className="article" key={article.id}>
								<h3 className="article__title">{article.title}</h3>
								<p className="article__text">{article.text}</p>
								<div className="separator"></div>
							</article>
						))}
					</aside>
				</div>
			</div>
		</section>
	);
};

export default Hero;
