export default function MenuDropDownButton() {
	return (
		<div class="dropdown-button" data-dropdown>
			<button class="link" data-dropdown-button>
				Menu
			</button>
			<div class="dropdown-menu">
				<div class="dropdown-links">
					<button>
						<a href="#" class="link">
							Breakfast
						</a>
					</button>
					<button>
						<a href="#" class="link">
							Brunch
						</a>
					</button>
					<button>
						<a href="#" class="link">
							Lunch
						</a>
					</button>
					<button>
						<a href="#" class="link">
							Dinner
						</a>
					</button>
				</div>
			</div>
		</div>
	)
}
