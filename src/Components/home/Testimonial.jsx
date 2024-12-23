import React, { Fragment, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faQuoteLeft,
	faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import '../../assets/css/testimonial.css'
const testimonialList = [
	{
		name: "Ali Ballitar",
		content:
			"The file service is honestly incredibly fast, taking only minutes to deliver. I can fully rely on it. So far, all the files have worked perfectly, and I have had no issues with my clients. Customer satisfaction is highly valued here. The price-performance ratio is excellent. What really stands out is the lightning-fast service and the support from the staff.",
	},
	{
		name: "Sara Tailor",
		content:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
	},
	{
		name: "John Leo",
		content:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
	},
];

const TestimonialItem = ({ testimonial }) => {
	return (
		<Fragment>
			<p className="position-relative ezy__testimonial17-content mb-4 mb-md-5">
				<FontAwesomeIcon
					icon={faQuoteLeft}
					className="ezy__testimonial17-quote"
				/>
				{testimonial.content}
				<FontAwesomeIcon
					icon={faQuoteRight}
					className="ezy__testimonial17-quote"
				/>
			</p>
			<h4 className="ezy__testimonial17-name fs-4 mb-2">{testimonial.name}</h4>
			<p className="ezy__testimonial17-title mb-0">{testimonial.position}</p>
		</Fragment>
	);
};

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonial17 = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => setIndex(selectedIndex);

	return (
		<section className="ezy__testimonial17 light">
			<Container>
				<Row className="justify-content-between">
					<Col xs={12} md={5} className="position-relative">
						<div
							className="ezy__testimonial17-bg-holder"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg)",
							}}
						/>
					</Col>
					<Col xs={12} md={6} className="mt-5 mt-md-0">
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							controls={false}
							indicators={true}
							className="d-flex align-items-center h-100"
						>
							{testimonialList.map((testimonial, i) => (
								<Carousel.Item key={i}>
									<TestimonialItem testimonial={testimonial} />
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
				</Row>
			</Container>
		</section>
	);
};


export default Testimonial17;