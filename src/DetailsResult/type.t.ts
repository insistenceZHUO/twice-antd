export interface IDetailsResultProps{ 
  visible: boolean,
  getDetailsAjax: () => void,
  onchange: () => void,
  id?:number  
}

export interface IDetailsResultStart { 
  loading: boolean,
  status: boolean
}