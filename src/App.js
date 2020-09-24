import React, { useState, useMemo } from "react";
import CartList from './components/cart/CartList'
import FormCart from './components/cart/FormCart'
import Spinner from './components/spinner'
import AppContext from './components/context/AppContext'
import data from './data'

const App = props => {

	const [items, setItems] = useState(data);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const addUser = async (userName) => {
		if (items.find((item) => item.login === userName)) return
		try {
			setLoading(true);
			setError('');
			const url = `https://api.github.com/users/${userName}`;
			const r = await fetch(url);
			if (!r.ok) {
				setError("Unsuccessfully response");
				throw Error('Bad response')
			}
			const item = await r.json();
			setItems(items => [item, ...items])
		} catch (err) {
			setError(err.message)
			setTimeout(() => {
				setError('')
			}, 3000);
		} finally {
			setLoading(false)
		}

	}

	const deleteItem = id => {
		if (!window.confirm("Are you sure to delete this item?")) {
			return false;
		}
		setItems(items => items.filter(item => item.id !== id))
	}


	const value = useMemo(() => ({ deleteItem }), []);

	return (
		<AppContext.Provider value={value}>
			<div className="container">
				{loading && <Spinner />}
				{error && <h2>{error}</h2>}
				<FormCart addUser={addUser} isDisabled={loading} />
				<CartList items={items} />
			</div>
		</AppContext.Provider>
	);

}
export default App;
