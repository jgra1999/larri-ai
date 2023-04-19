export type formTypes = {
	eForms: React.FormEvent<HTMLFormElement>
}

export type eForm = React.FormEvent<HTMLFormElement>

export interface CheckoutFormValues {
	bank: string | undefined
	account_holder: string | undefined
	amount: number | undefined
	date: Date | undefined
	num_ref: number | undefined
}

export interface UserFormValues {
	full_name: string | undefined
	city: string | undefined
	phone: number | undefined
	is_student: boolean
	terms: boolean
}
