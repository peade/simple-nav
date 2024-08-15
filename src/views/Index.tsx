import { favoriteWebSites } from '@/utils/favorites'
export default function Index() {
  return (
    <div>
      <h1>导航网站</h1>
      <p>一个超级简单的导航网站</p>
      <div>
        {favoriteWebSites.map((item) => {
          return (
            <div key={item.name}>
              <h2 className="mb-4 mt-50px">{item.name}</h2>
              {item.children &&
                item.children.length > 0 &&
                item.children.map((child) => {
                  return (
                    <div key={child.name}>
                      <h4 id={child.name} className="leading-12">
                        {child.name}
                      </h4>
                      {child.children && child.children.length > 0 && (
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {child.children.map((site) => {
                            return (
                              <div
                                className=" p-4 rounded-md shadow-md	bg-white"
                                key={site.name}
                              >
                                <a
                                  href={site.url}
                                  target="_blank"
                                  className="no-underline text-gray-800"
                                >
                                  <div>
                                    <p className="mt-0 mb-2 font-bold text-xl">
                                      {site.name}
                                    </p>
                                    <p className="m-0 text-sm text-ellipsis overflow-hidden truncate">
                                      {site.desc}
                                    </p>
                                  </div>
                                </a>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
