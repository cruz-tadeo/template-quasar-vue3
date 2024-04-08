export interface IHttpAdapter {
	get<T>(url: string, withToken?:boolean): Promise<T>;
}
