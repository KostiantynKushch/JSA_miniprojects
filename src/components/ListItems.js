import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import PropTypes from 'prop-types'


const ListItems = ({ title, items }) => {


	const [searchTerm, setSearchTerm] = useState(null)

	const updateFilter = ({ target }) => {
		setSearchTerm(target.value)
	};

	const renderItems = () => {
		if (searchTerm) {
			return items.filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
				.map(item => <Item key={item.id} item={item} />)
		} else {
			return items.map(item => <Item key={item.id} item={item} />)
		}
	}
	return (
		<section>
			<h3 className="mb-3">{title}</h3>
			<Filter onChange={updateFilter} />
			<ul className="mb-3 p-0">
				{renderItems()}
			</ul>
		</section>
	);

}

ListItems.protoType = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired
}

export default ListItems;
