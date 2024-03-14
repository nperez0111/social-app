import React from 'react'
import {View} from 'react-native'
import {AppBskyActorDefs, ModerationDecision} from '@atproto/api'
import {sanitizeHandle} from 'lib/strings/handles'
import {sanitizeDisplayName} from 'lib/strings/display-names'
import {Shadow} from '#/state/cache/types'

import {atoms as a, useTheme} from '#/alf'
import {Text} from '#/components/Typography'

export function ProfileHeaderDisplayName({
  profile,
  moderation,
}: {
  profile: Shadow<AppBskyActorDefs.ProfileViewDetailed>
  moderation: ModerationDecision
}) {
  const t = useTheme()
  return (
    <View pointerEvents="none">
      <Text
        testID="profileHeaderDisplayName"
        style={[t.atoms.text, a.text_4xl, {fontWeight: '500'}]}>
        {profile.handle === 'dholms.xyz'
          ? 'DIPSHIT WILLY'
          : sanitizeDisplayName(
              profile.displayName || sanitizeHandle(profile.handle),
              moderation.ui('displayName'),
            )}
      </Text>
    </View>
  )
}
