import { Button } from '@carbon/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Test() {
  return (
    <div>
        <h2>Hi There, Welcome to the Test Page</h2>
        <Link to="/data-table">
            <Button>View Table Demo</Button>
        </Link>
    </div>
  )
}
