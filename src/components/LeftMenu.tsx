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
  // const menus = favoriteWebSites
  return (
    <>
      <div className="p-4 font-bold text-center  bg-emerald-400	">简单导航</div>
      <ul className="list-none m-0 p-0 leading-12 font-bold ">
        {menus.map((mItem) => {
          return (
            <li key={mItem.name}>
              <a
                className="hover:text-violet-700 cursor-default bg-neutral-300	w-full block px-4 "
                onClick={() => showChildren(mItem)}
              >
                {mItem.name}
              </a>
              {mItem.children && mItem.children.length > 0 && (
                <ul className="list-none pl-0">
                  {mItem.children.map((subItem) => {
                    return (
                      <li key={subItem.name}>
                        <a className="hover:text-violet-700 cursor-default px-8">
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
    </>
  )
}
