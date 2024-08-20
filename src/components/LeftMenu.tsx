import { useAppSelector } from '@/store/hooks'
import { favoriteWebSites } from '@/utils/favorites'
import { useMemo } from 'react'
export default function LeftMenu() {
  const menus = useMemo(
    () =>
      favoriteWebSites.filter((item) => {
        if (item.type === 'menu') {
          item.children = item.children!.filter((child) => {
            return child.type === 'menu'
          })
        }
        return item.type === 'menu'
      }),
    []
  )
  function showChildren(menuItem: IWebSite) {
    console.log(menuItem)
  }

  const curMenu = useAppSelector((state) => state.curActive.value)

  // const menus = favoriteWebSites
  return (
    <div className="">
      <div className="fixed w-200px h-full bg-gray-200 overflow-y-auto">
        <div className="p-4 font-bold text-center  	bg-emerald-400">
          简单导航
        </div>
        <ul className="list-none m-0 p-0 leading-12 font-bold ">
          {menus.map((mItem) => {
            return (
              <li key={mItem.name}>
                <span
                  className={
                    'hover:text-violet-700 cursor-default bg-neutral-300	w-full block px-4 '
                  }
                  onClick={() => showChildren(mItem)}
                >
                  {mItem.name}
                </span>
                {mItem.children && mItem.children.length > 0 && (
                  <ul className="list-none pl-0">
                    {mItem.children.map((subItem) => {
                      return (
                        <li
                          key={subItem.name}
                          className={
                            'text-center ' +
                            (curMenu === subItem.name ? 'bg-white' : '')
                          }
                        >
                          <a
                            className={
                              ' block px-4 ' +
                              (curMenu === subItem.name
                                ? ' text-black'
                                : 'text-gray-700')
                            }
                            href={'#' + subItem.name}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
