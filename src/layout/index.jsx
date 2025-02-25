import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'layout/header'
import { Footer } from 'layout/footer'
import { Spacing } from 'layout/common/spacing'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({ root: { background: theme.palette.background.main } }))

export const Layout = ({ children }) => <Box className={useStyles().root}>
  <Header />

  <Spacing>
    {children}
    <Footer />
  </Spacing>
</Box>

Layout.propTypes = { children: PropTypes.node.isRequired }
