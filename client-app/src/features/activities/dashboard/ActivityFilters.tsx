import { observer } from 'mobx-react-lite'
import React, { Fragment } from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

const ActivityFilters = () => {
    return (
        <Fragment>
            <Menu vertical sixe='large' style={{ width: '100%', marginTop: 27 }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content="I'm Going" />
                <Menu.Item content="I'm Hosting" />
            </Menu>
            <Header />
            <Calendar />
        </Fragment>
    )
}

export default observer(ActivityFilters)
