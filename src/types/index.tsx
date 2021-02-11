export interface RequestBody {
  name: string;
}

export interface ResponseBody extends RequestBody {
  id: string;
}
