import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

interface error extends ErrorRequestHandler {
  status: number;
  message: any;
}

const errorHandler = async (
  error: error,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
  res.status(error.status).json({error: `Erro: ${error.message}`})
}