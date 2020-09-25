import React, { useState } from "react";
import PropTypes from 'prop-types'


const NewItem = ({ addItem }) => {

	const [value, setValue] = useState("");

	const handleChange = ({ target }) => {
		//
		setValue(target.value);
	};

	const handleSubmit = event => {
		//
		event.preventDefault();
		addItem(value.trim());
		setValue('');
	};


	return (
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-md-10">
					<input className="form-control mb-3" type="text" value={value} onChange={handleChange} />
				</div>
				<div className="col-md-2">
					<input className="btn btn-success" type="submit" value="Add item" disabled={value !== '' ? false : true} />
				</div>
			</div>
		</form>
	);
}

NewItem.propTypes = {
	addItem: PropTypes.func.isRequired
}

export default NewItem;
