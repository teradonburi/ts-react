import React, { useContext } from 'react'

type ValueOf<T> = T[keyof T]

const TAB_TYPES = {
  HOME: 'home',
  ABOUT: 'about',
  OTHERS: 'others',
}

const tabData = [
  {
    text: 'Home',
    type: TAB_TYPES.HOME,
  },
  {
    text: 'About',
    type: TAB_TYPES.ABOUT,
  },
  {
    text: 'Others',
    type: TAB_TYPES.OTHERS,
  },
]

const TabContext = React.createContext<{
  tabType: ValueOf<typeof TAB_TYPES>
  changeTab: (tabType: ValueOf<typeof TAB_TYPES>) => void
}>({
  tabType: TAB_TYPES.HOME,
  changeTab: () => null,
})

function Menu({ children }: { children: React.ReactNode }): JSX.Element {
  const [tabType, setTabType] = React.useState<ValueOf<typeof TAB_TYPES>>(
    TAB_TYPES.HOME
  )

  const changeTab = React.useCallback(
    (tabType: ValueOf<typeof TAB_TYPES>) => {
      setTabType(tabType)
    },
    [tabType]
  )

  return (
    <TabContext.Provider
      value={{
        tabType,
        changeTab,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

function Home({ children }: { children?: React.ReactNode }) {
  const { tabType } = useContext(TabContext)

  return tabType === TAB_TYPES.HOME ? (children as JSX.Element) : null
}

function About({ children }: { children?: React.ReactNode }) {
  const { tabType } = useContext(TabContext)

  return tabType === TAB_TYPES.ABOUT ? (children as JSX.Element) : null
}

function Others({ children }: { children?: React.ReactNode }) {
  const { tabType } = useContext(TabContext)

  return tabType === TAB_TYPES.OTHERS ? (children as JSX.Element) : null
}

function Tabs() {
  const { tabType, changeTab } = useContext(TabContext)

  return (
    <ul style={{ display: 'flex', padding: 0 }}>
      {tabData.map((tab) => (
        <li
          key={tab.type}
          style={{
            display: 'block',
            color: tabType === tab.type ? 'black' : 'grey',
            marginRight: 5,
            padding: 0,
            cursor: 'pointer',
          }}
          onClick={() => changeTab(tab.type)}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  )
}

Menu.Tabs = Tabs
Menu.Home = Home
Menu.About = About
Menu.Others = Others

export default Menu
