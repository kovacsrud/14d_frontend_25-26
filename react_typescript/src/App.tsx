import Header from "./components/Header"
import SubHeader from "./components/SubHeader"
import Section from "./components/Section"
import TypiCode from "./components/TypiCode"
import RandomUser from "./components/RandomUser"

function App() {
 

  return (
    <div>
      <h1 className="text-3xl text-center text-sky-800">React+TypeScript</h1>            
      <Header headerText="TypeScript H1" id={4} />
      <TypiCode />
      <RandomUser />
      <SubHeader>
         <p>Bekezdés 1.</p>
         <p>Bekezdés 2.</p>
      </SubHeader>
      <Section title="Általános iskola">
        <p>Kovács Ubul 8.A</p>
        <p>Szabó Kázmér 8.B</p>
      </Section>
      <Section>
        <h2>Dolgozók</h2>
        <p>Kósa Egon portás</p>
      </Section>
    </div>
  )
}

export default App
