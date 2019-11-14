import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  '-webkit-linear-gradient(to right, #7F00FF, #E100FF )',
                background: 'linear-gradient(to right, #7F00FF,#E100FF)'
              }}
            >
              Semana OmniStack v9.0
            </CardTitle>
            <CardText>
              App desenvolvido durante a Semana OmniStack v9 da Rocketseat
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/cryptwh0ads/semana-omnistackv9'
                target='blank'
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  '-webkit-linear-gradient(to right, #7F00FF, #E100FF )',
                background: 'linear-gradient(to right, #7F00FF,#E100FF)'
              }}
            >
              Billing cycle
            </CardTitle>
            <CardText>App para controle de gastos financeiros</CardText>
            <CardActions border>
              <a
                href='https://github.com/cryptwh0ads/billingcycle-app'
                target='blank'
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  '-webkit-linear-gradient(to right, #7F00FF, #E100FF )',
                background: 'linear-gradient(to right, #7F00FF,#E100FF)'
              }}
            >
              Bug Tracker
            </CardTitle>
            <CardText>
              Formulario para feedback com integração com a API google
              spreadsheet
            </CardText>
            <CardActions border>
              <a
                href='https://github.com/cryptwh0ads/fslab-bugtracker'
                target='blank'
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: '#7F00FF',
                background:
                  '-webkit-linear-gradient(to right, #7F00FF, #E100FF )',
                background: 'linear-gradient(to right, #7F00FF,#E100FF)'
              }}
            >
              CIPT
            </CardTitle>
            <CardText>Conecta: Informatica para Todos.</CardText>
            <CardActions border>
              <a href='https://github.com/cryptwh0ads/CIPT' target='blank'>
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Social</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
