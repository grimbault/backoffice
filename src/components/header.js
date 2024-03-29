import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuSimple from "./Menu";

export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: ''
        }
    }

    OnSignOut() {
        localStorage.clear();
    }

    render() {
        if (!localStorage.getItem('token')) {
            return (
                <React.Fragment>
                    <AppBar position="relative">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                color="inherit"
                            >
                                Atlantis Project
                        </Typography>
                            <MenuSimple />
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                        >
                            Atlantis Project
                        </Typography>
                        <MenuSimple />
                        <Button
                            style={{ marginLeft: 'auto' }}
                            variant="contained"
                            color="primary"
                            href="/"
                        // onClick={this.OnSignOut.bind(this)}
                        >
                            Log out
                    </Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}