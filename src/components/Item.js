import React, { useContext } from "react";
import AppContext from '../context/AppContext'
import "./Item.css";

const Item = ({ item }) => {
	const value = useContext(AppContext);
	return (
		<li className="item-box">
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					checked={item.packed}
					onChange={() => { }}
					id={item.id}
				/>
				<label className="form-check-label" htmlFor={item.id}>
					{" "}
					{item.value}
				</label>
			</div>
			<button className="btn btn-secondary btn-sm" onClick={() => value(item.id, item.packed)}>
				Remove
        </button>
		</li>
	);
}

export default Item;
