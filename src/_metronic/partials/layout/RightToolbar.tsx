import {FC} from 'react'
import {DemosToggleDrawer} from './demos-drawer/DemosToggleDrawer'
import {ToggleHelpDrawer} from './help-drawer/ToggleHelpDrawer'
import {DemosDrawer} from './demos-drawer/DemosDrawer'
import {HelpDrawer} from './help-drawer/HelpDrawer'
import {PurchaseButton} from './purchase/PurchaseButton'

const RightToolbar: FC = () => {
  return (
    <>


      <DemosDrawer />
      <HelpDrawer />
    </>
  )
}

export {RightToolbar}
