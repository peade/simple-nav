import { useEffect } from 'react'

export function useActiveMenu(menuList: { name: string }[]) {
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
      console.log(minEle)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuList])
}
