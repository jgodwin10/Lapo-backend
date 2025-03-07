type HttpStatusCode = 400 | 401 | 403 | 404 | 500 | 407;

export class CustomAPIError extends Error {
	statusCode: HttpStatusCode;

	constructor(message: string, statusCode: HttpStatusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

export class BadRequestError extends CustomAPIError {
	constructor(message: string) {
		super(message, 400);
	}
}

export class UnauthenticatedError extends CustomAPIError {
	constructor(message: string) {
		super(message, 401);
	}
}

export class ForbiddenError extends CustomAPIError {
	constructor(message: string) {
		super(message, 403);
	}
}

export class NotFoundError extends CustomAPIError {
	constructor(message: string) {
		super(message, 404);
	}
}

export class InternalServerError extends CustomAPIError {
	constructor(message: string) {
		super(message, 500);
	}
}

export class ExpiredAuthError extends CustomAPIError {
	constructor(message: string) {
		super(message, 407);
	}
}
