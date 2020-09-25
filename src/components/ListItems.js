import React, { } from "react";
import Item from "./Item";
import Filter from "./Filter";
import PropTypes from 'prop-types'


const ListItems = ({ title, items }) => {

	const updateFilter = searchTerm => { };
	return (
		<section>
			<h3 className="mb-3">{title}</h3>
			<Filter filter={""} onChange={updateFilter} />
			<ul className="mb-3 p-0">
				{items.map(item => <Item key={item.id} item={item} />)}
			</ul>
		</section>
	);

}

ListItems.protoType = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired
}

export default ListItems;
