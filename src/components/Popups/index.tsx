import { FC } from 'react'
import { useActivePopups } from 'app/states/application/hooks'
import PopupItem from './PopupItem'

const Popups: FC = () => {
  const activePopups = useActivePopups()

  if (activePopups.length === 0) return <span />

  return (
    <>
      <div
        className={`hidden md:block fixed right-[36px] max-w-[355px] w-full z-3 flex flex-col top-[88px]'
          }`}
      >
        {activePopups.map((item: any) => (
          <PopupItem key={item.key} content={item.content} popKey={item.key} removeAfterMs={item.removeAfterMs} />
        ))}
      </div>
      <div className="fixed md:hidden left-4 right-4 top-[88px] fit-content mb-[20px]">
        <div
          className="h-[99%] overflow-x-auto overflow-y-hidden flex flex-col gap-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {activePopups // reverse so new items up front
            .slice(0)
            .reverse()
            .map((item: any) => (
              <PopupItem key={item.key} content={item.content} popKey={item.key} removeAfterMs={item.removeAfterMs} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Popups