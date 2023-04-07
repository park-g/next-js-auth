import Header from '@components/header'

import * as styles from './styles'

const Page = ({ children }) => (
  <>
    <Header/>
    <main css={styles.container}>
      {children}
    </main>
  </>
)

export default Page
