export function getErrorMessage(err) {
	switch (err.name) {
		case "ValidationError":
			if (err.errors) {
				const firstError = Object.values(err.errors).at(0);
				return firstError.message;
			}
			return err.message;
		default:
			return err.message;
	}
}
