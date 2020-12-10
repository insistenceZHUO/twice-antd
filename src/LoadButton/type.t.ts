export interface ILoadButton {
  loadingText: string,
  successText: string,
  loading: boolean,
  showMsg: boolean,
  title: string,
  showModal: boolean,
  onClick: () => void,
  handleOk: () => void,
  timer?: boolean
}