import { useState } from 'react'

export const useMenuOpen = (): {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  toggle: () => void
} => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return { isOpen, setIsOpen, toggle }
}
