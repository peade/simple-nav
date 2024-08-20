import { setCurActive } from '@/store/curActiveSlice'
import { useAppDispatch } from '@/store/hooks'
import { useEffect } from 'react'

export function useActiveMenu(menuList: { name: string }[]) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleScroll = () => {
      let minEle = menuList[0]
      let minTop = 0
      for (let i = 0; i < menuList.length; i++) {
        const ele = document.getElementById(menuList[i].name)
        if (ele) {
          const top = ele.getBoundingClientRect().top
          if (top < 0) {
            continue
          }
          if ((top > 0 && top < minTop) || minTop === 0) {
            minTop = top
            minEle = menuList[i]
          }
        }
      }

      dispatch(setCurActive(minEle.name))
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch, menuList])
}
