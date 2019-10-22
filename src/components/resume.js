import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Vinicius Cruz</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Ser um colaborador à empresa e ampliar meus conhecimentos para aprimoramento profissional.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Endereço</h5>
            <p>Av. Graciela Flores de Piteri</p>
            <h5>Telefone</h5>
            <p>(11) 98872-9271</p>
            <h5>Email</h5>
            <p>wh0adscrypt@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Formação</h2>


            <Education
              startYear={2019}
              endYear={2020}
              schoolName="FIAP"
              schoolDescription="Cybersecurity"
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="UNICIV"
                 schoolDescription="Redes de Computadores e Segurança"
                  />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="UNICIV"
                 schoolDescription="Engenharia de Software: Aplicada a Qualidade de Software e TDD"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experiência</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="PREFEITURA MUNICIPAL DE ITAPEVI"
              jobDescription="Tecnico de Informatica"
              />

              <Experience
                startYear={2018}
                endYear={2018}
                jobName="+NET & TELECOM"
                jobDescription="Tecnico de Telecom"
                />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Proteus Information Security Services"
                jobDescription="Analista de Segurança da Informação"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={55}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={30}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
