interface IWebSite {
  url?: string
  name: string
  desc?: string
  icon?: string
  type?: string
  children?: IWebSite[]
}
