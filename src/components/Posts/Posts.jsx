import React from "react";

//Style
import "./Posts.scss";

//Data
import {postsData} from "../../data/data";

const Posts = () => {
	return (
		<section className="posts">
			<div className="container">
				<div className="posts__inner">
					{postsData.map((post) => (
						<article className="post" key={post.id}>
							<img src={post.img} alt="post-img" className="post-img" />
							<div className="post__content">
								<span className="post__content-num">{post.num}</span>
								<h4 className="post__content-title">{post.title}</h4>
								<p className="post__content-text">{post.text}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Posts;
