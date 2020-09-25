import React, { useState } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import AppContext from './context/AppContext'
import { generate as id } from "shortid";
import { defaultState } from "./data";

const App = () => {

	const unpacked = defaultState.filter(item => item.packed === false);
	const packed = defaultState.filter(item => item.packed === true);
	const [unpackedItems, setUnpackedItems] = useState(unpacked);
	const [packedItems, setPackedItems] = useState(packed);

	const addItem = (title, packed = false) => {
		const newItem = {
			value: title, id: id(), packed: packed
		}
		if (packed === false) {
			setUnpackedItems([newItem, ...unpackedItems]);
		} else {
			setPackedItems([newItem, ...packedItems]);
		}
	}

	const removeItem = (id, packed) => {
		if (packed) {
			setPackedItems(packedItems.filter(item => item.id !== id));
		} else {
			setUnpackedItems(unpackedItems.filter(item => item.id !== id));
		}
	}


	const toggleItem = (item) => {
		if (item.packed) {
			removeItem(item.id, item.packed);
			addItem(item.value)
		} else {
			removeItem(item.id, item.packed);
			addItem(item.value, true)
		}
	}

	const value = [removeItem, toggleItem];

	return (
		<AppContext.Provider value={value}>
			<div className="container py-3">
				<NewItem addItem={addItem} />
				<div className="row">
					<div className="col-md-5">
						<ListItems title="Unpacked Items" items={unpackedItems} />
					</div>
					<div className="offset-md-2 col-md-5">
						<ListItems title="Packed Items" items={packedItems} />
						<button className="btn btn-danger btn-lg btn-block">
							Mark All As Unpacked
            </button>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);

}

export default App;
