/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/dashboard.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />


      <SidebarMenuItem
        to='/crafted/account/Overview'
        title='My Profile'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/myprofile.svg'
      />

      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/myteam.svg'
        title='My Team'
        fontIcon='bi-layers'
      />


      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'></span>
        </div>
      </div>


      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/learn.svg'
        title='Learn'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/code.svg'
        title='Code'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/event.svg'
        title='Events'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/challenge.svg'
        title='Challenges'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/ranking.svg'
        title='Ranking'
        fontIcon='bi-layers'
      />



 
    </>
  )
}

export {SidebarMenuMain}
