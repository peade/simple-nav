import { useDispatch, useSelector } from 'react-redux'
import { RootState, RootDispatch } from './index'
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<RootDispatch>()
