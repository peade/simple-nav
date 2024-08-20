import { setCurActive } from '@/store/curActiveSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { favoriteWebSites } from '@/utils/favorites'
import { useMemo } from 'react'
export default function LeftMenu() {
  const dispatch = useAppDispatch()

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

  const curMenu = useAppSelector((state) => state.curActive.value)

  function setCurMenu(name: string) {
    setTimeout(() => {
      dispatch(setCurActive(name))
    }, 5)
  }

  function goTop() {
    window.scrollTo(0, 0)
  }

  // const menus = favoriteWebSites
  return (
    <div className="">
      <div className="fixed w-200px h-full bg-gray-200 overflow-y-auto">
        <div
          className="p-4 font-bold text-center cursor-default text-30px "
          onClick={goTop}
        >
          简单导航
        </div>
        <ul className="list-none m-0 p-0 leading-12 font-bold ">
          {menus.map((mItem) => {
            return (
              <li key={mItem.name}>
                <a
                  className={
                    'cursor-default bg-neutral-300	w-full block px-4  no-underline ' +
                    (curMenu === mItem.name
                      ? ' text-black bg-white'
                      : 'text-gray-700')
                  }
                  href={'#' + mItem.name}
                  onClick={() => setCurMenu(mItem.name)}
                >
                  {mItem.name}
                </a>
                {mItem.children && mItem.children.length > 0 && (
                  <ul className="list-none pl-0">
                    {mItem.children.map((subItem) => {
                      return subItem.children!.length > 0 ? (
                        <li
                          key={subItem.name}
                          className={
                            'text-center ' +
                            (curMenu === subItem.name ? 'bg-white' : '')
                          }
                        >
                          <a
                            className={
                              ' block px-4 no-underline cursor-default ' +
                              (curMenu === subItem.name
                                ? ' text-black'
                                : 'text-gray-700')
                            }
                            href={'#' + subItem.name}
                            onClick={() => setCurMenu(subItem.name)}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ) : (
                        <></>
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
