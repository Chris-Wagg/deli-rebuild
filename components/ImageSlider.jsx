export default function ImageSlider() {
	const buttons = document.querySelectorAll('[data-carousel-button]')
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			const offset = button.dataset.carouselButton === 'next' ? 1 : -1
			const slides = button
				.closest('[data-carousel]')
				.querySelector('[data-slides]')

			const activeSlide = slides.querySelector('[data-active]')
			let newIndex = [...slides.children].indexOf(activeSlide) + offset
			if (newIndex < 0) newIndex = slides.children.length - 1
			if (newIndex >= slides.children.length) newIndex = 0

			slides.children[newIndex].dataset.active = true
			delete activeSlide.dataset.active
		})
	})
	return (
		<section>
			<div class="carousel" data-carousel>
				<button class="carousel-button prev" data-carousel-button>
					&#8656
				</button>
				<button class="carousel-button next" data-carousel-button="next">
					&#8658
				</button>
				<ul data-slides>
					<li class="slide" data-active>
						<img
							src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
							alt="Nature image #1"
						/>
					</li>
					<li class="slide">
						<img
							src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
							alt="Nature image #2"
						/>
					</li>
					<li class="slide">
						<img
							src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							alt="Nature image #3"
						/>
					</li>
				</ul>
			</div>
			<div class="circles" data-circles>
				<input
					type="radio"
					class="radioButton"
					name="radio-button-one"
					data-radio-button
				/>
				<input
					type="radio"
					class="radioButton"
					name="radio-button-one"
					data-radio-button
				/>
				<input
					type="radio"
					class="radioButton"
					name="radio-button-one"
					data-radio-button
				/>
			</div>
		</section>
	)
}
