import React, { useState, useCallback, useMemo } from "react";
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

	const addItem = useCallback(
		(title, packed = false) => {
			const newItem = {
				value: title, id: id(), packed: packed
			}
			if (packed === false) {
				setUnpackedItems((unpackedItems) => ([newItem, ...unpackedItems]));
			} else {
				setPackedItems((packedItems) => ([newItem, ...packedItems]));
			}
		},
		[],
	)


	const removeItem = useCallback((id, packed) => {
		if (packed) {
			setPackedItems((packedItems) => (packedItems.filter(item => item.id !== id)));
		} else {
			setUnpackedItems((unpackedItems) => (unpackedItems.filter(item => item.id !== id)));
		}
	}, [])



	const toggleItem = useCallback(
		(item) => {
			if (item.packed) {
				removeItem(item.id, item.packed);
				addItem(item.value)
			} else {
				removeItem(item.id, item.packed);
				addItem(item.value, true)
			}
		},
		[addItem, removeItem],
	)



	const toggleAllItems = () => {
		const toAdd = [...packedItems].map(item => {
			item.packed = false;
			return item;
		})

		setUnpackedItems([...toAdd, ...unpackedItems]);
		setPackedItems([]);

	}

	const value = useMemo(() => ({ removeItem, toggleItem }), [removeItem, toggleItem]);

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
						<button className="btn btn-danger btn-lg btn-block" onClick={toggleAllItems}>
							Mark All As Unpacked
            </button>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);

}

export default App;
