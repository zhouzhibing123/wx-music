export interface IRequestInstance{
  state: any
}
export interface InitConfig{
  baseUrl: string,
  timeout?: number
}

export interface IRequestConfig{
  url: string,
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT',
  data?: any
}

export interface IResponseContext{
  data: any
}