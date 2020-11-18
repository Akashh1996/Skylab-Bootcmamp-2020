import React from 'react'

function SlideInput () {
    return (
        <>
        <form class="rowValidaton">
			<label for="switch">Viaje personal</label>
			<label class="switch">
				<input type="checkbox" />
				<span class="slider round"></span>
			</label>
		</form>
    </>
    )
}

export default SlideInput;