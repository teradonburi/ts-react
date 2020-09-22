import { act, renderHook } from '@testing-library/react-hooks'
import { useMenuOpen } from '../hooks/useMenu'

it('should toggle', () => {
  const { result } = renderHook(() => useMenuOpen())
  // 初期状態
  expect(result.current.isOpen).toBe(false)

  // 開閉する
  act(() => {
    result.current.toggle()
  })
  expect(result.current.isOpen).toBe(true)

  // もう一度開閉する
  act(() => {
    result.current.toggle()
  })
  expect(result.current.isOpen).toBe(false)
})
