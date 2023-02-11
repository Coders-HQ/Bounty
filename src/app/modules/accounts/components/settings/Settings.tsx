import React from 'react'
import {ProfileDetails} from './cards/ProfileDetails'
import {ConnectedAccounts} from './cards/ConnectedAccounts'
import {DeactivateAccount} from './cards/DeactivateAccount'

export function Settings() {
  return (
    <>
      <ProfileDetails />
      <ConnectedAccounts />
      <DeactivateAccount />
    </>
  )
}
