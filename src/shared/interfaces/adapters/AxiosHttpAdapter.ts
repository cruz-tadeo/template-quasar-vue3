import 'reflect-metadata';
import { IHttpAdapter } from './IHttpAdapter';
import axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify';

@injectable()
export class AxiosHttpAdapter implements IHttpAdapter {
	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create();
	}

	async get<T>(url: string): Promise<T> {
		const response = await this.axiosInstance.get<T>(url);

		return response.data;
	}
}
