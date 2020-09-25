import React, { } from 'react';

const Filter = ({ updateFilter, ...rest }) => {

	return (
		<div className="mb-3">
			<input type="text"
				className="form-control"

				onChange={updateFilter}
				{...rest}
			/>
		</div>
	);

}

export default Filter;
