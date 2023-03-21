export const validateSimpleName = (value: any) => {
	let errorMessage

	if (!/^[a-zA-Z\s]{3,}$/.test(value)) {
		errorMessage = 'Campo requerido. Ingresa un banco valido'
	}

	return errorMessage
}

export const validateUserName = (value: any) => {
	let errorMessage

	if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}( [a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,})+$/.test(value)) {
		errorMessage = 'Campo requerido. Ingresa un nombre y apellido validos.'
	}
	return errorMessage
}

export const validateAmount = (value: any) => {
	let errorMessage

	if (!/^[0-9\.]+$/.test(value)) {
		errorMessage = 'Campo requerido. Ingresa una cantidad valida.'
	}
	return errorMessage
}

export const validateDate = (value: any) => {
	let errorMessage

	if (!value) {
		errorMessage = 'Campo requerido.'
	}
	return errorMessage
}

export const validateRef = (value: any) => {
	let errorMessage

	if (!/^[0-9]{4,}$/.test(value)) {
		errorMessage = 'Campo requerido.'
	}
	return errorMessage
}

export const validatePhone = (value: any) => {
	let errorMessage
	if (
		!/^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2,3})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2,3}(([\d][\s|\-|\.]?){2,3})?)?)$/.test(
			value
		)
	) {
		errorMessage = 'Campo requerido. ingresa un número de teléfono valido.'
	}

	return errorMessage
}
