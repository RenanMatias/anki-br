export class InternalServerError extends Error {
  constructor({ cause }) {
    super("Um error interno não esperado aconteceu.", {
      cause,
    });
    this.name = "InteralServerError";
    this.action = "Entre com contato com o suporte.";
    this.statusCode = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
