import React from 'react'
import { SafeAreaView } from 'react-native'
import Assets from '../Assets'

export const TmSafeAreaView = (props) => {
	return <SafeAreaView {...props} style={styles.container} />
}

const styles = {
	container: {
		flex: 1,
	},
}
